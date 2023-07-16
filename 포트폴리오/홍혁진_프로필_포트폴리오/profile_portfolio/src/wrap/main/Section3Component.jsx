import React from 'react';
import $ from 'jquery';

export default function Section3Component() {

    const [state, setState] = React.useState({
        cnt: 0
    });

    React.useEffect(() => {
        const $slideWrap = $('#section3 .slide-wrap');
        const $section3 = $('#section3 .slide-view');
        let cnt = state.cnt;

        function mainSlide() {
            $slideWrap.stop().animate({ left: `${-100 * cnt}%` }, 500, function () {
                $slideWrap.stop().animate({ left: `${-100 * cnt}%` }, 0);
            });
            if (cnt > 4) cnt = 0;
            if (cnt < 0) cnt = 4;
            setState({
                ...state,
                cnt: cnt
            })
        }

        function nextCount() {
            cnt++;
            mainSlide();
        }

        function prevCount() {
            cnt--;
            mainSlide();
        }

        let touchStart = 0;
        let touchEnd = 0;
        let dragStart = 0;
        let dragEnd = 0;
        let mousedown = false;


        $section3.on({
            mousedown(e) {
                mousedown = true;
                touchStart = e.clientX;
                dragStart = e.clientX - $slideWrap.offset().left;
            },
            mouseup(e) {
                mousedown = false;
                touchEnd = e.clientX;
                // 오른쪽으로 드래그
                if ((touchStart - touchEnd) > 0) {
                    if (!$slideWrap.is(':animated')) {
                        nextCount();
                    }
                }
                if ((touchStart - touchEnd) < 0) {
                    if (!$slideWrap.is(':animated')) {
                        prevCount();
                    }
                }
            },
            mousemove(e) {
                if (mousedown === false) return;
                dragEnd = e.clientX;
                if (!$slideWrap.is(':animated') && 0 <= cnt <= 4) {
                    $slideWrap.css({ left: (dragEnd - dragStart) });
                }
            }
        })

    })

    const onClickNextCount = (e) => {
        e.preventDefault();
        const $slideWrap = $('#section3 .slide-wrap');
        let cnt = state.cnt;

        function mainSlide() {
            $slideWrap.stop().animate({ left: `${-100 * cnt}%` }, 500, function () {
                $slideWrap.stop().animate({ left: `${-100 * cnt}%` }, 0);
            });
            if (cnt > 4) cnt = 0;
            if (cnt < 0) cnt = 4;
            setState({
                ...state,
                cnt: cnt
            })
        }

        function nextCount() {
            cnt++;
            console.log(cnt);
            mainSlide();
        }

        nextCount();
    }

    const onClickPrevCount = (e) => {
        e.preventDefault();
        const $slideWrap = $('#section3 .slide-wrap');
        let cnt = state.cnt;

        function mainSlide() {
            $slideWrap.stop().animate({ left: `${-100 * cnt}%` }, 500, function () {
                $slideWrap.stop().animate({ left: `${-100 * cnt}%` }, 0);
            });
            if (cnt > 4) cnt = 0;
            if (cnt < 0) cnt = 4;
            setState({
                ...state,
                cnt: cnt
            })
        }

        function prevCount() {
            cnt--;
            mainSlide();
        }

        prevCount();
    }

    return (
        <div id='section3'>
            <div className="container">
                <div className="content">
                    <div className="project-title">
                        오늘의 집
                    </div>
                    <div className="project-period">
                        2023.05 ~ 2023.06
                    </div>
                    <div className="project-info">
                        <div className="project-img">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                    <li className="slide slide1">
                                        <img src="./img/오늘의집5.png" alt="" />
                                    </li>
                                    <li className="slide slide1">
                                        <img src="./img/오늘의집1.png" alt="" />
                                    </li>
                                    <li className="slide slide1">
                                        <img src="./img/오늘의집2.png" alt="" />
                                    </li>
                                    <li className="slide slide1">
                                        <img src="./img/오늘의집3.png" alt="" />
                                    </li>
                                    <li className="slide slide1">
                                        <img src="./img/오늘의집4.png" alt="" />
                                    </li>
                                    <li className="slide slide1">
                                        <img src="./img/오늘의집5.png" alt="" />
                                    </li>
                                    <li className="slide slide1">
                                        <img src="./img/오늘의집1.png" alt="" />
                                    </li>
                                </ul>
                            </div>
                            <nav className='img-nav'>
                                <div className="left-arrow-btn">
                                    <img src="./img/arrow-left.svg" alt="" onClick={onClickPrevCount} />
                                </div>
                                <div className="img-page">{state.cnt + 1} / 5</div>
                                <div className="right-arrow-btn">
                                    <img src="./img/arrow-right.svg" alt="" onClick={onClickNextCount} />
                                </div>
                            </nav>
                        </div>
                        <div className="project-desc">
                            <ul>
                                <li>
                                    <p><span>오늘의집 커뮤니티를 카피한 프로젝트입니다.</span><br />
                                        커뮤니티의 주요기능인 게시글 작성, 수정, 삭제<br />
                                        회원정보 수정, 마이페이지 등의 기능을 구현하였습니다.</p>
                                </li>
                                <li>
                                    <div className="project-label">
                                        Github
                                    </div>
                                    <div className="project-value">
                                        <a className='url' href="https://github.com/HongHyukjin/Todays-House.git">https://github.com/HongHyukjin/Todays-House.git</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="project-label">
                                        URL
                                    </div>
                                    <div className="project-value">
                                        <a className='url' href="http://gurwlszx.cafe24.com/TodayHouse">http://gurwlszx.cafe24.com/TodayHouse</a>
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
