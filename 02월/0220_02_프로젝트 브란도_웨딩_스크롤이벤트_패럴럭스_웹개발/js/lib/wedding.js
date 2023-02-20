// $(function(){ //제이쿼리 선언문 => $사인이 제이쿼리 라이브러리와 충돌성 있다.
//   console.log($);
// });

(function($, window, document){
  
  //객체 생성 : 변수의 중복을 피한다.
  const wedding = {
    init(){
      this.header();
      this.section1();
      this.section2();
      this.section3();
    },
    header(){
      let newScroll = $(window).scrollTop();  //새로운 스크롤값
      let oldScroll = newScroll;              //이전 스크롤값
      //패럴럭스 구현
      //스크롤탑값이 아래로 내려가면 헤더에 on 클래스를 추가한다
      //스크롤탑값이 위로 올라가면 헤더에 on 클래스를 삭제한다
      console.log(`윈도우 스크롤 이벤트 $(window).scrollTop() ${$(window).scrollTop()}`);
      // $(window).resize();
      //스크롤 이벤트는 스크롤 이벤트가 발생 되어야만 동작한다.
      $(window).scroll(function(e){
        newScroll = $(window).scrollTop();
        // console.log(`newScroll  ${newScroll}`);

        // console.log(`newScroll - oldScroll  ${newScroll - oldScroll}`);
        if(newScroll - oldScroll > 0){
          // console.log('아래로');
          $('#header').addClass('on');
          $('#header').removeClass('off');
        }
        if(newScroll - oldScroll < 0){
          // console.log('위로');
          $('#header').removeClass('on');
          $('#header').addClass('off');
        }

        oldScroll = newScroll;
        // console.log(`oldScroll  ${oldScroll}`);
      });
      



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
      let setId = 0;  //메모리에 할당된 인덱스 번호를 저장한다.

      //1. 메인슬라이드 함수
      function mainSlide(){
        $('.slide-wrap').animate({left:`${-100 * cnt}%`}, 1000, function(){
          if(cnt > 2) cnt = 0;  //슬라이드 3개 0 1 2
          if(cnt < 0) cnt = 2;  //첫번째 왼쪽으로 이동하면 마지막 슬라이드
          $('.slide-wrap').animate({left:`${-100 * cnt}%`}, 0)
        });

        //슬라이드 박스 좌표 구하기
        // console.log(cnt, $('.slide-wrap').offset().left);
      }
      //2-1. 다음 카운트 함수
      function nextCount(){
        cnt++;
        // console.log(cnt);
        mainSlide();
      }
      //2-2. 이전 카운트 함수
      function prevCount(){
        cnt--;
        // console.log(cnt);
        mainSlide();
      }
      //3. 자동 타이머 함수
      function autoTimer(){
        setId = setInterval(nextCount, 3000);
        
        // console.log(setId); //메모리에 할당된 인덱스 번호 확인하기
      }
      autoTimer();

      // 4. 타이머 일시 정지
      // 이전 버튼, 다음 버튼
      // 슬라이드 컨테이너 박스에 마우스 올리면(마우스오버 mouseover === mouseenter(권장))
      // 슬라이드 컨테이너 박스에 마우스 떠나면(마우스아웃 mouseout === mouseleave(권장))
      $('.arrow-next-btn').on({
        mouseenter(){
          clearInterval(setId);
        },
        mouseleave(){
          autoTimer();
        },
        click(){
          //슬라이드 래퍼 박스가 애니메이션이 진행중이 아니면 다음 슬라이드 호출
          if(!$('.slide-wrap').is(':animated')){
            nextCount();
          }
        }
      });
      $('.arrow-prev-btn').on({
        mouseenter(){
          clearInterval(setId);
        },
        mouseleave(){
          autoTimer();
        },
        click(){
          //슬라이드 래퍼 박스가 애니메이션이 진행중이 아니면 이전 슬라이드 호출
          if(!$('.slide-wrap').is(':animated')){
            prevCount();
          }
        }
      });

      // 5. 터치 스와이프
      // 터치는 section1
      // 마우스로 우측에서 좌측으로 터치하면 방향을 계산하는 알고리즘
      // 마우스로 좌측에서 우측으로 터치하면 방향을 계산하는 알고리즘
      let touchStart = 0;
      let touchEnd = 0;
      let mouseDown = false;  //마우스다운하면 true 아니면 false
      let dragStart = 0;
      let dragEnd = 0;
      let winWidth = $(window).innerWidth();

      //데스크탑용
      $('#section1').on({
        mousedown(e){
          winWidth = $(window).innerWidth();  
          mouseDown = true; 
          touchStart = e.clientX;
          dragStart = e.clientX - $('.slide-wrap').offset().left - winWidth;
          // console.log(e.clientX, $('.slide-wrap').offset().left, winWidth);
          clearInterval(setId);
        },
        mouseup(e){
          // console.log('마우스업');  //터치 끝
          // console.log(event);
          // console.log(event.clientX);
          touchEnd = e.clientX;
          
          // console.log(touchStart - touchEnd);   //터치시작좌표 - 터치끝좌표
          if((touchStart - touchEnd) > 0){
            // console.log(touchStart - touchEnd);
            if(!$('.slide-wrap').is(':animated')){
              nextCount();
            }
          }
          if((touchStart - touchEnd) < 0){
            // console.log(touchStart - touchEnd);
            if(!$('.slide-wrap').is(':animated')){
              prevCount();
            }
          }
          mouseDown = false;
        },
        mousemove(e){ //마우스 방향에 따라다닌다.
          if(mouseDown === false){
            return;
          }
          // console.log(e.clientX);
          // clearInterval(setId);
          //마우스가 다운이되면 그때부터 따라다녀라
          //마우스다운할 때 변수에 다운상태를 저장한다.
          dragEnd = e.clientX;
          // console.log(dragEnd - dragStart);
          $('.slide-wrap').css({left : dragEnd - dragStart});
        } 
      });

      //모바일 손가락으로 터치
      $('#section1').on({
        touchstart(e){ //mousedown
          winWidth = $(window).innerWidth();  
          mouseDown = true; 
          console.log(e);
          touchStart = e.originalEvent.changedTouches[0].clientX;
          dragStart = touchStart - $('.slide-wrap').offset().left - winWidth;
          clearInterval(setId);
          console.log('손가락 터치시작', touchStart);
        },
        touchend(e){  //mouseup
          touchEnd = e.originalEvent.changedTouches[0].clientX;
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
          mouseDown = false;
          console.log('손가락 터치끝');
        },
        touchmove(e){ //마우스 방향에 따라다닌다. mousemove
          if(mouseDown === false){
            return;
          }
          dragEnd = e.originalEvent.changedTouches[0].clientX;;
          $('.slide-wrap').css({left : dragEnd - dragStart});
        } 
      });

    },
    section2(){

    },
    section3(){

    }
  }
  wedding.init();

})(jQuery, window, document); //즉시실행함수 IIFE
