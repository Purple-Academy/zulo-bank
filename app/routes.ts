import { route, type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("auth", "routes/auth.tsx"),
] satisfies RouteConfig;
