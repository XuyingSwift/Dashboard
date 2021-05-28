import React from 'react';
import * as s from './App.styles';
import Mainview from './mainview/Mainview.component';
import Sidebar from './sidebar/Sidebar.component';

function App() {
  return (
    <s.AppContainer>
      <Sidebar/>
      <Mainview/>
    </s.AppContainer>
  );
   
}

export default App;
