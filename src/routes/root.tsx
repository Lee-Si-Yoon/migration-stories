// REACT
import { Outlet } from "react-router-dom";
import React, { Suspense, useState } from "react";
import Nav from "../components/navigation";
import Circle from "../components/Circle";
// STYLING
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
// LAZY
const Loader = React.lazy(() => import("../components/Loader"));

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

  return (
    <Layout>
      <NavContainer>
        <Nav show={setLoading} />
      </NavContainer>

      <AnimatePresence initial={false}>
        {loading ? (
          <Suspense fallback={<Circle />}>
            <Loader show={setLoading} />
          </Suspense>
        ) : (
          <Outlet />
        )}
      </AnimatePresence>
    </Layout>
  );
}
