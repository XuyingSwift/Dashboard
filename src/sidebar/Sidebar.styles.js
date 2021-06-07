import styled from '@emotion/styled'
import { DeepKoamaru } from '../ColorPalette'

export const SidebarLayout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 8fr;
  grid-template-areas:
    "sidebarHeader"
    "sidebarMenu"
  ;
  padding: 0;
  margin: 0;
`

export const SidebarHeader = styled.div`
  grid-area: sidebarHeader;
  background-color: red;
  padding: 10px;
  text-align: center;
  margin: 0;
  letter-spacing: 6px;
  color: white;
`
export const SidebarMenu = styled.div`
  grid-area: sidebarMenu;
  width: 100%;
  height: 100%;
  margin: 0;
  background-image: linear-gradient(
    150deg,
    ${p => p.colorPalette.bgColor1} 0%,
    ${p => p.colorPalette.bgColor2} 74%),
    url(${p => p.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`



export const MenuItemContainer = styled.div``

export const Item = styled.div`
  text-align: center;
  padding: 6px 20px;
  font-weight: 600px;
  color: white;
  font-family: ${p => p.font};
  white-space: nowrap;
  position: relative;

  &:hover {
    color: ${DeepKoamaru};
    transition: 1.s ease-in aliceblue;
  }
`
export const Icon = styled.img`
  padding-right: 20px; 
  transition: .2s ease-in;
  height: 16px;
  width: 16px;
`
