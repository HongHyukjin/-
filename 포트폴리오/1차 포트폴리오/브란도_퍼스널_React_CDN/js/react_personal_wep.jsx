function WrapComponent(){
  return(
    <div id="wrap">
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  )
}

function HeaderComponent(){
  return(
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
              <a href="#" className="mobile-btn">
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
  )
}

function MainComponent(){
  return(
    <main id="main">
      <Section1Component />
      <Section2Component />
      <Section3Component />
      <Section4Component />
      <Section5Component />
      <Section6Component />
      <Section7Component />
      <Section8Component />
      <Section9Component />
      <Section10Component />
    </main>    
  )
}

  function Section1Component(){
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
            <span><a href="#" className="page-btn on"></a></span>
            <span><a href="#" className="page-btn"></a></span>
            <span><a href="#" className="page-btn"></a></span>
          </div>
        </div>
      </section>
    )
  }

  function Section2Component(){
    return(
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
                  <a href="" taget="_self">DOWNLOAD RESUME</a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  function Section3Component(){
    return(
      <section id="section3">
        <div className="container">
          <div className="gap">
            <div className="content">
              <div className="title">
                <h2>SKILLS</h2>
              </div>
              <div className="text">
                <ul>
                  <li>
                    <div className="icon">
                      <i className="icon-presentation icon-medium"></i>
                    </div>
                    <div>
                      <h4>PHOTOSHOP</h4>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-trophy icon-medium"></i>
                    </div>
                    <div>
                      <h4>ILLUSTRATOR</h4>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-hotairballoon icon-medium"></i>
                    </div>
                    <div>
                      <h4>HTML 5</h4>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-lifesaver icon-medium"></i>
                    </div>
                    <div>
                      <h4>DREAMWEAVER</h4>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-scissors icon-medium"></i>
                    </div>
                    <div>
                      <h4>FIREWORKS</h4>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-tools icon-medium"></i>
                    </div>
                    <div>
                      <h4>CSS 3</h4>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  function Section4Component(){
    return(
      <section id="section4">
        <div className="container">
          <div className="content">
            <ul>
              <li>
                <div>
                  <i></i>
                </div>
                <div className="text">
                  <span className="num">2530</span>
                  <h4>GRAPHIC DESIGN</h4>
                </div>
              </li>
              <li>
                <div>
                  <i></i>
                </div>
                <div className="text">
                  <span className="num">3200</span>
                  <h4>LOGO DESIGN</h4>
                </div>
              </li>
              <li>
                <div>
                  <i></i>
                </div>
                <div className="text">
                  <span className="num">2830</span>
                  <h4>WEB DEVELOPMENT</h4>
                </div>
              </li>
              <li>
                <div>
                  <i></i>
                </div>
                <div className="text">
                  <span className="num">1035</span>
                  <h4>APPLICATIONS</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }

  function Section5Component(){
    return(
      <section id="section5">
        <div className="container">
          <div className="content">
            <div className="title">
              <h2>EDUCATION</h2>
            </div>
            <div className="text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
              </p>
              <i></i>
              <ul>
                <li>
                  <h2>01</h2>
                  <div>
                    <h4>UNIVERSITY OF DESIGN</h4>
                    <h3>BACHELOR OF ARTS<br />2012 – 2013</h3>
                  </div>
                </li>
                <li>
                  <h2>02</h2>
                  <div>
                    <h4>BOSTON UNIVERSITY</h4>
                    <h3>VISUAL ART & DESIGN<br />2011 – 2013</h3>
                  </div>
                </li>
                <li>
                  <h2>03</h2>
                  <div>
                    <h4>BOSTON UNIVERSITY</h4>
                    <h3>DEGREE OF DESIGN<br />2009 – 2011</h3>
                  </div>
                </li>
                <li>
                  <h2>04</h2>
                  <div>
                    <h4>DESIGN UNIVERSITY</h4>
                    <h3>DEGREE OF WEB DESIGN<br />2007 – 2009</h3>
                  </div>
                </li>
              </ul>
              <i></i>
              <span>
                <p>EDUCATION IS NOT PREPARATION<br />FOR LIFE, EDUCATION IS LIFE ITSELF.</p>
              </span>
            </div>
          </div>
        </div>
      </section>
    )
  }

  function Section6Component(){
    return(
      <section id="section6">
        <div className="container">
          <div className="content">
            <div className="title">
              <h2>EMPLOYMENT</h2>
            </div>
            <div className="text">
              <ul>
                <li>
                  <h3>PANARA MEDIA</h3>
                  <h4>ART DIRECTOR</h4>
                  <h5>2015-2013</h5>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                </li>
                <li>
                  <h3>LINKSTURE WEB</h3>
                  <h4>PROJECT MANAGER</h4>
                  <h5>2013-2012</h5>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                </li>
                <li>
                  <h3>MATRIX MEDIA</h3>
                  <h4>VISUAL / UI DESIGNER</h4>
                  <h5>2012-2011</h5>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                </li>
                <li>
                  <h3>CREATIKA AGENCY</h3>
                  <h4>GRAPHIC DESIGNER</h4>
                  <h5>2011-2010</h5>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }

  function Section7Component(){
    return(
      <section id="section7">
        <div className="container">
          <div className="gap">
            <div className="content">
              <p>AWARDS CAN GIVE YOU A TREMENDOUS AMOUNT OF ENCOURAGEMENT TO KEEP GETTING BETTER, NO MATTER HOW YOUNG OR OLD YOU ARE.</p>
              <i></i>              
              <ul>
                <li>
                  <h2>01</h2>
                  <h4>INTERNATIONAL<br />DESIGN AWARDS</h4>
                </li>
                <li>
                  <h2>02</h2>
                  <h4>EUROPEAN<br />DESIGN AWARDS</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }

  function Section8Component(){
    return(
      <section id="section8">
        <div className="container">
          <div className="content">
            <div className="title">
              <h2>PORTFOLIO</h2>
            </div>
            <div className="img_content">
              <div className="text">
                <ul>
                  <li><a href="" className="txt_btn on">ALL</a></li>
                  <li><a href="" className="txt_btn">br /ANDING</a></li>
                  <li><a href="" className="txt_btn">DESIGN</a></li>
                  <li><a href="" className="txt_btn">GRAPHICS</a></li>
                  <li><a href="" className="txt_btn">PHOTOGRAPHY</a></li>
                </ul>
              </div>
              <div className="img">
                <ul className="response_ul">
                  <li className="img_1">
                    <a href="#">
                      <figure className="img-box">
                        <img src="./img/personal-img5.jpg" alt="" />
                        <div>
                          <h3>HERBAL BEAUTY SALON</h3>
                          <h4>PHOTOGRAPHY</h4>
                        </div>
                      </figure>
                    </a>
                  </li>
                  <li className="img_2">
                    <a href="#">
                      <figure className="img-box">
                        <img src="./img/personal-img6.jpg" alt="" />
                        <div>
                          <h3>TAILORING INTERIOR</h3>
                          <h4>br /ANDING</h4>
                        </div>
                      </figure>
                    </a>
                  </li>
                  <li className="img_3">
                    <a href="#">
                      <figure className="img-box">
                        <img src="./img/personal-img7.jpg" alt="" />
                        <div>
                          <h3>PIXFLOW STUDIO</h3>
                          <h4>GRAPHICS</h4>
                        </div>
                      </figure>
                    </a>
                  </li>
                  <li className="img_4">
                    <a href="#">
                      <figure className="img-box">
                        <img src="./img/personal-img14.jpg" alt="" />
                        <div>
                          <h3>TAILORING INTERIOR</h3>
                          <h4>br /ANDING</h4>
                        </div>
                      </figure>
                    </a>
                  </li>
                  <li className="img_5">
                    <a href="#">
                      <figure className="img-box">
                        <img src="./img/personal-img8.jpg" alt="" />
                        <div>
                          <h3>KAYA SKIN CARE</h3>
                          <h4>DESIGN</h4>
                        </div>
                      </figure>
                    </a>
                  </li>
                  <li className="img_6">
                    <a href="#">
                      <figure className="img-box">
                        <img src="./img/personal-img9.jpg" alt="" />
                        <div>
                          <h3>THIRD EYE GLASSES</h3>
                          <h4>PHOTOGRAPHY</h4>
                        </div>
                      </figure>
                    </a>
                  </li>
                  <li className="img_7">
                    <a href="#">
                      <figure className="img-box">
                        <img src="./img/personal-img10.jpg" alt="" />
                        <div>
                          <h3>RED DOT MEDIA</h3>
                          <h4>PHOTOGRAPHY</h4>
                        </div>
                      </figure>
                    </a>
                  </li>
                  <li className="img_8">
                    <a href="#">
                      <figure className="img-box">
                        <img src="./img/personal-img11.jpg" alt="" />
                        <div>
                          <h3>RUBBER STUDIO</h3>
                          <h4>DESIGN</h4>
                        </div>
                      </figure>
                    </a>
                  </li>
                  <li className="img_9">
                    <a href="#">
                      <figure className="img-box">
                        <img src="./img/personal-img12.jpg" alt="" />
                        <div>
                          <h3>BANANA DESIGN</h3>
                          <h4>PHOTOGRAPHY</h4>
                        </div>
                      </figure>
                    </a>
                  </li>
                  <li className="img_10">
                    <a href="#">
                      <figure className="img-box">
                        <img src="./img/personal-img13.jpg" alt="" />
                        <div>
                          <h3>RUBBER STUDIO</h3>
                          <h4>PHOTOGRAPHY</h4>
                        </div>
                      </figure>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  function Section9Component(){
    return(
      <section id="section9">
        <div className="container">
          <div className="content">
            <div className="title">
              <h2>RECENT BLOG</h2>
            </div>
            <div className="text">
              <ul>
                <li>
                  <p><a href="#">A portrait is not made in the camera but on either side of it.</a></p>
                  <h4>APRIL 11, 2016</h4>
                  <h5>POSTED BY HARESH</h5>
                </li>
                <li>
                  <p><a href="#">You don’t take a photograph. You ask quietly to borrow it.</a></p>
                  <h4>APRIL 11, 2016</h4>
                  <h5>POSTED BY HARESH</h5>
                </li>
                <li>
                  <p><a href="#">Whatever good things we build end up building us.</a></p>
                  <h4>MARCH 26, 2016</h4>
                  <h5>POSTED BY HARESH</h5>
                </li>
                <li>
                  <p><a href="#">Bad design is smoke, while good design is a mirror.</a></p>
                  <h4>APRIL 11, 2016</h4>
                  <h5>POSTED BY HARESH</h5>
                </li>
                <li>
                  <p><a href="#">A beautiful woman should br /eak her mirror early.</a></p>
                  <h4>APRIL 30, 2016</h4>
                  <h5>POSTED BY HARESH</h5>
                </li>
                <li>
                  <p><a href="#">Architecture is the reaching out for the truth.</a></p>
                  <h4>MARCH 26, 2016</h4>
                  <h5>POSTED BY HARESH</h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }

  function Section10Component(){
    return(
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
    )
  }

function FooterComponent(){
  return(
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
  )
}


ReactDOM.render(
  <WrapComponent />,
  document.getElementById('root')
)