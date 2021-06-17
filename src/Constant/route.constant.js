import { lazy } from "react";
import withErrorBoundary from "../Components/HighOrderComponent/withErrorBoundary";

const AboutMe = lazy(() => import("../Pages/AboutMe"));
const CardInformation = lazy(() => import("../Pages/CardInformation"));
const Home = lazy(() => import("../Redux/Connect/home.connect"));
const ShoppingCart = lazy(() => import("../Redux/Connect/cart.connect"));
const PageNotFound = lazy(() => import("../Components/PageNotFound"));

export const ROUTES = [
  {
    path: "/",
    component: withErrorBoundary(Home),
    exact: true,
    private: true,
  },
  {
    path: "/about-me",
    component: withErrorBoundary(AboutMe),
    exact: true,
    private: true,
  },
  {
    path: "/card-information",
    component: withErrorBoundary(CardInformation),
    exact: true,
    private: true,
  },
  {
    path: "/cart",
    component: withErrorBoundary(ShoppingCart),
    exact: true,
    private: true,
  },
  {
    component: withErrorBoundary(PageNotFound),
  },
];
