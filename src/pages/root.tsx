import { AnimatePresence } from "framer-motion";
import React, { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Circle from "../components/loading-circle/loading-circle";
import Nav from "../components/navigation";


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
