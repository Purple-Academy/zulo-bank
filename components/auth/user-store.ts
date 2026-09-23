export type StoredUser = {
  name: string;
  email: string;
  password: string;
};

const USERS_KEY = "app_users";

function readUsers(): StoredUser[] {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? (JSON.parse(raw) as StoredUser[]) : [];
  } catch {
    return [];
  }
}

function writeUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function findUserByEmail(email: string): StoredUser | undefined {
  return readUsers().find((u) => u.email.toLowerCase() === email.toLowerCase());
}

export function addUser(user: StoredUser) {
  const users = readUsers();
  users.push(user);
  writeUsers(users);
}
