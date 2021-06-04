import React from 'react';
import Header from '../components/header/Header.component';
import * as s from './Mainview.styles';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import SignInAndSignUp from '../pages/signIn-signUp-page/SignInSignUpPage.component';
import HomePage from '../pages/homePage/HomePage.component';
import PiqueTree from '../pages/piqueTree/PiqueTree.component';
const Mainview = ({currentUser}) => {
    return (
        <s.MainviewContainer>
            <s.HeaderContainer>
                <Header/>
            </s.HeaderContainer>
            <s.ContentContainer>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/home' component={HomePage}/>
                    <Route exact path='/piquetree' component={PiqueTree}/>
                    <Route exact path='/signin'L component={SignInAndSignUp}/>
                </Switch>
            </s.ContentContainer>
        </s.MainviewContainer>
    )
}
const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
})
export default connect(mapStateToProps)(Mainview);