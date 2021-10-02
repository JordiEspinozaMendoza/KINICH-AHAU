import { lazy } from "react";
const HomeScreen = lazy(() => import("../screens/HomeScreen"));
export const mainPageRoutes = [
  {
    path: "/",
    exact: true,
    component: HomeScreen,
    name: "HomeScreen",
  },
];
