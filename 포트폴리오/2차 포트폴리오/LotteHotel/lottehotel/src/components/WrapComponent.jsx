import React from 'react';
import HeaderComponent from './wrap/HeaderComponent';
import TopModalComponent from './wrap/TopModalComponent';

export default function WrapComponent () {
    return (
        <div id='wrap'>
            <TopModalComponent />
            <HeaderComponent />
        </div>
    );
};

