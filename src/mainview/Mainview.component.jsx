import React from 'react';
import Header from '../components/header/Header.component';
import * as s from './Mainview.styles';

import SignInAndSignUp from '../pages/signIn-signUp-page/SignInSignUpPage.component';
const Mainview = ({currentUser}) => {
    return (
        <s.MainviewContainer>
            <s.HeaderContainer>
                <Header currentUser={currentUser}/>
            </s.HeaderContainer>
            <s.ContentContainer>
                <SignInAndSignUp/>
            </s.ContentContainer>
        </s.MainviewContainer>
    )
}

export default Mainview;