import { Products } from "~/pages/products.Pages";
import type { Route } from "./+types/products.Routes";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Zulo Bank | Products" },
    {
      name: "description",
      content: "Discover Zulo Bank's modern banking products.",
    },
  ];
}

export default function Home() {
  return <Products />;
}
