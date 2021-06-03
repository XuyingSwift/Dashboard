import React from 'react';

import './App.css'
import * as s from './App.styles'
import { auth } from './firebase/firebase.util';
import Mainview from './mainview/Mainview.component';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // add an observer that user signin is changed session presitence, so we don't need to track it mannually
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user)
    })
  }
  
  componentWillUnmount() {
    // stop the observer to stop litsening to the auth, set it back to null;
    this.unsubscribeFromAuth();
  }
  render() {
    return (
   
      <s.GridLayout>
        <s.Sidebar/>
        <s.Mainview>
          <Mainview currentUser={this.state.currentUser}/>
        </s.Mainview>
        <s.Footer/>
      </s.GridLayout>
  );
  }
  
   
}

export default App;
