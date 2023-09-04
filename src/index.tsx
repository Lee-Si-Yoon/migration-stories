// REACT
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
  Navigate,
} from "react-router-dom";
// ROUTING
import Root from "./routes/root";
import About from "./routes/about";
import Credit from "./routes/credit";
import Wander from "./routes/wander";
import Story from "./routes/story";
import Video from "./routes/video";
import ErrorPage from "./error-page";
// STYLING
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./theme";
import "./css/index.css";

const routes: RouteObject[] = [
  {
    path: "",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Wander,
      },
      {
        path: "story/:name",
        Component: Story,
      },
      {
        path: "video/:name",
        Component: Video,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "credit",
        Component: Credit,
      },
      {
        path: "*",
        Component: () => <Navigate to="/" />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, { basename: "/migration-stories" });

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
