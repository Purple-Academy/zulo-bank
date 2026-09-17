import type { Route } from "./+types/home";
import ShowCase from '../pages/ShowCase.Pages';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "zulo-bank | home" },
    {name: "keywords", content: "Zulo Bank, digital banking, online banking, finance",}

  ];
}

export default function Home() {
  return <ShowCase />;
}
