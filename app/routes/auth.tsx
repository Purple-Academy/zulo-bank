import { Outlet } from "react-router";
import { AuthProvider } from "~/hooks/auth-context";

export default function AuthLayout() {
  return (
    <AuthProvider>
      <main className="w-full min-h-screen flex justify-center items-center bg-[#F9FAFB] px-4 py-8">
        <Outlet />
      </main>
    </AuthProvider>
  );
}
