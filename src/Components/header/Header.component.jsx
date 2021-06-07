import React from 'react';

import * as s from './Header.styles';
// connect function connects a react component to a redux store
import {connect} from 'react-redux';
import UserDropDown from '../userDropdown/UserDropDown.component';
import {setCurrentUser} from '../../redux/user/user.actions';
import UserIcon from '../userIcon/UserIcon.component';

const Header = ({currentUser, hidden, setCurrentUser}) => {
    console.log("Header", currentUser)
    return (
        <s.HeaderContainer>
            <s.GroupContainer>
                <s.OptionLink to='/home' style={{textDecoration: 'none'}}>Home</s.OptionLink>
                <s.OptionLink to='/piqueture' style={{textDecoration: 'none'}}>Pique Tree</s.OptionLink>
                { currentUser  ? 
                    <s.OptionLink to='/' style={{textDecoration: 'none'}}><UserIcon/></s.OptionLink> 
                    : null
                }
                { currentUser ? 
                    <s.OptionLink to='/' style={{textDecoration: 'none'}} 
                    onClick={setCurrentUser}>Sign Out</s.OptionLink> 
                    :
                    <s.OptionLink to='/signin' style={{textDecoration: 'none'}}>Sign In</s.OptionLink>
                }
               
            </s.GroupContainer>
            {hidden ? null : <UserDropDown/>}
            
        </s.HeaderContainer>
    )
};
const mapStateToProps = ({user: {currentUser}, userIcon: {hidden}}) => ({currentUser, hidden})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: (user=null) => dispatch(setCurrentUser(user))
  })

export default connect(mapStateToProps, mapDispatchToProps)(Header);