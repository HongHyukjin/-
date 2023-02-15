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

    },
    section2(){

    },
    section3(){

    }
  }
  wedding.init();

})(jQuery); //즉시실행함수 IIFE
