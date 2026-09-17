import { About } from "~/pages/about.Pages";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "zulo-bank | about" },
    { name: "description", content: "Welcome  zulo-bank!" },
  ];
}

export default function Home() {
  return <About />;
}