import React from 'react';
import FooterComponent from './wrap/FooterComponent';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import TopModalComponent from './wrap/TopModalComponent';

export default function WrapComponent () {
    return (
        <div id='wrap'>
            <TopModalComponent />
            <HeaderComponent />
            <MainComponent />
            <FooterComponent />
        </div>
    );
};

