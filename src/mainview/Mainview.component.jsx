import React from 'react';
import Header from './mainview-header/Header.component';
import * as s from './Mainview.styles';

import Routes from '../Routes.js';

const Mainview = () => {
    return (
        <s.MainviewContainer>
            <Header/>
            <Routes/>
        </s.MainviewContainer>
    )
}

export default Mainview;