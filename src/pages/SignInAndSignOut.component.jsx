import React from 'react';
import SignIn from '../components/sign-in/SignIn.component'
import SignUp from '../components/sign-up/SignUp.component'
import {SignInAndSignUp} from './SignInAndSignUp.styles'
const SignInSignUpPage = () => {
    return (
        <SignInAndSignUp>
            <SignIn/>
            <SignUp/>
        </SignInAndSignUp>
        
    )
}

export default SignInSignUpPage;