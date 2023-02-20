
(function($){

  const personal = {
    init(){
      this.header();
      this.section1();
      this.section8();
    },
    header(){
      $('.main-btn').on({
        click(){
          let pos = $(this).attr('href');
          $('html, body').animate({scrollTop : $(pos).offset().top},500);
          $(this).toggleClass('on');
        }
      })
    },

    section1(){
      let cnt = 0;
      let setId = 0;

      //메인슬라이드
      function mainSlide(){
        // if(cnt < ) return;
        $('.slide-wrap').stop().animate({left : `${-100 * cnt}%`}, 1000, function(){
        });
      }

      function nextCount(){
        if(cnt < 2){
          cnt ++;
          mainSlide();
        }
        if(cnt === 2){
          mainSlide();
        }
      }

      function prevCount(){
        if(cnt > 0){
          cnt --;
          mainSlide();
        }
        if(cnt === 0){
          mainSlide();
        }
      }

      function autoTimer(){
        setId = setInterval(nextCount, 4000);
        console.log('Interval start');
      }

      autoTimer();

      function stopTimer(){
        clearInterval(setId);
      }

      //터치스와이프
      let touchStart = 0;
      let touchEnd = 0;
      let dragStart = 0;
      let dragEnd = 0;
      let mousedown = false;

      $('#section1').on({
        mousedown(e){
          mousedown = true;
          touchStart = e.clientX;
          dragStart = e.clientX - $('.slide-wrap').offset().left + 250;
          console.log(e.clientX, $('.slide-wrap').offset().left);
          stopTimer();
        },
        mouseup(e){
          mousedown = false;
          touchEnd = e.clientX;
          if((touchStart - touchEnd) > 0){
            if(!$('.slide-wrap').is(':animated')){
              nextCount();
            }
          }
          if((touchStart - touchEnd) < 0){
            if(!$('.slide-wrap').is(':animated')){
              prevCount();
            }
          }
        },
        mousemove(e){
          if(mousedown === false) return;
          dragEnd = e.clientX;
          // console.log(dragEnd - dragStart);
          if(!$('.slide-wrap').is(':animated') && 0<cnt<2){
            $('.slide-wrap').css({left : dragEnd - dragStart});
          }
        }
      });
    },

    section8(){
      $('.a_1,.a_2,.a_3,.a_4,.a_5').on({
        click(e){
          e.preventDefault();
          $(this).toggleClass('on');
        }
      });
    }

  }
  personal.init();

})(jQuery);
