import React from 'react';

function HeaderComponent(){
  return (
    <header id="header">
      <div className="container">
        <div className="gap">
          <div className="content">
            <div className="left">
              <ul>
                <li><a href="#section2" className="main-btn">THE COUPLE</a></li>
                <li><a href="#section4" className="main-btn">EVENT & PARTIES</a></li>
                <li><a href="#section5" className="main-btn">GALLERY</a></li>
              </ul>
            </div>
            <div className="center">
              <a href="#wrap" title="HOME" className="hide"></a>
            </div>
            <div className="right">
              <ul>
                <li><a href="#section6" className="main-btn">ATTENDING</a></li>
                <li><a href="#section9" className="main-btn">OUR BLOG</a></li>
                <li><a href="#section10" className="main-btn">LOCATION</a></li>
              </ul>
            </div>
            <div id="mobileNav">
              <a href="!#" className="mobile-btn">
                <i className="line line1"></i>
                <i className="line line2"></i>
                <i className="line line3"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;