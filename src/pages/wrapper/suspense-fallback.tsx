import React from "react";
import { Outlet } from "react-router-dom";

import Circle from "../../components/loading-circle/loading-circle";

function Loader() {
  return <span>loading</span>;
}

function LazyWrapper() {
  return (
    <React.Suspense fallback={<Circle />}>
      <Outlet />
    </React.Suspense>
  );
}

export { Loader, LazyWrapper };
