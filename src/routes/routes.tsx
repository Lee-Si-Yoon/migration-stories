import React from "react";
import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";

import ErrorPage from "../error-page";
import About from "../pages/about";
import Credit from "../pages/credit";
import Root from "../pages/root";
import Story from "../pages/story";
import Video from "../pages/video";
import Wander from "../pages/wander";

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
