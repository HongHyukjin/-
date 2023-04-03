// $(function(){ //제이쿼리 선언문 => $사인이 제이쿼리 라이브러리와 충돌성 있다.
//   console.log($);
// });

(function($){
  
  //객체 생성 : 변수의 중복을 피한다.
  const wedding = {
    init(){
      this.header();
      this.section1();
      this.section2();
      this.section3();
    },
    header(){
      let newScroll = $(window).scrollTop();
      let oldScroll = newScroll;

      $(window).scroll(function(e){
        newScroll =  $(window).scrollTop();
        if(newScroll-oldScroll > 0){  //스크롤 아래로
          $('#header').addClass('on');
          $('#header').removeClass('off');
        }
        if(newScroll-oldScroll < 0){  //스크롤 위로
          $('#header').removeClass('on');
          $('#header').addClass('off');
        }
        oldScroll = newScroll;
      })



      //메인버튼 클릭 이벤트 : 스무스 스크롤링 이벤트
      $('.main-btn').on({
        click(){
          //로딩시 바로가기 메뉴의 포지션 탑값을 가져오기
          // console.log($('#section6').offset().top);
          // console.log($('#section6').offset().left);
          //attribute 속성 프로퍼티
          // console.log($($(this).attr('href')).offset().top);
          let pos = $(this).attr('href')
          $('html,body').animate({scrollTop: $(pos).offset().top}, 300);
        }
      })


      //선택자:모바일 햄버거 메뉴 클릭 이벤트
      //클릭하면
      //이버튼 안에자식요소에서 line 클래스를 찾아서 find('.line')
      // //on 클래스 추가(addClass('on'))
      $('.mobile-btn').on({
        click(e){
          e.preventDefault();
          // $(this).find('.line').addClass('on');
          // $(this).find('.line').removeClass('on');
          $(this).find('.line').toggleClass('on');
        }
      });
      //논리비교는 === 3개를 써줘야한다
      //'7'==7 true
      //'7'===7 false
      // let t = false;  //토글 구현 : 스위칭 교환
      // $('.mobile-btn').on({
      //   click(){
      //     if(t === false){  //t가 false이면 true로 변환
      //       t=true;
      //       $(this).find('.line').addClass('on');
      //     }
      //     else{   //t가 true이면 false로 변환
      //       t=false;
      //       $(this).find('.line').removeClass('on');
      //     }
          
      //   }
      // });

    },
    section1(){
      let cnt = 0;
      let setId = 0;
      const $slide = $('#section1 .slide'); //DOM 선택자 변수에 $를 붙여서 구분
      const $arrowNextBtn = $('#section1 .arrow-next-btn');
      const $arrowPrevBtn = $('#section1 .arrow-prev-btn');
      const $pageBtn = $('#section1 .page-btn');

      //1-1. 메인 다음슬라이드 : 페이드인 => 현재 슬라이드를 덮고 부드렆게 보이는 다음 슬라이드
      function mainNextSlide(){
        // $slide.stop().css({zIndex : 2}).animate({opacity : 1}, 0);
        // $slide.eq(cnt===0?2:cnt-1).css({zIndex : 1}).stop().animate({opacity : 1});
        // $slide.eq(cnt).css({zIndex : 3}).stop().animate({opacity : 0}, 1000);
        
        $slide.css({zIndex : 1}).stop().animate({opacity:1});
        $slide.eq(cnt===0?2:cnt-1).css({zIndex : 2})  //현재슬라이드
        $slide.eq(cnt).css({zIndex : 3}).stop().animate({opacity : 0}, 0).animate({opacity : 1},1000);  //다음슬라이드
        pageBtn();
      }

      //1-2. 메인 이전슬라이드 : 페이드아웃 => 현재 슬라이드를 부드럽게 사라지게 하여 바로 아래 이전 슬라이드가 보임
      function mainPrevSlide(){
        $slide.css({zIndex : 1, opacity : 1});
        $slide.eq(cnt).css({zIndex : 2})  //이전슬라이드
        $slide.eq(cnt===2?0:cnt+1).css({zIndex : 3}).stop().animate({opacity : 1}, 0).animate({opacity : 0},1000);  //다음슬라이드
        pageBtn();
      }

      //2-1. 다음카운트함수
      function nextCount(){
        cnt++;
        if(cnt > 2){  //마지막 슬라이드이면 처음으로 리턴 초기화 0으로
          cnt = 0;
        }
        mainNextSlide();
      }

      //2-2. 이전카운트함수
      function prevCount(){
        cnt--;
        if(cnt < 0){  //마지막 슬라이드이면 처음으로 리턴 초기화 0으로
          cnt = 2;
        }
        mainPrevSlide();
      }

      //3. 자동타이머함수
      function autoTimer(){
        setId = setInterval(prevCount, 3000);
      }
      autoTimer();

      //4-1. 다음 화살버튼클릭 이벤트
      $arrowNextBtn.on({
        click(e){
          e.preventDefault();
          nextCount();
          clearInterval(setId);
        }
      })

      //4-2. 이전 화살버튼클릭 이벤트
      $arrowPrevBtn.on({
        click(e){
          e.preventDefault();
          prevCount();
          clearInterval(setId);
        }
      })

      function pageBtn(){
        $pageBtn.removeClass('on');
        $pageBtn.eq(cnt>2?0:cnt).addClass('on');
      }

      $pageBtn.each(function(idx){
        $(this).on({
          click(e){
            e.preventDefault();
            clearInterval(setId);
            if(idx > cnt){
              cnt = idx;
              mainNextSlide();
            }
            else if(idx < cnt){
              cnt = idx;
              mainPrevSlide();
            }
          }
        })
      })

    },
    section2(){

    },
    section3(){

    }
  }
  wedding.init();

})(jQuery); //즉시실행함수 IIFE
