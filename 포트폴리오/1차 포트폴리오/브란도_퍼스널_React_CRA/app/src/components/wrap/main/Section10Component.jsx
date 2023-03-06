import React from 'react';

function Section10Component (){
  return (
    <section id="section10">
      <div className="container">
        <div className="content">
          <div className="title">
            <h2>CONTACT</h2>
          </div>
          <div className="text">
            <div className="top">
              <ul>
                <li>
                  <i className="icon-map-pin"></i>
                  <h3>301 THE GREENHOUSE,<br />LONDON, E2 8DY.</h3>
                </li>
                <li>
                  <i className="icon-clipboard"></i>
                  <h3>GENERAL ENQUIRIES<br />SALES@DOMAIN.COM</h3>
                </li>
              </ul>
            </div>
            <div className="bottom">
              <div className="col-gap">
                <div className="content-wrap">
                  <form name="message_form" id="messageForm" method="post" action="">
                    <ul>
                      <li>
                        <input type="text" name="name" id="name" placeholder="*YOUR NAME" />
                      </li>
                      <li>
                        <input type="email" name="email" id="email" placeholder="*YOUR EMAIL" />
                      </li>
                      <li>
                        <select name="select" id="select">
                          <option value="WHAT ARE YOU INTERESTED IN?">WHAT ARE YOU INTERESTED IN?</option>
                          <option value="Web Developement">Web Developement</option>
                          <option value="Mobile Application">Mobile Application</option>
                          <option value="Graphics Design">Graphics Design</option>
                          <option value="Other">Other</option>
                        </select>
                      </li>
                      <li>
                        <textarea name="msg" id="msg" placeholder="YOUR MESSAGE"></textarea>
                      </li>
                      <li>
                        <button type="submit" className="submit-btn">SUBMIT</button>
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section10Component;