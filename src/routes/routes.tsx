import * as Sentry from "@sentry/react";
import React from "react";
import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ErrorPage = React.lazy(() => import("../error-page"));
const IndexPage = React.lazy(() => import("../pages/index"));
const Wander22 = React.lazy(() => import("../pages/wander/wander-22"));
const Wander23 = React.lazy(() => import("../pages/wander/wander-23"));
const VideoPage = React.lazy(() => import("../pages/video/video"));
const About22Page = React.lazy(() => import("../pages/about/about-22"));
const About23Page = React.lazy(() => import("../pages/about/about-23"));
const Credit22Page = React.lazy(() => import("../pages/credit/credit-22"));
const Credit23Page = React.lazy(() => import("../pages/credit/credit-23"));
const ProgramPage = React.lazy(() => import("../pages/program/program"));
const ProgramDetailPage = React.lazy(
  () => import("../pages/program/program-detail")
);
import { Header22, Header23 } from "../pages/wrapper/header";
import { LazyWrapper } from "../pages/wrapper/suspense-fallback";

const sharedRoutes: RouteObject[] = [
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
    Component: Wander22,
  },
  {
    path: "video/:name",
    Component: VideoPage,
  },
  {
    path: "credit",
    Component: Credit22Page,
  },
  {
    path: "about",
    Component: About22Page,
  },
];

const routes23: RouteObject[] = [
  {
    path: "wander",
    Component: Wander23,
  },
  {
    path: "video/:name",
    Component: VideoPage,
  },
  {
    path: "program",
    children: [
      {
        index: true,
        Component: ProgramPage,
      },
      {
        path: ":programName",
        Component: ProgramDetailPage,
      },
      {
        path: "*",
        Component: () => <Navigate to="program" />,
      },
    ],
  },
  {
    path: "credit",
    Component: Credit23Page,
  },
  {
    path: "about",
    Component: About23Page,
  },
];

const routes: RouteObject[] = [
  {
    path: "",
    errorElement: <ErrorPage />,
    Component: Sentry.withErrorBoundary(LazyWrapper, {
      fallback: <p>an error has occurred</p>,
    }),
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
