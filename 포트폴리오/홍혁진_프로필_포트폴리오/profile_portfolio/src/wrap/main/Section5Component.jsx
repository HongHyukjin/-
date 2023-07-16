import React from 'react';
import $ from 'jquery';

export default function Section5Component () {

    const [state, setState] = React.useState({
        cnt: 0
    });

    React.useEffect(() => {
        const $slideWrap = $('#section5 .slide-wrap');
        const $section5 = $('#section5 .slide-view');
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


        $section5.on({
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
                    $slideWrap.css({ left: (-160 + dragEnd - dragStart) });
                }
            }
        })
    })

    const onClickNextCount = (e) => {
        e.preventDefault();
        const $slideWrap = $('#section5 .slide-wrap');
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
        const $slideWrap = $('#section5 .slide-wrap');
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
        <div id='section5'>
            <div className="container">
                <div className="content">
                    <div className="project-title">
                        발자취
                    </div>
                    <div className="project-period">
                        2022.06 ~ 2023.10
                    </div>
                    <div className="project-info">
                        <div className="project-img">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                    <li className="slide slide1">
                                        <img src="./img/발자취5.png" alt="" />
                                    </li>
                                    <li className="slide slide1">
                                        <img src="./img/발자취1.png" alt="" />
                                    </li>
                                    <li className="slide slide1">
                                        <img src="./img/발자취2.png" alt="" />
                                    </li>
                                    <li className="slide slide1">
                                        <img src="./img/발자취3.png" alt="" />
                                    </li>
                                    <li className="slide slide1">
                                        <img src="./img/발자취4.png" alt="" />
                                    </li>
                                    <li className="slide slide1">
                                        <img src="./img/발자취5.png" alt="" />
                                    </li>
                                    <li className="slide slide1">
                                        <img src="./img/발자취1.png" alt="" />
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
                                    <p><span>자취생들을 위한 배달공유 사이트입니다.</span><br />
                                        카카오맵 API를 이용한 위치기반 커뮤니티 사이트입니다.<br/>
                                        이외에도 게시글 작성, 실시간 채팅 등의 기능을 구현하였습니다.</p>
                                </li>
                                <li>
                                    <div className="project-label">
                                        Github
                                    </div>
                                    <div className="project-value">
                                        <a className='url' href="https://github.com/HongHyukjin/footprints.git">https://github.com/HongHyukjin/footprints.git</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="project-label">
                                        Frontend
                                    </div>
                                    <div className="project-value">
                                        React, Vue.js, HTML, CSS, JAVASCRIPT
                                    </div>
                                </li>
                                <li>
                                    <div className="project-label">
                                        Backend
                                    </div>
                                    <div className="project-value">
                                        JAVA, SpringBoot
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

