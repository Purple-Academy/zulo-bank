import { index, route, type RouteConfig } from "@react-router/dev/routes";
export default [
  index("routes/home.Routes.tsx"),
  route("about", "routes/about.Routes.tsx"),
  route("loans", "routes/loans.Routes.tsx"),
  route("products", "routes/products.Routes.tsx"),
  route("CardShowCase", "routes/ShowCase.Routes.tsx"),
  route("auth", "routes/auth.tsx", [
    index("routes/auth/index.tsx"),
    route("sign-in", "routes/auth/sign-in.tsx"),
    route("sign-up", "routes/auth/sign-up.tsx"),
  ]),
] satisfies RouteConfig;
