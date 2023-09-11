import { AnimatePresence } from "framer-motion";
import React from "react";
import { Outlet } from "react-router-dom";

function Loader() {
  return <span>loading</span>;
}

function LazyWrapper() {
  return (
    <AnimatePresence initial={false}>
      <React.Suspense fallback={Loader()}>
        <Outlet />
      </React.Suspense>
    </AnimatePresence>
  );
}

export { Loader, LazyWrapper };
