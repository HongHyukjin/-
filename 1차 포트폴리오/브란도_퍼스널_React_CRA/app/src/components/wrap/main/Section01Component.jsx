import React from 'react';

function Section01Component(){
  return(
    <section id="section1">
      <div className="container">
        <div className="title">
          <div className="content">
            <div>
              <h3>HELLO I'M</h3>
              <h2>ANDREW SMITH</h2>
              <p>UX DESIGNER / FRONTEND DEVELOPER</p>
            </div>
          </div>
        </div>
        <div className="slide-container">
          <div className="slide-view">
            <ul className="slide-wrap">
              <li className="slide slide1"></li>
              <li className="slide slide2"></li>
              <li className="slide slide3"></li>
            </ul>
          </div>
        </div>
        <div className="page-btn-box">
          <span><a href="!#" className="page-btn on"></a></span>
          <span><a href="!#" className="page-btn"></a></span>
          <span><a href="!#" className="page-btn"></a></span>
        </div>
      </div>
    </section>
  )
};

export default Section01Component;