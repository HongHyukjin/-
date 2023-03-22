import React from 'react';
import $ from 'jquery';

export default function Section4Component (){

    React.useEffect(() => {
        let cnt = 0;
        
        function mainSlide(){
            $('#section4 .slide-wrap').stop().animate({left:`${-100 * cnt}%`},1000, function(){
                if(cnt === 0 || cnt === 3){
                    $('#section4 .slide-wrap').stop().animate({left:`${-100 * cnt}`}, 0);
                }
            });
        }

        function nextCount(){
            cnt++;  
            if(cnt > 3){
                cnt = 0;
            }
            mainSlide();
        }

        function prevCount(){
            cnt--;  
            if(cnt < 0){
                cnt = 3;
            }
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
                                <li className="slide slide1"></li>
                                <li className="slide slide2"></li>
                                <li className="slide slide3"></li>
                                <li className="slide slide1"></li>
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

