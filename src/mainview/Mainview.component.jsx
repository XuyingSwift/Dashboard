import React from 'react';
import Header from './mainview-header/Header.component';
import * as s from './Mainview.styles';

const Mainview = () => {
    return (
        <s.MainviewContainer>
            <Header/>
            <h1>Paul Swift</h1>
            <p>Some text here and there.</p>
        </s.MainviewContainer>
    )
}

export default Mainview;