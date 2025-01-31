import React from 'react';
import FooterComponent from './FooterComponent';
import HeaderCompponent from './HeaderCompponent';
import Section1Component from './main/Section1Component';
import Section2Component from './main/Section2Component';
import Section3Component from './main/Section3Component';
import Section4Component from './main/Section4Component';

export default function MainComponent() {
  return (
    <>
      <HeaderCompponent />
      <Section1Component />
      <Section2Component />
      <Section3Component />
      <Section4Component />
      <FooterComponent />
    </>
  );
};

