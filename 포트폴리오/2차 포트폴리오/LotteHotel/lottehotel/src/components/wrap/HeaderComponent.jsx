import React from 'react';

export default function HeaderComponent (){
    return (
        <header id="header">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="nav-top">
                            <div className="left">
                                <a href="!#">
                                    <img src="./img/M_gnb_logo_hotelsresorts.png" alt="" />
                                </a>
                            </div>
                            <div className="right">
                                <ul>
                                    <li><a href="!#">Find a Hotel</a></li>
                                    <li><i>|</i></li>
                                    <li><a href="!#">My Reservations</a></li>
                                    <li><i>|</i></li>
                                    <li><a href="!#">Sign in</a></li>
                                    <li><i>|</i></li>
                                    <li><a href="!#">Join now</a></li>
                                    <li><i>|</i></li>
                                    <li><a href="!#">English</a></li>
                                    <li><a href="!#">KRW</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="nav-bottom">
                            <ul>
                                <li><a href="!#">BOOK</a></li>
                                <li><a href="!#">DINING</a></li>
                                <li><a href="!#">SPECIAL OFFERS</a></li>
                                <li><a href="!#">WEDDING & CONFERENCE</a></li>
                                <li><a href="!#">L VIBES</a></li>
                            </ul>
                            <button>LOTTE HOTEL REWARDS</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

