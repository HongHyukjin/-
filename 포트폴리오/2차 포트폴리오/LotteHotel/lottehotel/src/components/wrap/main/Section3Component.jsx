import React from 'react';
import $ from 'jquery';

export default function Section3Component (){

    const [state, setState] = React.useState({
        isSigniel : false,
        isLottehotel : false,
        isL7hotel : false,
        isCityhotel : false,
        isResort : false
    })

    const onMouseOverSigniel = (e) => {
        let isSigniel = true;
        let isLottehotel = false;
        let isL7hotel = false;
        let isCityhotel = false;
        let isResort = false;
        setState({
            ...state,
            isSigniel : isSigniel,
            isLottehotel : isLottehotel,
            isL7hotel : isL7hotel,
            isCityhotel : isCityhotel,
            isResort : isResort
        })
    }

    const onMouseOverLottehotel = (e) => {
        let isSigniel = false;
        let isLottehotel = true;
        let isL7hotel = false;
        let isCityhotel = false;
        let isResort = false;
        setState({
            ...state,
            isSigniel : isSigniel,
            isLottehotel : isLottehotel,
            isL7hotel : isL7hotel,
            isCityhotel : isCityhotel,
            isResort : isResort
        })
    }

    const onMouseOverL7hotel = (e) => {
        let isSigniel = false;
        let isLottehotel = false;
        let isL7hotel = true;
        let isCityhotel = false;
        let isResort = false;
        setState({
            ...state,
            isSigniel : isSigniel,
            isLottehotel : isLottehotel,
            isL7hotel : isL7hotel,
            isCityhotel : isCityhotel,
            isResort : isResort
        })
    }

    const onMouseOverCityhotel = (e) => {
        let isSigniel = false;
        let isLottehotel = false;
        let isL7hotel = false;
        let isCityhotel = true;
        let isResort = false;
        setState({
            ...state,
            isSigniel : isSigniel,
            isLottehotel : isLottehotel,
            isL7hotel : isL7hotel,
            isCityhotel : isCityhotel,
            isResort : isResort
        })
    }

    const onMouseOverResort = (e) => {
        let isSigniel = false;
        let isLottehotel = false;
        let isL7hotel = false;
        let isCityhotel = false;
        let isResort = true;
        setState({
            ...state,
            isSigniel : isSigniel,
            isLottehotel : isLottehotel,
            isL7hotel : isL7hotel,
            isCityhotel : isCityhotel,
            isResort : isResort
        })
    }

    

    React.useEffect(() => {
        if(state.isSigniel === true){
            $('#section3').css({"background-image":"url(../img/mai-brand-signiel-pc.png)"})
        }
        if(state.isLottehotel === true){
            $('#section3').css({"background-image":"url(../img/mai-brand-hotels-pc.png)"})
        }
        if(state.isL7hotel === true){
            $('#section3').css({"background-image":"url(../img/mai-brand-l7-pc.png)"})
        }
        if(state.isCityhotel === true){
            $('#section3').css({"background-image":"url(../img/mai-brand-city-pc.png)"})
        }
        if(state.isResort === true){
            $('#section3').css({"background-image":"url(../img/221219-01-2000-ove-global.png)"})
        }
    },[state.isSigniel, state.isLottehotel, state.isL7hotel, state.isCityhotel, state.isResort])

    return (
        <section id="section3">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h1>LOTTE HOTELS & RESORTS Brands</h1>
                    </div>
                    <div className="content">
                        <div className="top">
                            <ul>
                                <li>
                                    <a onMouseOver={onMouseOverSigniel} href="!#">
                                        <img className={`img ${state.isSigniel?' on':''}`} src="../img/main-brand-signiel.png" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a onMouseOver={onMouseOverLottehotel} href="!#">
                                        <img className={`img ${state.isLottehotel?' on':''}`} src="../img/main-brand-lotte-hotels-resorts.png" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a onMouseOver={onMouseOverL7hotel} href="!#">
                                        <img className={`img ${state.isL7hotel?' on':''}`} src="../img/main-brand-l7-hotels.png" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a onMouseOver={onMouseOverCityhotel} href="!#">
                                        <img className={`img ${state.isCityhotel?' on':''}`} src="../img/main-brand-lotte-city-hotels.png" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a onMouseOver={onMouseOverResort} href="!#">
                                        <img className={`img ${state.isResort?' on':''}`} src="../img/221229-228-logo-resort.png" alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="bottom">
                            {
                                state.isSigniel && (
                                    <div className="txt txt_1">
                                        <ul>
                                            <li>
                                                <h2>Life beyond Expectations</h2>
                                                <h3>SIGNIEL provides quality that rises above all your expectations. We offer the finest personal services along with a luxurious style you cannot find anywhere else.
                                                <br/>
                                                <br/>
                                                Treat yourself to life’s greatest privileges by staying at SIGNIEL. Your stay will be an unforgettable experience.</h3>
                                                <button>View Details</button>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            }
                            {
                                state.isLottehotel && (
                                    <div className="txt txt_2">
                                        <ul>
                                            <li>
                                                <h2>Enriching moments at global destination</h2>
                                                <h3>The history of LOTTE HOTELS reflects pride and genuine heartfelt respect for our guests. Representing delicacy and refinement in facilities and services, we consistently provide the ultimate in satisfaction at every property across the world.</h3>
                                                <button>View Details</button>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            }
                            {
                                state.isL7hotel && (
                                    <div className="txt txt_3">
                                        <ul>
                                            <li>
                                                <h2>A journey for inspiration</h2>
                                                <h3>L7 HOTEL is a lifestyle hotel designed to bring new experiences and inspiration to culture creators and millennials.</h3>
                                                <button>View Details</button>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            }
                            {
                                state.isCityhotel && (
                                    <div className="txt txt_4">
                                        <ul>
                                            <li>
                                                <h2>Modern convenience and design for balanced travel</h2>
                                                <h3>Everything has been designed with business travelers in mind. With modern services and rooms, business travel will be more comfortable than ever before. LOTTE City Hotels will always be available to guests so that all aspects of the hotel are convenient, accessible, and stress-free.</h3>
                                                <button>View Details</button>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            }
                            {
                                state.isResort && (
                                    <div className="txt txt_5">
                                        <ul>
                                            <li>
                                                <h2>Design the Value of Time</h2>
                                                <h3>
                                                    LOTTE RESORT is a travel destination in itself, with various leisure activities and themed relaxation.<br/>
                                                    Plan the perfect trip with comfortable and elegant rooms, and relax in the beauty of nature.
					                            </h3>
                                                <button>View Details</button>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

