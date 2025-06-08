import React from "react";
import { Outlet } from "react-router-dom";

import Circle from "../../../src/widgets/loading-circle/loading-circle";
import RouteChangeTracker from "../../routes/route-change-tracker";

function Loader() {
  return <span>loading</span>;
}

function LazyWrapper() {
  RouteChangeTracker();

  return (
    <React.Suspense fallback={<Circle />}>
      <Outlet />
    </React.Suspense>
  );
}

export { Loader, LazyWrapper };
