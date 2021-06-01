import React from 'react';

import * as s from './SignUp.styles';
import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-buttom/CustomButtom.component';

class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password:'',
            confirmPassword: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const {password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert("Passwords do not match!")
            return;
        }

        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password:'',
            confirmPassword: ''
        })
    }

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {
        const {firstName, lastName, email, password, confirmPassword} = this.state;
        return(
            <s.SignUpContainer>
                <form onSubmit={this.handleSubmit}>
                    <s.SignUpTitle>Sign Up</s.SignUpTitle>
                    <span>SignUp with email and password</span>
                    <FormInput type='text' name='firstName' value={firstName} onChange={this.handleChange} label='First Name' required/>
                    <FormInput type='text' name='lastName' value={lastName} onChange={this.handleChange} label='Last Name' required/>
                    <FormInput type='email' name='email' value={email} onChange={this.handleChange} label='Email' required/>
                    <FormInput type='password' name='password' value={password} onChange={this.handleChange} label='Password' required/>
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} label='Confirm Password' required/>
                </form>
                <CustomButton>Sign Up</CustomButton>
            </s.SignUpContainer>
        )

    }

   
}

export default SignUp;