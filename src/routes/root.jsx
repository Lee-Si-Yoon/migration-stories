import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Layout = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
const Navigation = styled.nav`
  width: 100%;
  position: absolute;
`;
const NavUl = styled.ul`
  padding: 2rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;
const Links = styled(Link)`
  color: white;
  text-decoration: none;
  outline: none;
`;
const LinkContainer = styled.div`
  display: flex;
  column-gap: 2rem;
`;

export default function Root() {
  return (
    <Layout>
      <Navigation>
        <NavUl>
          <Links to={`/`}>
            <img
              src="/imgs/migration_logo.jpg"
              alt="migration_logo.jpg"
              width={50}
            />
          </Links>
          <LinkContainer>
            <motion.li whileHover={{ y: -2.5 }}>
              <Links to={`about`}>ABOUT</Links>
            </motion.li>
            <motion.li whileHover={{ y: -2.5 }}>
              <Links to={`credit`}>CREDIT</Links>
            </motion.li>
          </LinkContainer>
        </NavUl>
      </Navigation>
      <Outlet />
    </Layout>
  );
}
