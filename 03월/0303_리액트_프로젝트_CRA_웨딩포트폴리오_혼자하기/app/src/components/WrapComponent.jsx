import React from 'react';
import SkipComponent from './wrap/SkipComponent';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import FooterComponent from './wrap/FooterComponent'
import GoTopComponent from './wrap/GoTopComponent';

function WrapComponent(){
  return (
    <div id="wrap">
      <SkipComponent />      
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
      <GoTopComponent />
    </div>
  );
};

export default WrapComponent;