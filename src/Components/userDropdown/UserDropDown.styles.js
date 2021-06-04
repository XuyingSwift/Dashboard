import styled from 'styled-components';
import CustomButton from '../customButton/CustomButton.component';

export const UserDropDownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 50px;
    right: 40px;
    z-index: 3;
`

export const CheckoutButton = styled(CustomButton)`
    margin-top: auto;
`