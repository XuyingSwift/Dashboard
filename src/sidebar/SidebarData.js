import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineDashboard} from 'react-icons/ai';
import {BsBarChart} from 'react-icons/bs'
import {AiOutlineSetting} from 'react-icons/ai';

export const backgroundImage = 'images/mt.jpeg';


export const backgroundColor ='#142C74';

export const sidebarHeader = {
  fullName: 'PIQUE',
  shortName: 'PIQ'
};

export const fonts = {
  header: 'Playfair Display',
  menu: 'Poppins'
}

export const menuItems = [
  { name: 'Home', to: '/', icon: '/icons/home.svg', subMenuItems: [] },
  { name: 'Dashboard', to: '/dashboard', icon: '/icons/dashboard.svg', subMenuItems: [] },
  {
    name: 'Visualization', to: '/visualization', icon: '/icons/visaulization.svg',
    subMenuItems: [
      { name: 'LineChart', to: '/linechart'},        
      { name: 'BarChart', to: '/barchart'}
    ]
  },
  { name: 'Settings', to: '/settings', icon: '/icons/settings.svg', subMenuItems: [] },
  { name: 'About', to: '/about', icon: '/icons/about.svg', subMenuItems: [] }
];

export const MenuData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiOutlineHome/>
    },

    {
        title: 'Dashboard',
        path:'/dashboard',
        icon: <AiOutlineDashboard/>
    },

    {
        title: 'Visualization',
        path:'/visualization',
        icon: <BsBarChart/>
    },

    {
        title: 'Setting',
        path: '/setting',
        icon: <AiOutlineSetting/>
    }

]