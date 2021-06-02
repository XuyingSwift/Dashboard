import styled from 'styled-components';
import {Cararra, MineShaft} from './ColorPalette'

export const GridLayout = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 1fr 9fr 1fr;
  grid-template-columns: 1fr 6fr;
  grid-template-areas:
    "sidebar mainview"
    "sidebar mainview"
    "footer footer"
  ;
  grid-gap: 2px;
`;

export const Sidebar = styled.aside`
  grid-area: sidebar;
  background: ${Cararra};
`;

export const Mainview = styled.div`
  grid-area: mainview;
  background: white;
`;

export const Footer = styled.footer`
  grid-area: footer;

  background: ${MineShaft};
`;
