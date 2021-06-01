import React, {useState} from 'react';
import FormInput from '../formInput/FormInput.component';
import * as s from './SignIn.styles'
import CustomButton from '../custombutton/Custombutton.component';

const SignIn = () => {
    const [userInfo, setUserInfo] = useState({email:'', password:''})
    const {email, password} = userInfo;
    const handleChange = e => {
        const {name, value} = e.target;

        setUserInfo({[name]:value})
    }

    const handleSubmit = e => {
        e.preventdefault();
        setUserInfo({
            email:'',
            password:''
        })
    }

    return (
        <s.SignInContainer>
            <s.SignInTitle> I already have an account</s.SignInTitle>
            <span>sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={email}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    label='password'
                    required
                />
            </form>
            <s.ButtonGroupContainer>
                <CustomButton>sign in</CustomButton>
                <CustomButton>sign in with google</CustomButton>
            </s.ButtonGroupContainer>
        </s.SignInContainer>
    )
    
}
export default SignIn;