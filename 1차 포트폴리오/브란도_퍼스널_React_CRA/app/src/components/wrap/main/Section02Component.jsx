import React from 'react';

function Section02Component () {
  return (
    <section id="section2">
      <div className="container">
        <div className="gap">
          <div className="content">
            <div className="title">
              <h2>ABOUT ME</h2>
            </div>
            <div className="text">
              <p>Hello, I’m a UI/UX Designer & Frontend Developer from Victoria, Australia. I hold a master degree of Web Design from the World University.</p>
              <ul>
                <li><span>Name</span>Andrew Smith</li>
                <li><span>Email</span>andrew@gmail.com</li>
                <li><span>Phone</span>(123) – 456-7890</li>
                <li><span>Date of birth</span>23 Febr /uary 1986</li>
                <li><span>Nationality</span>United States</li>
                <a href="!#" taget="_self">DOWNLOAD RESUME</a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section02Component;