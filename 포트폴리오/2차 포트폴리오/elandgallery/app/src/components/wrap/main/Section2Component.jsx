import React from 'react';
import '../../../css/style_section2.css'

export default function Section2Component () {
    return (
        <section id="section2">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <div>
                            <h1>NEW<br/>ARTWORKS</h1>
                            <h3>한중 유망 작가들의 신작을 소개합니다.</h3>
                            <button type='button'>모든 작품보기 〉</button>
                        </div>
                    </div>
                    <div className="content">
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                    <li className="slide slide1"></li>
                                    <li className="slide slide2"></li>
                                    <li className="slide slide3"></li>
                                    <li className="slide slide4"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

