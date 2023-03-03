import React from 'react';

function HeaderComponent(){
  return (
    <header id="header">
      <div className="container">
        <div className="gap">
          <div className="content">
            <div className="top">
              <a href="#wrap" className="main-btn"><img src="./img/logo-pink.png" alt="" /></a>
            </div>
            <div className="mid">
              <ul>
                <li><a href="#section2" className="main-btn">ABOUT ME</a></li>
                <li><a href="#section3" className="main-btn">SKILLS</a></li>
                <li><a href="#section5" className="main-btn">EDUCATION</a></li>
                <li><a href="#section6" className="main-btn">EMPLOYMENT</a></li>
                <li><a href="#section8" className="main-btn">PROTFOLIO</a></li>
                <li><a href="#section9" className="main-btn">BLOG</a></li>
                <li><a href="#section10" className="main-btn">CONTACT</a></li>
              </ul>
            </div>
            <div className="bottom">
              <div className="icon">
                <a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
                <a href="https://twitter.com/"><i className="fa fa-twitter"></i></a>
                <a href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a>
              </div>
            </div>
            <div id="mobileNav">
              <a href="#wrap" className="main-btn"><img src="./img/logo-pink.png" alt="" /></a>
              <a href="!#" className="mobile-btn">
                <i className="line line1"></i>
                <i className="line line2"></i>
                <i className="line line3"></i>
              </a>
            </div>
            <div id="accordian">
                <ul>
                  <li><a href="#section2" className="main-btn">ABOUT ME</a></li>
                  <li><a href="#section3" className="main-btn">SKILLS</a></li>
                  <li><a href="#section5" className="main-btn">EDUCATION</a></li>
                  <li><a href="#section6" className="main-btn">EMPLOYMENT</a></li>
                  <li><a href="#section8" className="main-btn">PORTFOLIO</a></li>
                  <li><a href="#section9" className="main-btn">BLOG</a></li>
                  <li><a href="#section10" className="main-btn">CONTACT</a></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;