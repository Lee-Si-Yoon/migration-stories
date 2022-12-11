// REACT
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Wander />,
      },
      {
        path: "story/:name",
        element: <Story />,
      },
      {
        path: "video/:name",
        element: <Video />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "credit",
        element: <Credit />,
      },
    ],
  },
  {
    path: "/ex",
    element: <Wander />,
    errorElement: <ErrorPage />,
  },
];

const router = createBrowserRouter(routes);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
//       <Route errorElement={<ErrorPage />}>
//         <Route index element={<Wander />} />
//         <Route path="story/:name" element={<Story />} />
//         <Route path="video/:name" element={<Video />} />
//         <Route path="about" element={<About />} />
//         <Route path="credit" element={<Credit />} />
//       </Route>
//     </Route>
//   )
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
