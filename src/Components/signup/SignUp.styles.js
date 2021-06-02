import styled from 'styled-components';
import { Black, LightBlue} from '../../ColorPalette';

export const SignUpContainer = styled.div`
    background-color: ${LightBlue};
    display: flex;
    flex-direction: column;
    width: 414px;
    height: 100%;
    color: ${Black};
    justify-content: center;
    align-items: center;
`

export const SignUpTitle = styled.h2`
    margin: 10px 0;
`