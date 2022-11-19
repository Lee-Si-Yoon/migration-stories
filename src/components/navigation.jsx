// REACT
import { Link } from "react-router-dom";
// STYLING
import styled from "styled-components";
import { motion } from "framer-motion";

const Navigation = styled.nav`
  width: 100%;
  position: absolute;
  z-index: 999;
`;
const NavUl = styled.ul`
  padding: 2rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.text};
`;
const Links = styled(Link)`
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  outline: none;
`;
const LinkContainer = styled.div`
  display: flex;
  column-gap: 2rem;
`;

export default function Nav(show) {
  return (
    <Navigation>
      <NavUl>
        <Links to={`/`}>
          <img
            src="/imgs/logo.webp"
            alt="logo"
            width={50}
            onClick={() => {
              show.show(true);
            }}
          />
        </Links>
        <LinkContainer>
          <motion.li whileHover={{ y: -2.5, fontWeight: 500 }}>
            <Links to={`about`}>ABOUT</Links>
          </motion.li>
          <motion.li whileHover={{ y: -2.5, fontWeight: 500 }}>
            <Links to={`credit`}>CREDIT</Links>
          </motion.li>
        </LinkContainer>
      </NavUl>
    </Navigation>
  );
}
