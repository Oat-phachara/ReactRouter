import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import About from "./routes/about";
import PortfolioItem from "./routes/portfolio-item";
import Portfolio from "./routes/portfolio";
import Skill from "./routes/skill";
import Jobs from "./routes/jobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/portfolio/:portfolioId",
        element: <PortfolioItem />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/skill",
        element: <Skill />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
