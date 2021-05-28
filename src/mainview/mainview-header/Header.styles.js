import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 45px;
    width: auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    background-color: gray;
`

export const GroupContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const OptionLink = styled(Link)`
    padding: 5px 10px;
    cursor: pointer;
    color: white;
`