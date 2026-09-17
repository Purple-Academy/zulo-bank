import type { Route } from "./+types/home";
import { Welcome } from "../pages/welcome.Pages";

export function meta({}: Route.MetaArgs) {
  return [
   {
      name: "home",
      content: "Welcome to Zulo Bank — your modern banking experience.",
     },
  ];
}

export default function Home() {
  return <Welcome />;
}
