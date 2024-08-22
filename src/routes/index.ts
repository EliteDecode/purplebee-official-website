import { lazy } from "react";

export const Home = lazy(() => import("../pages/Home/Home"));
export const About = lazy(() => import("../pages/About/About"));

//Industry
export const Education = lazy(() => import("../pages/Industries/Education"));
export const Healthcare = lazy(() => import("../pages/Industries/HealthCare"));
export const Agriculture = lazy(
  () => import("../pages/Industries/Agriculture")
);
export const Technology = lazy(() => import("../pages/Industries/Technology"));

//Error Boundary
export const ErrorPage = import("../pages/Error/Error");
export const ErrorBoundary = import("../pages/Error/ErrorBoundary");
