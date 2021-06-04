import styled from 'styled-components';

import {ReactComponent as UserIconSVG} from '../../assets/user.svg';


export const UserIconContainer = styled.div`
    width: 45px;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const UserIcon = styled(UserIconSVG)`
    width: 24px;
    height: 24px;
`