import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.nav`
  width: 100%;
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
const LinkContainer = styled.li`
  display: flex;
  column-gap: 2rem;
`;
const Layout = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  height: 100vh;
`;

export default function Root() {
  return (
    <Layout>
      <Navigation>
        <NavUl>
          <Links to={`/`}>logo</Links>
          <LinkContainer>
            <Links to={`about`}>ABOUT</Links>
            <Links to={`credit`}>CREDIT</Links>
          </LinkContainer>
        </NavUl>
      </Navigation>
      <Outlet />
    </Layout>
  );
}
