(function($){
  

  const wedding = {
    init(){
      this.header();
      this.section1();
      this.section2();
      this.section3();
    },
    header(){
      // console.log('header');
      //메인버튼 클릭 이벤트 : 스무스 스크롤링 이벤트
      $('.main-btn').on({
        click(){
          let pos = $(this).attr('href')
          $('html,body').animate({scrollTop: $(pos).offset().top}, 300);
        }
      })

      $('.mobile-btn').on({
        click(e){
          e.preventDefault();
          // $(this).find('.line').addClass('on');
          // $(this).find('.line').removeClass('on');
          $(this).find('.line').toggleClass('on');
        }
      });
    },
    section1(){
      let cnt = 0;
      //1. 메인슬라이드 함수
      function mainSlide(){
        console.log(cnt);
        $('.slide-wrap').animate({left : `${-100 * cnt}%`}, 1000, 'easeInOutExpo', function(){
          if(cnt === 3) cnt = 0;
          $('.slide-wrap').animate({left : `${-100 * cnt}%`}, 0);
        });
      }
      //2. 다음 카운트 함수
      function nextCount(){
        cnt ++;
        mainSlide();
      }
      //3. 자동 타이머 함수
      function autoTimer(){
        setInterval(nextCount, 3000);
      }
      autoTimer();
    },
    section2(){

    },
    section3(){

    }
  }
  wedding.init();

})(jQuery);
