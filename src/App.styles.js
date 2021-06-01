import styled from 'styled-components';

export const GridLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 9fr 1fr;
  grid-template-columns: 1fr 6fr;
  grid-template-areas:
    "logo header"
    "sidebar mainview"
    "footer footer"
  ;
  grid-gap: 2px;
`;

export const Logo = styled.div`
  grid-area: logo;
`;

export const Header = styled.nav`
  grid-area: header;
  background: pink;
`;

export const Sidebar = styled.aside`
  grid-area: sidebar;
  background: red;
`;

export const Mainview = styled.div`
  grid-area: mainview;
  background: green;
`;

export const Footer = styled.footer`
  grid-area: footer;
  background: yellow;
`;