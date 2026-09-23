import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Cookies from "js-cookie";
import { addUser, findUserByEmail } from "../../components/auth/user-store";

type SessionUser = { name: string; email: string };

type AuthResult =
  { ok: true; user: SessionUser } | { ok: false; error: string };

type AuthContextValue = {
  user: SessionUser | null;
  register: (
    name: string,
    email: string,
    password: string,
  ) => Promise<AuthResult>;
  login: (email: string, password: string) => Promise<AuthResult>;
  logout: () => void;
};

const SESSION_COOKIE = "session_email";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<SessionUser | null>(null);

  useEffect(() => {
    const sessionEmail = Cookies.get(SESSION_COOKIE);
    if (!sessionEmail) return;

    const stored = findUserByEmail(sessionEmail);
    if (stored) {
      setUser({ name: stored.name, email: stored.email });
    } else {
      Cookies.remove(SESSION_COOKIE);
    }
  }, []);

  const register = useCallback(
    async (
      name: string,
      email: string,
      password: string,
    ): Promise<AuthResult> => {
      if (findUserByEmail(email)) {
        return { ok: false, error: "ეს ემაილი უკვე რეგისტრირებულია." };
      }

      addUser({ name, email, password });

      Cookies.set(SESSION_COOKIE, email, { expires: 7, sameSite: "strict" });
      const sessionUser = { name, email };
      setUser(sessionUser);
      return { ok: true, user: sessionUser };
    },
    [],
  );

  const login = useCallback(
    async (email: string, password: string): Promise<AuthResult> => {
      const stored = findUserByEmail(email);
      if (!stored || stored.password !== password) {
        return { ok: false, error: "ემაილი ან პაროლი არასწორია." };
      }

      Cookies.set(SESSION_COOKIE, email, { expires: 7, sameSite: "strict" });
      const sessionUser = { name: stored.name, email: stored.email };
      setUser(sessionUser);
      return { ok: true, user: sessionUser };
    },
    [],
  );

  const logout = useCallback(() => {
    setUser(null);
    Cookies.remove(SESSION_COOKIE);
  }, []);

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
