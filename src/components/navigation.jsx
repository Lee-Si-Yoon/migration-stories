// REACT
import { Link } from "react-router-dom";
// STYLING
import styled from "styled-components";
import { motion } from "framer-motion";

const Navigation = styled.nav`
  width: 100vw;
  max-width: 100%;
  position: absolute;
  overflow: hidden;
  z-index: 998;
  /* border: 3px solid blue; */
`;
const NavUl = styled.ul`
  padding: 2rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.text};
  img {
    width: 50px;
  }
  @media screen and (max-width: 575.98px) {
    padding: 1rem 2rem;
  }
`;
const Links = styled(Link)`
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  outline: none;
  font-size: 1rem;
  @media screen and (max-width: 575.98px) {
    font-size: 1.2rem;
  }
`;
const LinkContainer = styled.div`
  display: flex;
  column-gap: 2.5rem;
`;

export default function Nav({ show }) {
  return (
    <Navigation>
      <NavUl>
        <Links to={`/`}>
          <img
            src="/imgs/logo.webp"
            alt="logo"
            onClick={() => {
              show(true);
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
