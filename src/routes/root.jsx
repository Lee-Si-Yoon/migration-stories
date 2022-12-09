// REACT
import { Outlet, useLocation } from "react-router-dom";
import React, { Suspense, useState } from "react";
import Nav from "../components/navigation";
// import Loader from "../components/loader";
import Circle from "../components/Loading";
// STYLING
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
const Loader = React.lazy(() => import("../components/loader"));

const Layout = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
  /* border: 3px solid pink; */
`;
const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default function Root() {
  const [loading, setLoading] = useState(true);
  let location = useLocation();
  // console.log(location.pathname);

  return (
    <Layout>
      <NavContainer>
        <Nav show={setLoading} />
      </NavContainer>
      <AnimatePresence initial={false}>
        {loading && location.pathname === "/" ? (
          <Suspense fallback={<Circle />}>
            <Loader show={setLoading} />
          </Suspense>
        ) : null}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        <Outlet />
      </AnimatePresence>
    </Layout>
  );
}
