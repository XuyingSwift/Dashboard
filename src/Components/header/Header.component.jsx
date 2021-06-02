import React from 'react';
import * as s from './Header.styles';

const Header = () => {
    return (
        <s.HeaderContainer>
            <s.GroupContainer>
            
                <s.OptionLink to="/piqueture" style={{textDecoration: 'none'}}>Pique Tree</s.OptionLink>
                <s.OptionLink to="/user" style={{textDecoration: 'none'}}>User</s.OptionLink>
                <s.OptionLink to="/signin" style={{textDecoration: 'none'}}>Sign In</s.OptionLink>
                
            </s.GroupContainer>
        </s.HeaderContainer>
    )
};

export default Header;