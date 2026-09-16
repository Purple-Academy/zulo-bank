import type { Route } from "./+types/home";
import CardShowCase from '../pages/cardShowCase';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "zulo-bank | home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <CardShowCase />;
}
