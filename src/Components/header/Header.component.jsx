import React from 'react';

import * as s from './Header.styles';
// connect function connects a react component to a redux store
import {connect} from 'react-redux';
import UserIcon from '../userIcon/UserIcon.component';
import {auth} from '../../firebase/firebase.util';

const Header = ({currentUser}) => {
   
    return (
        <s.HeaderContainer>
            <s.GroupContainer>
                <s.OptionLink to='/home' style={{textDecoration: 'none'}}>Home</s.OptionLink>
                <s.OptionLink to='/piquetree' style={{textDecoration: 'none'}}>Pique Tree</s.OptionLink>
               
                { currentUser  ? 
                    <s.OptionLink to='/' style={{textDecoration: 'none'}}><UserIcon/></s.OptionLink> 
                    : null
                }

                {currentUser ? <s.OptionLink style={{textDecoration: 'none'}}  onClick={() => auth.signOut()}>Sign Out</s.OptionLink> 
                :
                <s.OptionLink to='/signin' style={{textDecoration: 'none'}}>Sign in</s.OptionLink>
            }
      
            </s.GroupContainer>
        
        </s.HeaderContainer>
    )
};
const mapStateToProps = state => ({
    currentUser: state.user.currentUser,

  });

export default connect(mapStateToProps)(Header);