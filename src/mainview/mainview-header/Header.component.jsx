import React from 'react';
import * as s from './Header.styles';

const Header = () => {
    return (
        <s.HeaderContainer>
            <s.GroupContainer>
                <s.OptionLink>User</s.OptionLink>
                <s.OptionLink>Sign In</s.OptionLink>
                <s.OptionLink>Pique Tree</s.OptionLink>
            </s.GroupContainer>
        </s.HeaderContainer>
    )
};

export default Header;