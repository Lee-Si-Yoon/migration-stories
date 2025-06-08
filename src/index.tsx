import React from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga4";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routes from "./routes/routes";
import "./index.scss";

if (import.meta.env.PROD && import.meta.env.VITE_GOOGLE_ANALYTICS) {
  ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS);
}

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
