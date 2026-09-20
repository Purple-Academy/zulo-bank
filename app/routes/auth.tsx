import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <main className="w-full min-h-screen flex justify-center items-center bg-[#F9FAFB] px-4 py-8">
      <Outlet />
    </main>
  );
}
