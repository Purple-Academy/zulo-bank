import { About } from "~/pages/about.Pages";
import type { Route } from "./+types/about.Routes";

export function meta({}: Route.MetaArgs) {
  return [
    {
      name: "about",
      content:
        "Learn more about Zulo Bank, our mission, values, and modern approach to banking.",
    },
  ];
}

export default function Home() {
  return <About />;
}
