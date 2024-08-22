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
            {
              path: "/industry/*",
              element: <Education />,
            },
            {
              path: "/industry/education",
              element: <Education />,
            },
            {
              path: "/industry/healthcare",
              element: <Healthcare />,
            },
            {
              path: "/industry/agriculture",
              element: <Agriculture />,
            },
            {
              path: "/industry/technology",
              element: <Technology />,
            },
          ],
        },
      ])}
    />
  );
}
