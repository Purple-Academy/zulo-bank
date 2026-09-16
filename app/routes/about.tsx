import { About } from "~/pages/about";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "zulo-bank | about" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <About />;
}