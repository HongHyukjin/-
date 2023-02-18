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
            let setId = 0;
            //1.메인슬라이드
            function mainSlide(){
                // console.log(cnt);
                $('.slide-wrap').animate({left: `${-100 * cnt}%`}, 1000, 'easeInOutExpo', function(){
                    if(cnt > 8) cnt = 0;
                    if(cnt < 0) cnt = 8;
                    $('.slide-wrap').animate({left: `${-100 * cnt}%`}, 0);
                })
            }
            //2-1.다음카운트
            function nextCount(){
                cnt ++;
                mainSlide();
            }
            //2-2.이전카운트
            function prevCount(){
                cnt --;
                mainSlide();
            }
            //3.자동타이머
            function autoTimer(){
                setId = setInterval(nextCount, 4000)
                console.log('반복시작');
            }
            function stopTimer(){
                clearInterval(setId);
                console.log('반복종료');
            }
            autoTimer();

            //이전버튼, 다음버튼
            $('.next-btn').on({
                mouseenter(){
                    // clearInterval(setId);
                    stopTimer();
                },
                mouseleave(){
                    autoTimer();
                },
                click(){
                    if(!$('.slide-wrap').is(':animated')){
                        nextCount();
                    }
                }
            });
            $('.prev-btn').on({
                mouseenter(){
                    // clearInterval(setId);
                    stopTimer();
                },
                mouseleave(){
                    autoTimer();
                },
                click(){
                    if(!$('.slide-wrap').is(':animated')){
                        prevCount();
                    }
                }
            });

            //터치스와이프
            let touchStart = 0;
            let touchEnd = 0;
            let dragStart = 0;
            let dragEnd = 0;
            let winWidth = $(window).innerWidth();
            let mousedown = false;

            $('.slide-view').on({
                mousedown(e){
                    mousedown = true;
                    touchStart = e.clientX;
                    dragStart = touchStart - $('.slide-wrap').offset().left - winWidth;
                    stopTimer();
                },
                mouseup(e){
                    mousedown = false;
                    touchEnd = e.clientX;
                    if(touchStart - touchEnd > 0){
                        if(!$('.slide-wrap').is(':animated')){
                            nextCount();
                        }
                    }
                    if(touchStart - touchEnd < 0){
                        if(!$('.slide-wrap').is(':animated')){
                            prevCount();
                        }
                    }
                    autoTimer();
                },
                mousemove(e){
                    if(mousedown === false){
                        return;
                    }
                    dragEnd = e.clientX;
                    $('.slide-wrap').css({left : dragEnd - dragStart});
                }
            })
            
        }
    }
    kurly.init();
})(jQuery);