import React from 'react';
import $ from 'jquery';

export default function Section4Component() {

    const [state, setState] = React.useState({
        cnt: 0
    });

    React.useEffect(() => {
        const $slideWrap = $('#section4 .slide-wrap');
        const $section4 = $('#section4 .slide-view');
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


        $section4.on({
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
        const $slideWrap = $('#section4 .slide-wrap');
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
        const $slideWrap = $('#section4 .slide-wrap');
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
        <div id='section4'>
            <div className="container">
                <div className="content">
                    <div className="project-title">
                        Brando Personal
                    </div>
                    <div className="project-period">
                        2023.03 ~ 2023.03
                    </div>
                    <div className="project-info">
                        <div className="project-img">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                    <li className="slide slide1">
                                        <img src="./img/퍼스널5.png" alt="" />
                                    </li>
                                    <li className="slide slide1">
                                        <img src="./img/퍼스널1.png" alt="" />
                                    </li>
                                    <li className="slide slide1">
                                        <img src="./img/퍼스널2.png" alt="" />
                                    </li>
                                    <li className="slide slide1">
                                        <img src="./img/퍼스널3.png" alt="" />
                                    </li>
                                    <li className="slide slide1">
                                        <img src="./img/퍼스널4.png" alt="" />
                                    </li>
                                    <li className="slide slide1">
                                        <img src="./img/퍼스널5.png" alt="" />
                                    </li>
                                    <li className="slide slide1">
                                        <img src="./img/퍼스널1.png" alt="" />
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
                                    <p><span>Brando Personal 사이트입니다.</span><br />
                                        React, HTML, CSS, JAVASCRIPT를 사용하여 제작하였습니다.<br/>
                                        네비게이션, 슬라이드, 애니메이션 등을 구현하였습니다.</p>
                                </li>
                                <li>
                                    <div className="project-label">
                                        Github
                                    </div>
                                    <div className="project-value">
                                        <a className='url' href="https://github.com/HongHyukjin/brando_personal.git">https://github.com/HongHyukjin/brando_personal.git</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="project-label">
                                        URL
                                    </div>
                                    <div className="project-value">
                                        <a className='url' href="https://honghyukjin.github.io/brando_personal">https://honghyukjin.github.io/brando_personal</a>
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
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

