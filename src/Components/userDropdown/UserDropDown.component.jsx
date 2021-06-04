import React from 'react';
import {connect} from 'react-redux';
import * as s from './UserDropDown.styles';

const UserDropDown = ({currentUser}) => {
    return (
        <s.UserDropDownContainer>
            <s.CheckoutButton>SignOut</s.CheckoutButton>
        </s.UserDropDownContainer>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(UserDropDown);