import { AnimatePresence } from "framer-motion";
import React from "react";
import { Outlet } from "react-router-dom";

import Circle from "../../components/loading-circle/loading-circle";

function Loader() {
  return <span>loading</span>;
}

function LazyWrapper() {
  return (
    <AnimatePresence initial={false}>
      <React.Suspense fallback={<Circle />}>
        <Outlet />
      </React.Suspense>
    </AnimatePresence>
  );
}

export { Loader, LazyWrapper };
