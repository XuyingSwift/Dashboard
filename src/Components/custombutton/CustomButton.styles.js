import styled from 'styled-components';
import { Buttercup, DeepKoamaru } from '../../ColorPalette';

export const ButtonContainer = styled.button`
    min-width: 165px;
    height: 50px;
    padding: 13px 13px;
    margin-bottom: 15px;
    font-weight: bolder;
    letter-spacing: 0.5px;
    font-size: 18px;
    width: auto;
    background-color: ${Buttercup};
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    cursor: pointer;
    
    color: white;
    border: none;
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
  }
`