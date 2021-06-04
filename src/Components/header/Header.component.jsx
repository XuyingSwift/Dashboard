import React from 'react';
import { auth } from '../../firebase/firebase.util';
import * as s from './Header.styles';
// connect function connects a react component to a redux store
import {connect} from 'react-redux';
import UserIcon from '../userIcon/UserIcon.component';
import UserDropDown from '../userDropdown/UserDropDown.component';

const Header = ({currentUser, hidden}) => {
    console.log(currentUser)
    return (
        <s.HeaderContainer>
            <s.GroupContainer>
                <s.OptionLink to='/home' style={{textDecoration: 'none'}}>Home</s.OptionLink>
                <s.OptionLink to='/piqueture' style={{textDecoration: 'none'}}>Pique Tree</s.OptionLink>
                <s.OptionLink to='/signin'  style={{textDecoration: 'none'}}>Sign In</s.OptionLink>

                {currentUser ? (<s.OptionLink to="/user" style={{textDecoration: 'none'}}><UserIcon/></s.OptionLink>) 
                : null}
                
                {currentUser ? 
                    (<s.OptionLink  to='/home' style={{textDecoration: 'none'}} onClick={() => auth.signOut()}>Sign out</s.OptionLink>)
                    : (<s.OptionLink to="/signin" style={{textDecoration: 'none'}}>Sign In</s.OptionLink>)
                    
                }
                
            </s.GroupContainer>
            {hidden ? null : <UserDropDown/>}
            
        </s.HeaderContainer>
    )
};
const mapStateToProps = ({user: {currentUser}, userIcon: {hidden}}) => ({currentUser, hidden})
export default connect(mapStateToProps)(Header);