import React from 'react';
import $ from 'jquery';

export default function HeaderComponent (){

    const [state, setState] = React.useState({
        headerFix : false
    })
    
    React.useEffect(() => {
        const header_fixed_top = $('#header .fixed').offset().top;
        let headerFix = false;

        $(window).scroll(function(){
            console.log($(window).scrollTop())
            // console.log(header_fixed_top)
            if($(window).scrollTop() > 0){
                headerFix = true;
            }
            else{
                headerFix = false;
            }
            // console.log(headerFix);
            setState({
                headerFix : headerFix
            })
        })
    })



    return (
        <header id="header">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="fixed">
                            {
                                !state.headerFix && (
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
                                )
                            }
                            <div className="nav-bottom">
                                <ul>
                                    <li>
                                        <img src="./img/search.svg" alt="" />
                                        <a href="!#">BOOK</a>
                                    </li>
                                    <li><a href="!#">DINING</a></li>
                                    <li><a href="!#">SPECIAL OFFERS</a></li>
                                    <li><a href="!#">WEDDING & CONFERENCE</a></li>
                                    <li><a href="!#">L VIBES</a></li>
                                </ul>
                                <button>LOTTE HOTEL REWARDS</button>
                            </div>
                            <div className="reservation">
                                <div className="col-gap">
                                    <ul>
                                        {/* <li>
                                            <h3>Hotel or city</h3>
                                            <input type="text" name='city' id='city' placeholder='Enter the city, attraction or hotel' />
                                        </li>
                                        <li>
                                            <h3>Check-in</h3>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

