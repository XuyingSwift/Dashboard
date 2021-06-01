import React, {useState} from 'react';
import FormInput from '../formInput/FormInput.component';
import * as s from './SignUp.styles';
import CustomButton from '../custombutton/Custombutton.component';

const SignUp = () => {
    
    const [userInfo, setUserInfo] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''

        }

    )

    const handleChange = e => {
        const {name, value} = e.target;

        setUserInfo({[name]:value})
    }


    const {firstName, lastName, email, password, confirmPassword} = userInfo;
    
    const handleSubmit = e => {
        e.preventDefault();


    }

    return(
        <s.SignUpContainer>
            <s.SignUpTitle>I do not have an account</s.SignUpTitle>
            <span>Sign up with password and email</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='firstName'
                    value={firstName}
                    onChange={handleChange}
                    label='First Name'
                    required
                />

                <FormInput
                    type='text'
                    name='lastName'
                    value={lastName}
                    onChange={handleChange}
                    label='Last Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
               
            </form>
            <CustomButton>sign up</CustomButton>
        </s.SignUpContainer>
    )
}

export default SignUp;