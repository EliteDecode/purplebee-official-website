import { lazy } from "react";

export const Home = lazy(() => import("../pages/Home/Home"));

//Industry
export const Education = lazy(() => import("../pages/Industries/Education"));
export const Healthcare = lazy(() => import("../pages/Industries/HealthCare"));
export const Agriculture = lazy(
  () => import("../pages/Industries/Agriculture")
);
export const Technology = lazy(() => import("../pages/Industries/Technology"));

//Company
export const About = lazy(() => import("../pages/Company/About"));
export const Careers = lazy(() => import("../pages/Company/Careers"));

//Services
export const SoftwareDevelopment = lazy(
  () => import("../pages/Services/SoftwareDevelopment")
);
export const TechnicalTraining = lazy(
  () => import("../pages/Services/TechnicalTraining")
);
export const ProjectManagement = lazy(
  () => import("../pages/Services/ProjectManagement")
);
export const TechnicalConsultation = lazy(
  () => import("../pages/Services/TechnicalConsultation")
);
export const DigitalMarketing = lazy(
  () => import("../pages/Services/DigitakMarketing")
);
export const ConduciveWorkspace = lazy(
  () => import("../pages/Services/ConduciveWorkspace")
);

//Training
export const Frontend = lazy(() => import("../pages/Training/Frontend"));
export const Backend = lazy(() => import("../pages/Training/Backend"));
export const Animation = lazy(() => import("../pages/Training/Animation"));
export const UIUX = lazy(() => import("../pages/Training/UIUX"));
export const DataAnalytics = lazy(
  () => import("../pages/Training/DataAnalytics")
);
export const BasicComputerKnowledge = lazy(
  () => import("../pages/Training/BasicComputerKnowledge")
);

//Error Boundary
export const ErrorPage = import("../pages/Error/Error");
export const ErrorBoundary = import("../pages/Error/ErrorBoundary");
