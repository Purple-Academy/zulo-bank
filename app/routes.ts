import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("about", "routes/about.tsx"), route("loans", "routes/loans.tsx"), route("products", "routes/products.tsx"), route("CardShowCase", "routes/CardShowcase.tsx") ] satisfies RouteConfig;
