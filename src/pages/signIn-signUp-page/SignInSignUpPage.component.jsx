import React from 'react';
import SignIn from '../../components/sign-in/SignIn.component';
import SignUp from '../../components/sign-up/SignUp.component';
import {SignInAndSignUpContainer} from './SignInSignUpPage.styles'

const SignInSignUpPage = () => {
    return (
        <SignInAndSignUpContainer>
            <SignIn/>
            <SignUp/>
        </SignInAndSignUpContainer>
    )
}

export default SignInSignUpPage;