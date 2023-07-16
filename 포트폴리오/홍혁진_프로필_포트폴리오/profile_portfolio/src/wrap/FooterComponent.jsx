import React from 'react';

const FooterComponent = () => {
    return (
        <footer id="footer">
            <div className="icons">
                <div className="icon">
                    <img src="./img/github.png" alt="" />
                </div>
                <div className="icon">
                    <img src="./img/tistory.png" alt="" />
                </div>
                <div className="icon">
                    <img src="./img/instagram.png" alt="" />
                </div>
                <div className="icon">
                    <img src="./img/facebook.png" alt="" />
                </div>
            </div>
            <div className="copyright">
                © 2023. Hong Hyuk Jin. All rights reserved.
            </div>
        </footer>
    );
};

export default FooterComponent;