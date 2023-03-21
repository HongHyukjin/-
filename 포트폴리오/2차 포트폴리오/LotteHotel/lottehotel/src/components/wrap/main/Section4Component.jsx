import React from 'react';
import $ from 'jquery';

export default function Section4Component (){

    React.useEffect(() => {
        let cnt = 0;
        let setId = 0;


    })

    return (
        <section id="section4">
            <div className="container">
                <div className="content">
                    <div className="slide-container">
                        <div className="slide-view">
                            <ul className="slide-wrap">
                                <li className="slide slide1"></li>
                                <li className="slide slide2"></li>
                                <li className="slide slide3"></li>
                                <li className="slide slide1"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

