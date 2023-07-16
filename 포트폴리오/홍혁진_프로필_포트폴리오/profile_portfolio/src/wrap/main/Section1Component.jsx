import React from 'react';

export default function Section1Component () {
    return (
        <div id='section1'>
            <div className="container">
                <div className="title">
                    <h1>Introduction</h1>
                    <h2>안녕하세요 개발자 홍혁진입니다.</h2>
                </div>
                <div className="content">
                    <ul>
                        <li>
                            <div className="basic-info">
                                <div className="icon-img">
                                    <img src="./img/person-fill.svg" alt="" />
                                </div>
                                <div className="aboutme">
                                    <div className="label">이름</div>
                                    <div className="value">홍혁진</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="basic-info">
                                <div className="icon-img">
                                    <img src="./img/calendar-fill.svg" alt="" />
                                </div>
                                <div className="aboutme">
                                    <div className="label">생년월일</div>
                                    <div className="value">97.05.03</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="basic-info">
                                <div className="icon-img">
                                    <img src="./img/geo-alt-fill.svg" alt="" />
                                </div>
                                <div className="aboutme">
                                    <div className="label">주소지</div>
                                    <div className="value">서울특별시 은평구</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="basic-info">
                                <div className="icon-img">
                                    <img src="./img/telephone-fill.svg" alt="" />
                                </div>
                                <div className="aboutme">
                                    <div className="label">연락처</div>
                                    <div className="value">010-9662-9052</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="basic-info">
                                <div className="icon-img">
                                    <img src="./img/envelope-fill.svg" alt="" />
                                </div>
                                <div className="aboutme">
                                    <div className="label">이메일</div>
                                    <div className="value">gurwlszx@naver.com</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="basic-info">
                                <div className="icon-img">
                                    <img src="./img/github.svg" alt="" />
                                </div>
                                <div className="aboutme">
                                    <div className="label">GITHUB</div>
                                    <div className="value"><a href="https://github.com/HongHyukjin">https://github.com/HongHyukjin</a></div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

