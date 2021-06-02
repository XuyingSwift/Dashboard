import React from 'react';

import './App.css'
import * as s from './App.styles'

import {ReactComponent as Logo} from './assets/PIQUE_svg.svg'
import {Link} from 'react-router-dom'

function App() {
  return (
   
      <s.GridLayout>
        <s.Logo>
        <Link className='logo-container' to='/'>
        <Logo className='logo' />
    </Link>
        </s.Logo>
        <s.Header/>
        <s.Sidebar/>
        <s.Mainview/>
        <s.Footer/>
      </s.GridLayout>


  );
   
}

export default App;
