import React from 'react';
import {connect} from 'react-redux';
import * as s from './UserIcon.styles';
import {toggleUserIconHidden} from '../../redux/userIcon/userIcon.actions';

const UserIcon = ({toggleUserIconHidden}) => {
    return (
        <s.UserIconContainer>
            <s.UserIcon onClick={toggleUserIconHidden}/>
        </s.UserIconContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleUserIconHidden: () => dispatch(toggleUserIconHidden())
})

export default connect(null, mapDispatchToProps)(UserIcon);