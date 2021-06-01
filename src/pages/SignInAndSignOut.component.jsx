import React from 'react';
import SignIn from '../Components/signin/SignIn.component';
import SignUp from '../Components/signup/SignUp.component';
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