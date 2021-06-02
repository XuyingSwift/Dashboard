import React from 'react';
import Header from '../components/header/Header.component';
import * as s from './Mainview.styles';

import SignInAndSignUp from '../pages/SignInAndSignOut.component';
const Mainview = () => {
    return (
        <s.MainviewContainer>
            <s.HeaderContainer>
                <Header/>
            </s.HeaderContainer>
            <s.ContentContainer>
                <SignInAndSignUp/>
            </s.ContentContainer>
        </s.MainviewContainer>
    )
}

export default Mainview;