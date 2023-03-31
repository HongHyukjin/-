import React from 'react';
import $ from 'jquery';

export default function HeaderComponent (){

    const [state, setState] = React.useState({
        reservationHide : false,
        isSub1 : false
    })
    
    React.useEffect(() => {
        const Header_fixed = $('#header .fixed');
        const fixed_top = Header_fixed.offset().top;
        $(window).scroll(function(){
            if($(window).scrollTop() > fixed_top){
                Header_fixed.css({"position":"fixed", "top":0, "left":0})
            }
            else{
                Header_fixed.css({"position":"relative"})
            }
        })
    })

    const onMouseEnterSub1 = () => {
        setState({
            ...state,
            isSub1 : true
        })
    }

    const onMouseLeaveSub1 = () => {
        setState({
            ...state,
            isSub1 : false
        })
    }

    const onClickHide =(e) => {
        e.preventDefault();
        const reservation = $('#header .reservation .reserv_content');
        reservation.stop().animate({"top" : "-113px"}, 1000);
    }



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
                                                <li><a onMouseEnter={onMouseEnterSub1} className='arrow' href="!#">English</a></li>
                                                <li><a className='arrow' href="!#">KRW</a></li>
                                            </ul>
                                        </div>
                        </div>
                        {
                            state.isSub1 && (
                                <div className="sub1">
                                    <div className="wrap">
                                        <ul onMouseLeave={onMouseLeaveSub1}>
                                            <li>
                                                <a href="!#"><span className='ko'>한국어</span></a>
                                            </li>
                                            <li>
                                                <a href="!#"><span className='ja'>日本語</span></a>
                                            </li>
                                            <li>
                                                <a href="!#"><span className='ch'>中文(简体字)</span></a>
                                            </li>
                                            <li>
                                                <a href="!#"><span className='ru'>русский</span></a>
                                            </li>
                                            <li>
                                                <a href="!#"><span className='vi'>TiếngViệt</span></a>
                                            </li>
                                            <li>
                                                <a href="!#"><span className='my'>Myanmar</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        }
                        <div className="fixed">
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
                                <div className="reserv_content">
                                    <div className="col-gap">
                                            <form name="reservation" id="reservation" action="post">
                                                <ul>
                                                    <li>
                                                        <div>
                                                            <h4>Hotel or city</h4>  
                                                            <input name="cityOrHotel" id="cityOrHotel" type="text" placeholder='Enter the city, attraction or hotel.' />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div>
                                                            <h4>Check-in</h4>  
                                                            <a href="!#">Wed, Mar 29</a>
                                                        </div>
                                                        <div className='pad_top'>
                                                            <a href="!#">1Night(s)</a>
                                                        </div>
                                                        <div>
                                                            <h4>Check-out</h4>  
                                                            <a href="!#">Thu, Mar 30</a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div>
                                                            <h4>Room</h4>  
                                                            <a href="!#">1</a>
                                                        </div>
                                                        <div>
                                                                <h4>Adults</h4>  
                                                                <a href="!#">2</a>
                                                        </div>
                                                        <div>
                                                                <h4>Children</h4>  
                                                                <a href="!#">0</a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div>
                                                            <a className='prom' href="!#">Promotion Code</a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div>
                                                            <button type='button'>SEARCH</button>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </form>
                                            <button onClick={onClickHide}>Hide</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

