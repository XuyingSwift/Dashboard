import React from 'react';
import * as s from './App.styles';
import Footer from './components/footer/Footer.componet';
import Mainview from './mainview/Mainview.component';
import Sidebar from './sidebar/Sidebar.component';

function App() {
  return (
    <s.AppContainer>
      <Sidebar/>
      <Mainview/>
      <Footer/>
    </s.AppContainer>
  );
   
}

export default App;
