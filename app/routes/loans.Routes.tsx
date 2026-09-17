import { Loans } from "~/pages/loans.Pages";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "zulo-bank | loans" },
    { name: "description", content: "Welcome  zulo-bank!" },

  ];
}

export default function Home() {
  return <Loans />;
}