import styled from 'styled-components';
import { Link as ReactRouterDomLink, useLocation } from 'react-router-dom';

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(to right, #f8049c, #fdd54f);
  border-bottom: #fdd54f 3px solid;
`;

const Menu = styled.nav`
  display: block;
  font-family: 'Open Sans';
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: #fdd54f 3px solid;
  background: #fff;

  @media (min-width: 768px) {
    display: flex;
    background: none;
    top: initial;
    margin: auto 0 auto auto;
    left: initial;
    position: relative;
    width: initial;
    border-bottom: none;
  }
`;

// const MenuAlt = styled(Menu)`
//   border-top: 5px solid #000;
// `;

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  color: #000;
  text-decoration: none;
`;

export const Header = () => {
  const { pathname } = useLocation();
  return (
    <HeaderWrapper>
      <Menu>
        <StyledLink to='/' isActive={pathname === '/'}>
          Home
        </StyledLink>
        <StyledLink to='/login' isActive={pathname === '/login'}>
          Login
        </StyledLink>
      </Menu>
    </HeaderWrapper>
  );
};
