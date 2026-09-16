
import { Products } from "~/pages/products";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "zulo-bank | products " },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Products />;
}