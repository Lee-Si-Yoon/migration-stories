import React from "react";
import { RouteObject, Navigate } from "react-router-dom";

// ROUTING
import Root from "./routes/root";
import About from "./routes/about";
import Credit from "./routes/credit";
import Wander from "./routes/wander";
import Story from "./routes/story";
import Video from "./routes/video";
import ErrorPage from "./error-page";

const sharedRoutes: RouteObject[] = [
  {
    path: "credit",
  },
  {
    path: "about",
  },
  {
    index: true,
    Component: () => <Navigate to="/" />,
  },
  {
    path: "*",
    Component: () => <Navigate to="/" />,
  },
];

const routes22: RouteObject[] = [
  {
    path: "wander",
  },
  {
    path: "story/:name",
  },
  {
    path: "video/:name",
  },
];

const routes23: RouteObject[] = [
  {
    path: "wander",
  },
  {
    path: "video/:name",
  },
  {
    path: "program",
    children: [
      {
        index: true,
      },
      {
        path: ":programName",
      },
      {
        path: "*",
        Component: () => <Navigate to="program" />,
      },
    ],
  },
];

const routes: RouteObject[] = [
  {
    path: "",
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
      },
      {
        path: "22",
        children: [...sharedRoutes, ...routes22],
      },
      {
        path: "23",
        children: [...sharedRoutes, ...routes23],
      },
      {
        path: "*",
        Component: () => <Navigate to="/" />,
      },
    ],
  },
];

export default routes;
