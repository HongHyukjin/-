import React from 'react';
import $ from 'jquery';

export default function Section2Component () {

    const [state, setState] = React.useState({
        cnt : 0
      });
    
      React.useEffect(() => {
        const $slideWrap = $('#section2 .slide-wrap');
        const $section2 = $('#section2 .slide-view');
        let cnt = state.cnt;
    
        function mainSlide(){
            $slideWrap.stop().animate({left : `${-100 * cnt}%`}, 500, function(){
                $slideWrap.stop().animate({left:`${-100*cnt}%`},0);
            });
            if(cnt > 4) cnt = 0;
            if(cnt < 0) cnt = 4;
            setState({
                ...state,
                cnt: cnt
            })
        }
    
        function nextCount(){
          cnt++;
          mainSlide();
        }
    
        function prevCount(){
          cnt--;
          mainSlide();
        }
    
        let touchStart = 0;
        let touchEnd = 0;
        let dragStart = 0;
        let dragEnd = 0;
        let mousedown = false;
    
    
        $section2.on({
          mousedown(e){
            mousedown = true;
            touchStart = e.clientX;
            dragStart = e.clientX - $slideWrap.offset().left;
          },
          mouseup(e){
            mousedown = false;
            touchEnd = e.clientX;
            // 오른쪽으로 드래그
            if((touchStart - touchEnd) > 0){
              if(!$slideWrap.is(':animated')){
                nextCount();
              }
            }
            if((touchStart - touchEnd) < 0){
              if(!$slideWrap.is(':animated')){
                prevCount();
              }
            }
          },
          mousemove(e){
            if(mousedown === false) return;
            dragEnd = e.clientX;
            if(!$slideWrap.is(':animated') && 0<=cnt<=4){
              $slideWrap.css({left : (dragEnd - dragStart)});
            }
          }
        })
    
      })

      const onClickNextCount = (e) => {
        e.preventDefault();
        const $slideWrap = $('#section2 .slide-wrap');
        let cnt = state.cnt;
    
        function mainSlide(){
            $slideWrap.stop().animate({left : `${-100 * cnt}%`}, 500, function(){
                $slideWrap.stop().animate({left:`${-100*cnt}%`},0);
            });
            if(cnt > 4) cnt = 0;
            if(cnt < 0) cnt = 4;
            setState({
                ...state,
                cnt: cnt
            })
        }
    
        function nextCount(){
          cnt++;
          console.log(cnt);
          mainSlide();
        }
        
        nextCount();
      }

      const onClickPrevCount = (e) => {
        e.preventDefault();
        const $slideWrap = $('#section2 .slide-wrap');
        let cnt = state.cnt;
    
        function mainSlide(){
            $slideWrap.stop().animate({left : `${-100 * cnt}%`}, 500, function(){
                $slideWrap.stop().animate({left:`${-100*cnt}%`},0);
            });
            if(cnt > 4) cnt = 0;
            if(cnt < 0) cnt = 4;
            setState({
                ...state,
                cnt: cnt
            })
        }
    
        function prevCount(){
            cnt--;
            mainSlide();
          }
        
          prevCount();
      }

    return (
        <div id='section2'>
            <div className="container">
                <div className="title">
                    <h1>Portfolio</h1>
                </div>
                <div className="content">
                    <div className="project-title">
                        Essa Sofa
                    </div>
                    <div className="project-period">
                        2023.06 ~ 2023.07
                    </div>
                    <div className="project-info">
                        <div className="project-img">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                    <li className="slide slide1">
                                        <img src="./img/essa5.png" alt="" />
                                    </li>
                                    <li className="slide slide1">
                                        <img src="./img/essa.png" alt="" />
                                    </li>
                                    <li className="slide slide1">
                                        <img src="./img/essa2.png" alt="" />
                                    </li>
                                    <li className="slide slide1">
                                        <img src="./img/essa3.png" alt="" />
                                    </li>
                                    <li className="slide slide1">
                                        <img src="./img/essa4.png" alt="" />
                                    </li>
                                    <li className="slide slide1">
                                        <img src="./img/essa5.png" alt="" />
                                    </li>
                                    <li className="slide slide1">
                                        <img src="./img/essa.png" alt="" />
                                    </li>
                                </ul>
                            </div>
                            <nav className='img-nav'>
                                <div className="left-arrow-btn">
                                    <img src="./img/arrow-left.svg" alt="" onClick={onClickPrevCount} />
                                </div>
                                <div className="img-page">{state.cnt+1} / 5</div>
                                <div className="right-arrow-btn">
                                    <img src="./img/arrow-right.svg" alt="" onClick={onClickNextCount} />
                                </div>
                            </nav>
                        </div>
                        <div className="project-desc">
                            <ul>
                                <li>
                                    <p><span>EssaSofa 쇼핑몰을 카피한 프로젝트입니다.</span><br/>
                                    쇼핑몰의 주요기능인 상품목록, 상세보기, 장바구니,<br/>
                                    찜하기, 공지사항, 상품문의 등의 기능을 구현하였습니다.</p>
                                </li>
                                <li>
                                    <div className="project-label">
                                        Github
                                    </div>
                                    <div className="project-value">
                                        <a className='url' href="https://github.com/HongHyukjin/Essa">https://github.com/HongHyukjin/Essa</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="project-label">
                                        URL
                                    </div>
                                    <div className="project-value">
                                        <a className='url' href="http://gurwlszx.cafe24.com/EssaSofa">http://gurwlszx.cafe24.com/EssaSofa</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="project-label">
                                        Frontend
                                    </div>
                                    <div className="project-value">
                                        React, jQuery, HTML, CSS, JAVASCRIPT
                                    </div>
                                </li>
                                <li>
                                    <div className="project-label">
                                        Backend
                                    </div>
                                    <div className="project-value">
                                        JAVA, JSP, Apache Tomcat
                                    </div>
                                </li>
                                <li>
                                    <div className="project-label">
                                        Database
                                    </div>
                                    <div className="project-value">
                                        Mysql 8.0
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
