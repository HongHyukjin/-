import React from 'react';

function Section01Component(){
  return (
    <section id="section1">
      <div className="container">
        <div className="title">
          <div>
            <img src="./img/wedding-img4.png" alt="" />
            <hr />
            <h2>WE ARE GETTING MARRIED</h2>
            <h3>SEPTEMBER 20TH, 2015</h3>
          </div>
        </div>
        <a href="!#" className="arrow-next-btn"><i></i></a>
        <a href="!#" className="arrow-prev-btn"><i></i></a>
        <div className="slide-container">
          <div className="slide-view">
            <ul className="slide-wrap" id="slideWrap">
              <li className="slide slide1"></li>
              <li className="slide slide2"></li>
              <li className="slide slide3"></li>
            </ul>
          </div>
        </div>
        <div className="page-btn-box">
          <span><a href="#" className="page-btn blind on">페이지1</a></span>
          <span><a href="#" className="page-btn blind">페이지2</a></span>
          <span><a href="#" className="page-btn blind">페이지3</a></span>
        </div>
      </div>
    </section>
  );
};

export default Section01Component;