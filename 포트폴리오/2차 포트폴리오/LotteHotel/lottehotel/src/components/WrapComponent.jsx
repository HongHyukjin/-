import React from 'react';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/main/MainComponent';
import TopModalComponent from './wrap/TopModalComponent';

export default function WrapComponent () {
    return (
        <div id='wrap'>
            <TopModalComponent />
            <HeaderComponent />
            <MainComponent />
        </div>
    );
};

