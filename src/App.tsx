import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

// routes
import {
  Home,
  About,
  Education,
  Agriculture,
  Healthcare,
  Technology,
  Careers,
  SoftwareDevelopment,
  TechnicalTraining,
  TechnicalConsultation,
  ProjectManagement,
  ConduciveWorkspace,
  DigitalMarketing,
  Frontend,
  Backend,
  DataAnalytics,
  UIUX,
  Animation,
  BasicComputerKnowledge,
} from "./routes";
import { Layout } from "./components/layout";

//styling libraries
import "aos/dist/aos.css";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/mousewheel";

//Custom Styles
import "@/styles/index.css";
import Graphics from "./pages/Training/Graphics";

export default function App() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <Navigate to="/home" />,
        },
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              path: "/home",
              element: <Home />,
            },

            //Industry Based Routes Here
            {
              path: "/industry",
              children: [
                {
                  path: "",
                  element: <Education />,
                },
                {
                  path: "education",
                  element: <Education />,
                },
                {
                  path: "healthcare",
                  element: <Healthcare />,
                },
                {
                  path: "agriculture",
                  element: <Agriculture />,
                },
                {
                  path: "technology",
                  element: <Technology />,
                },
              ],
            },

            //Comapny Bases Routes Here
            {
              path: "/company",
              children: [
                {
                  path: "",
                  element: <About />,
                },
                {
                  path: "about",
                  element: <About />,
                },
                {
                  path: "careers",
                  element: <Careers />,
                },
              ],
            },

            // Services Routes
            {
              path: "/services",
              children: [
                {
                  path: "",
                  element: <SoftwareDevelopment />,
                },
                {
                  path: "software-development",
                  element: <SoftwareDevelopment />,
                },
                {
                  path: "technical-training",
                  element: <TechnicalTraining />,
                },
                {
                  path: "technical-consultation",
                  element: <TechnicalConsultation />,
                },
                {
                  path: "project-management",
                  element: <ProjectManagement />,
                },
                {
                  path: "conducive-workspace",
                  element: <ConduciveWorkspace />,
                },
                {
                  path: "digital-marketing",
                  element: <DigitalMarketing />,
                },
              ],
            },

            // Training Routes
            {
              path: "/training",
              children: [
                {
                  path: "",
                  element: <Frontend />,
                },
                {
                  path: "frontend-development",
                  element: <Frontend />,
                },
                {
                  path: "backend-development",
                  element: <Backend />,
                },
                {
                  path: "data-analytics",
                  element: <DataAnalytics />,
                },
                {
                  path: "uiux-design",
                  element: <UIUX />,
                },
                {
                  path: "animation",
                  element: <Animation />,
                },
                {
                  path: "graphics-design",
                  element: <Graphics />,
                },
                {
                  path: "basic-computer-knowledge",
                  element: <BasicComputerKnowledge />,
                },
              ],
            },
          ],
        },
      ])}
    />
  );
}
