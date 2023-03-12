import React, { Component } from 'react';
import FooterComponent from './wrap/FooterComponent';
import HeaderComponent from './wrap/HeaderComponent'
import MainComponent from './wrap/MainComponent';
import '../scss/style_wrap.scss'

class Wrapcomponent extends Component {
    render() {
        return (
            <div id='wrap'>
                <HeaderComponent />
                <MainComponent />
                <FooterComponent />
            </div>
        );
    }
}

export default Wrapcomponent;