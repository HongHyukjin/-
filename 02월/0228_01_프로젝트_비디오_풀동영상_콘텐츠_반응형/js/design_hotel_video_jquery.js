(($, window, document, undefined) =>{
  //클래스는 첫글자 대문자 중간단어도 대문자 => 파스칼 케이스 기법
  class DesignHotelClass{
    init(){
      this.mainMethod();
    }
    mainMethod(){
      // console.log('class DesignHotelClass mainMethod 메서드 실행');
      // 창너비
      // 창높이
      // 비디오너비
      // 비디오높이
      // 마진 left
      // 마진 top
      let winW = $(window).innerWidth();
      let winH = $(window).innerHeight();
      
      let videoW = $('#videoHotel video').innerWidth();
      let videoH = $('#videoHotel video').innerHeight();

      let marginT = 0;
      let marginL = 0;
      let setId = 0;

      //로딩시 강제실행
      setId = setInterval(resizeVideo, 100);
      resizeVideo();

      //반응형함수
      function resizeVideo(){
        const $video = $('videoHotel video');
        winW = $(window).innerWidth();
        winH = $(window).innerHeight();
        videoW = $('#videoHotel video').innerWidth();
        videoH = $('#videoHotel video').innerHeight();
        marginT = (winH - videoH) / 2;
        marginL = (winW - videoW) / 2;

        console.log(`marginL ${marginL}`);
        console.log(`marginT ${marginT}`);
        console.log(`winW ${winW}`);
        console.log(`winH ${winH}`);
        // 창너비가 비디오 너비보다 크면 
        // 비디오너비를 창너비로 하고
        // 비디오높이는 자동
        if(winW > videoW){
          $video.css({width : winW, height : 'auto'});
        }
        if(winW < videoW){
          $video.css({width : 'auto', height : winH});
        }
        $video.css({marginTop : marginT, marginLeft : marginL})
      }

      // 반응형
      $(window).resize(function(){
        clearInterval(setId);
        resizeVideo();
      })
    }
  }

  //클래스도 함수이다.
  //클래스는 반드시 생성자를 생성하여 그리고 호출한다
  const newDesignHotelClass = new DesignHotelClass();
  newDesignHotelClass.init();

})(jQuery, window, document);