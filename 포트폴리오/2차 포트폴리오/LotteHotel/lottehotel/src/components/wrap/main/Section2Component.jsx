import React from 'react';

export default function Section2Component () {
    return (
        <section id="section2">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h1>Room Packages & Offers</h1>
                        <a href="!#">View more ></a>
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <div className="img-box">
                                    <figure>
                                        <img src="../img/main-promo720-g-0228-d.jpg.thumb.768.768.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="txt-box">
                                    <ul>
                                        <li><h3>SPRING <br/>HOLIDAY</h3></li>
                                        <li><hr/></li>
                                        <li><h2>Check out the various benefits offered by LOTTE HOTELS & RESORTS.</h2></li>
                                        <li><button>GO TO OFFERS</button></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="img-box">
                                    <img src="../img/230119-02-405-mai-GLOBA.jpg.thumb.768.768.jpg" alt="" />
                                </div>
                                <div className="txt-box">
                                    <ul>
                                        <li><h3>BED & BREAKFAST <br/>PACKAGE</h3></li>
                                        <li><hr/></li>
                                        <li><h2>We have prepared breakfast included offers<br/>for your relaxing hotel stay.</h2></li>
                                        <li><button>GO TO OFFERS</button></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="img-box">
                                    <img src="../img/230119-03-405-mai-GLOBA.jpg.thumb.768.768.jpg" alt="" />
                                </div>
                                <div className="txt-box">
                                    <ul>
                                        <li><h3>LOTTE HOTEL <br/>REWARDS ONLY</h3></li>
                                        <li><hr/></li>
                                        <li><h2>Find rooms at LOTTE HOTELS & RESORTS around the world at exclusive prices for REWARDS members.</h2></li>
                                        <li><button>GO TO OFFERS</button></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

