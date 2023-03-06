import React from 'react';

function FooterComponent (){
  return (
    <footer id="footer">
      <div className="container">
        <div className="content">
          <div className="top">
            <div className="icon">
              <ul>
                <li><a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a></li>
                <li><a href="https://twitter.com/"><i className="fa fa-twitter"></i></a></li>
                <li><a href="https://dribbble.com/"><i className="fa fa-dribbble"></i></a></li>
                <li><a href="https://www.youtube.com/"><i className="fa fa-youtube-play"></i></a></li>
                <li><a href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
            <div className="mark">
              <img src="./img/logo-personal-footer.png" alt="" />
            </div>
          </div>
          <div className="bottom">
            <div className="text">
              <p>&copy; 2022 BRANDO IS PROUDLY POWERED BY THEMEZAA.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;