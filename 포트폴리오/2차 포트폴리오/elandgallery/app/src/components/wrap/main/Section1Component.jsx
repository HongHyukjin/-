import React from 'react';
import '../../../css/style_section1.css'

export default function Section1Component () {
  return (
    <section id="section1">
      <div className="container">
        <div className="gap">
          <div className="title">
            <h2>ARTRO 작가 초빙</h2>
            <h1>OPEN CALL</h1>
            <h3>FOR Artists</h3>
            <button type='button'>자세히 보기 〉</button>
          </div>
          <div className="slide-container">
            <div className="slide-view">
              <ul className="slide-wrap">
                <li className="slide slide1"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

