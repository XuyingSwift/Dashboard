import React from 'react';
import { auth } from '../../firebase/firebase.util';
import * as s from './Header.styles';
// connect function connects a react component to a redux store
import {connect} from 'react-redux';

const Header = ({currentUser}) => {
    console.log(currentUser)
    return (
        <s.HeaderContainer>
            <s.GroupContainer>
                <s.OptionLink to="/home" style={{textDecoration: 'none'}}>Home</s.OptionLink>
                <s.OptionLink to="/piqueture" style={{textDecoration: 'none'}}>Pique Tree</s.OptionLink>
                <s.OptionLink to="/user" style={{textDecoration: 'none'}}>User</s.OptionLink>
                {currentUser ? 
                    (<s.OptionLink style={{textDecoration: 'none'}} onClick={() => auth.signOut()}>Sign out</s.OptionLink>)
                    : (<s.OptionLink to="/signin" style={{textDecoration: 'none'}}>Sign In</s.OptionLink>)
                    
                }
            </s.GroupContainer>
        </s.HeaderContainer>
    )
};

const mapStateToProps = state => ({currentUser: state.user.currentUser})
export default connect(mapStateToProps)(Header);