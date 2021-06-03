import React from 'react';
import { auth } from '../../firebase/firebase.util';
import * as s from './Header.styles';

const Header = ({currentUser}) => {
    return (
        <s.HeaderContainer>
            <s.GroupContainer>
            
                <s.OptionLink to="/piqueture" style={{textDecoration: 'none'}}>Pique Tree</s.OptionLink>
                <s.OptionLink to="/user" style={{textDecoration: 'none'}}>User</s.OptionLink>
                {currentUser ? 
                    (<s.OptionLink style={{textDecoration: 'none'}} onClick={() => auth.signOut()}>Sign out</s.OptionLink>)
                    : (<s.OptionLink to="/signin" style={{textDecoration: 'none'}}>Sign In</s.OptionLink>)}
            </s.GroupContainer>
        </s.HeaderContainer>
    )
};

export default Header;