(function($){
    const kurly={
        init(){
            this.header();
            this.section1();
        },
        header(){
            console.log('header');
        },
        section1(){

            let cnt = 0;
            //1.메인슬라이드
            function mainSlide(){
                console.log(cnt);
                $('.slide-wrap').animate({left: `${-100 * cnt}%`}, 1000, 'easeInOutExpo', function(){
                    if(cnt === 9) cnt = 0;
                    $('.slide-wrap').animate({left: `${-100 * cnt}%`}, 0);
                })
            }
            //2.다음카운트
            function nextCount(){
                cnt ++;
                mainSlide();
            }
            //3.자동타이머
            function autoTimer(){
                setInterval(nextCount, 3000)
            }
            autoTimer();
        }
    }
    kurly.init();
})(jQuery);