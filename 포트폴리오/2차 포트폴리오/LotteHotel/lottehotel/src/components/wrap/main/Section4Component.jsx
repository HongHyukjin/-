import React from 'react';
import $ from 'jquery';

export default function Section4Component (){

    React.useEffect(() => {
        let cnt = 0;
        
        function mainSlide(){
            // $('#section4 .slide-wrap').stop().animate({left:`${(-100 * cnt) - (100 * cnt)}%`},500, function(){
            //     if(cnt > 2) cnt = 0;
            //     if(cnt < 0) cnt = 2;
            //     $('#section4 .slide-wrap').stop().animate({left:`${(-100 * cnt) - (100 * cnt)}%`}, 0);
            // });
            $('#section4 .slide-wrap').stop().animate({left:`${(-100 * cnt * 2) + 100}%`},0); 
            $('#section4 .slide-wrap').stop().animate({left:`${(-100 * cnt * 2)}%`},500, function(){
                if(cnt > 2) cnt = 0;
                if(cnt < 0) cnt = 2;
                $('#section4 .slide-wrap').stop().animate({left:`${(-100 * cnt * 2)}%`}, 0);
            });
        }

        function nextCount(){
            cnt++;  
            mainSlide();
        }

        function prevCount(){
            cnt--;  
            mainSlide();
        }
        

        $('#section4 .arrow-next-btn').on({
            click(e){
                e.preventDefault();
                if(!$('#section4 .slide-wrap').is(':animated')){
                    nextCount();
                }
            }
        })

        $('#section4 .arrow-prev-btn').on({
            click(e){
                e.preventDefault();
                if(!$('#section4 .slide-wrap').is(':animated')){
                    prevCount();
                }
            }
        })

    })

    return (
        <section id="section4">
            <div className="container">
                <div className="content">
                    <div className="slide-container">
                        <div className="slide-view">
                            <ul className="slide-wrap">
                                <li className="slide slide3">
                                    <div className="center">
                                        <h2>LOTTE City Hotel Tashkent Palace</h2>
                                        <p>LOTTE City Hotel Tashkent Palace, built in 1958 and has been designated as Uzbekistan`s cultural heritage, is an appealing hotel with classical appearance.</p>
                                        <button>GO HOTEL SITE</button>
                                    </div>
                                </li>
                                <li className='slide slidezero'></li>
                                <li className="slide slide1">
                                    <div className="center">
                                        <h2>LOTTE City Hotel Ulsan</h2>
                                        <p>The hotel offers 345 guest rooms which is the largest in Ulsan. It is a business hotel catering to both business travelers and tourists thanks to its vicinity of the financial district, shopping town, airport and bus terminal.</p>
                                        <button>GO HOTEL SITE</button>
                                    </div>
                                </li>
                                <li className='slide slidezero'></li>
                                <li className="slide slide2">
                                    <div className="center">
                                        <h2>LOTTE City Hotel Daejeon</h2>
                                        <p>LOTTE City Hotel Daejeon opened in March 2014 in Daejeon, where it’s a hub of R&D and education in the Northeast Asia, a mecca of advanced science and technology, and the Silicon Valley of South Korea.</p>
                                        <button>GO HOTEL SITE</button>
                                    </div>
                                </li>
                                <li className='slide slidezero'></li>
                                <li className="slide slide3">
                                    <div className="center">
                                        <h2>LOTTE City Hotel Tashkent Palace</h2>
                                        <p>LOTTE City Hotel Tashkent Palace, built in 1958 and has been designated as Uzbekistan`s cultural heritage, is an appealing hotel with classical appearance.</p>
                                        <button>GO HOTEL SITE</button>
                                    </div>
                                </li>
                                <li className='slide slidezero'></li>
                                <li className="slide slide1">
                                    <div className="center">
                                        <h2>LOTTE City Hotel Ulsan</h2>
                                        <p>The hotel offers 345 guest rooms which is the largest in Ulsan. It is a business hotel catering to both business travelers and tourists thanks to its vicinity of the financial district, shopping town, airport and bus terminal.</p>
                                        <button>GO HOTEL SITE</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a href="!#" className='arrow-next-btn'></a>
                    <a href="!#" className='arrow-prev-btn'></a>
                </div>
            </div>
        </section>
    );
};

