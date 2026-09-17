import type { Route } from "./+types/home";
import { Welcome } from "../pages/welcome.Pages";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "zulo-bank | home" },
    { name: "description", content: "Welcome  zulo-bank!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
