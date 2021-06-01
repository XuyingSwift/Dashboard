import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PiqueTree from './pages/piqueTree/PiqueTree.component';
import SignInSignUpPage from './pages/signIn-signUp-page/SignInSignUpPage.component';

const Routes = () => {
    return (
      <Switch>
        <Route exact path='/piquetree' component={PiqueTree} />
        <Route exact path='/signin' component={SignInSignUpPage}/>
        <Route exact path='/visualizeTree' component={ () => {window.location.href='https://vanya.jp.net/vtree/'; return null;}}/>
      </Switch>
    )
  }
  
  export default Routes