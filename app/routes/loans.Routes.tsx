import { Loans } from "~/pages/loans.Pages";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "zulo-bank | loans" },
    {name: "loan-information", content: "Explore Zulo Bank loan options with flexible solutions designed to fit your financial needs.",}


  ];
}

export default function Home() {
  return <Loans />;
}