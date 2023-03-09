import React, { Component } from 'react';
import MainComponent from './wrap/MainComponent';

class WrapComponent extends Component {
  render() {
    return (
      <div id='wrap'>
        <MainComponent />
      </div>
    );
  }
}

export default WrapComponent;