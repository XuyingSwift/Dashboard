import React from 'react';

import './App.css'
import * as s from './App.styles'
import Mainview from './mainview/Mainview.component';

function App() {
  return (
   
      <s.GridLayout>
        <s.Sidebar/>
        <s.Mainview>
          <Mainview/>
        </s.Mainview>
        <s.Footer/>
      </s.GridLayout>


  );
   
}

export default App;
