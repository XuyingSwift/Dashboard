import React from 'react';
import SignIn from '../../components/signin/SignIn.component'
import SignUp from '../../components/signup/SignUp.component';
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