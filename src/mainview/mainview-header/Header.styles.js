import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 45px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    background-color: #00205b;
`
export const GroupContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 20px;
`

export const OptionLink = styled(Link)`
    padding: 5px 10px;
    cursor: pointer;
    color: white;
`