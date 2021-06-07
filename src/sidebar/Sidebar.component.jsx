import React from 'react';
import { Link } from 'react-router-dom';
import * as s from './Sidebar.styles';

const Sidebar = (props) => {
    const {
        backgroundImage='',
        colorPalette = {
            bgColor1: 'rgba(28, 78, 128, 0.8)',
            bgColor2: 'rgba(126, 144, 154, 0.8)',
            fontColor: 'rgba(19, 54, 88, 1)',
            fontColorSelected: 'rgba(255, 255, 255)',
            dividerColor: 'rgba(241, 241, 241, 0.5)',
          },
        fonts = {
            header: '',
            menu: ''
        },
        menuItems =[]

} = props;

  const MenuDataJSX = menuItems.map((item, index) => {
      return (
          <Link to={`${item.path}`}  style={{ textDecoration: 'none' }} key={index}>
            <s.Item font={fonts.menu}>
                  {item.icon}
                <span>{item.title}</span>
            </s.Item>
          </Link>
      )
  })
     

  return (
      <s.SidebarLayout >
        <s.SidebarHeader colorPalette={colorPalette} >Pique</s.SidebarHeader>
        <s.SidebarMenu backgroundImage={backgroundImage} colorPalette={colorPalette}>
            <s.Item>{MenuDataJSX}</s.Item>
        </s.SidebarMenu>
      </s.SidebarLayout>
   
  )
}

export default Sidebar