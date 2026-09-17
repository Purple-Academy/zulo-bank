import type { Route } from "./+types/home";
import ShowCase from '../pages/ShowCase.Pages';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "zulo-bank | home" },
    { name: "description", content: "Welcome  zulo-bank!" },

  ];
}

export default function Home() {
  return <ShowCase />;
}
