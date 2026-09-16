import { Loans } from "~/pages/loans";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "zulo-bank | loans" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Loans />;
}