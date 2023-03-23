import React from 'react';
import $ from 'jquery'
export default function Section5Component (){

    React.useEffect(() => {
        let cnt = 0;
        let setId = 0;

        function mainSlide(){
            $('#section5 .slide-wrap').stop().animate({left:`${-100 * cnt}%`},1000, function(){
                if(cnt>1) cnt = 0;
                if(cnt<0) cnt = 1;
                $('#section5 .slide-wrap').stop().animate({left:`${-100 * cnt}%`}, 0)
            })
        }

        function nextCount(){
            cnt++;
            mainSlide();
        }

        function prevCount(){
            cnt--;
            mainSlide();
        }

        function autoTimer(){
            setId = setInterval(() => {
                nextCount();
            }, 3000);
        }
        autoTimer();
        
        
    })

    return (
        <section id="section5">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="top-box">
                            <div className="slide-container">
                                <div className="slide-view">
                                    <ul className="slide-wrap">
                                        <li className='slide slide2'></li>
                                        <li className='slide slide1'></li>
                                        <li className='slide slide2'></li>
                                        <li className='slide slide1'></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-box">
                            <p>LOTTE HOTELS & RESORTS is the largest hotel group in Korea and is expanding beyond Asia to become a global brand that moves the hearts of customers by offering consistent high-quality services and facilities anywhere in the world. LOTTE HOTELS & RESORTS offers comfortable rooms and premium hotel services that were designed in thoughtful consideration of guests who pursue a balanced lifestyle and place value on the finer things in life. The gourmet meals at our hotel restaurants and lounges are a delightful experience and our various facilities will never fall short of satisfying guests who are traveling for business or leisure. Check the official website for hotel packages and special events and promotions that allow you to experience SIGNIEL, LOTTE HOTELS, L7 HOTELS, and LOTTE City Hotels at a special price with additional benefits.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

