// REACT
import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import Wander from "../components/wander";
import Nav from "../components/navigation";
import Loader from "../components/loader";
// STYLING
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

const Layout = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export default function Root() {
  const [loading, setLoading] = useState(true);
  let location = useLocation();
  return (
    <Layout>
      <Nav show={setLoading} />
      <AnimatePresence>
        {loading ? <Loader show={setLoading} /> : null}
      </AnimatePresence>
      {location.pathname === "/" ? <Wander /> : <Outlet />}
    </Layout>
  );
}
