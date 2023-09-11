import React from "react";
import type { RouteObject } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";

const ErrorPage = React.lazy(() => import("../error-page"));
const IndexPage = React.lazy(() => import("../pages/index"));
import About from "../pages/about";
import Credit from "../pages/credit";
import Root from "../pages/root";
import Story from "../pages/story";
import Video from "../pages/video";
import Wander from "../pages/wander";
import { Header22, Header23 } from "../pages/wrapper/header";
import { LazyWrapper } from "../pages/wrapper/suspense-fallback";

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
    Component: LazyWrapper,
    children: [
      {
        index: true,
        Component: IndexPage,
      },
      {
        path: "22",
        Component: Header22,
        children: [...sharedRoutes, ...routes22],
      },
      {
        path: "23",
        Component: Header23,
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
