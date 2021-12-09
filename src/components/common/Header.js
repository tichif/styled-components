import styled from 'styled-components';
import { Link as ReactRouterDomLink } from 'react-router-dom';

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background: #eee;
`;

const Menu = styled.nav`
  display: flex;
  position: relative;
  width: initial;
  border-bottom: none;
  margin: auto 0 auto auto;
  font-family: 'Open Sans';
  background: none;
  top: initial;
  left: initial;
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
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <Menu>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/login'>Login</StyledLink>
      </Menu>
    </HeaderWrapper>
  );
};
