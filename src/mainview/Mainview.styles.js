import styled from 'styled-components';
import {DeepKoamaru} from '../ColorPalette';

export const MainviewContainer = styled.div`

    height: 100%;
    width: 100%;
    color: white;
    display: grid;
    grid-template-rows: 0.4fr 6fr;
    grid-template-areas:
    "header"
    "content"
    ;
`

export const HeaderContainer = styled.header`
    grid-area: header;
    background-color: ${DeepKoamaru} ;
`

export const ContentContainer = styled.div`
    grid-area: content;
`