
import { Products } from "~/pages/products.Pages";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "zulo-bank | products " },
    { name: "description", content: "Welcome  zulo-bank!" },

  ];
}

export default function Home() {
  return <Products />;
}