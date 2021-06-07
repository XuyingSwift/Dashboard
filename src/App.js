import React from 'react';

import './App.css'
import * as s from './App.styles'
import Mainview from './mainview/Mainview.component';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import { auth, createUserProfileDocument } from './firebase/firebase.util';

class App extends React.Component {

  unsubscribeFromAuth = null;
    componentDidMount() {
      const {setCurrentUser} = this.props;
      // add an observer that user signin is changed session presitence, so we don't need to track it mannually
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            });            
          });
        }
        setCurrentUser({ currentUser: userAuth });
      });
      console.log("app", this.props.currentUser)
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
          <Mainview />
        </s.Mainview>
        <s.Footer/>
      </s.GridLayout>
  );
  }
  
   
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
