import { index, route, type RouteConfig } from "@react-router/dev/routes";
export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("loans", "routes/loans.tsx"),
  route("products", "routes/products.tsx"),
  route("CardShowCase", "routes/CardShowcase.tsx"),
  route("auth", "routes/auth.tsx", [
    index("routes/auth/index.tsx"),
    route("sign-in", "routes/auth/sign-in.tsx"),
    route("sign-up", "routes/auth/sign-up.tsx"),
  ]),
  route("about", "routes/about.tsx"),
] satisfies RouteConfig;
