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
            // console.log($(window).scrollTop())
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
                                    <form name="reservation" id="reservation" action="post">
                                        <ul>
                                            <li>
                                                <div>
                                                    <div className="top">
                                                        
                                                    </div>
                                                    <h4>Hotel or city</h4>
                                                    <input name="cityOrHotel" id="cityOrHotel" type="text" placeholder='Enter the city, attraction or hotel.' />
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    
                                                </div>
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

