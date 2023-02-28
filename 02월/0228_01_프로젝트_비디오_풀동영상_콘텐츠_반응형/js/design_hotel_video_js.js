((window, document, undefined) =>{
  //클래스는 첫글자 대문자 중간단어도 대문자 => 파스칼 케이스 기법
  class DesignHotelClass{
    init(){
      this.mainMethod();
    }
    mainMethod(){
      const $video = document.querySelector('#videoHotel video');
      let winW = window.innerWidth;
      let winH = window.innerHeight;
      let vidW = $video.clientWidth;
      let vidH = $video.clientHeight;
      let marT = 0;
      let marL = 0;
      let setId = 0;

      console.log(`$video ${$video}`);
      console.log(`winW ${winW}`);
      console.log(`winH ${winH}`);
      console.log(`vidW ${vidW}`);
      console.log(`vidH ${vidH}`);
      console.log(`marT ${marT}`);
      console.log(`marL ${marL}`);


      

      //로딩시 강제실행
      // setId = setInterval(resizeVideo, 100);
      // resizeVideo();

      //반응형함수
      function resizeVideo(){
        $video = document.querySelector('#videoHotel video');
        winW = window.innerWidth;
        winH = window.innerHeight;
        vidW = $video.clientWidth;
        vidH = $video.clientHeight;
        marT = 0;
        marL = 0;
        setId = 0;

        if(winW > vidW){
          $video.style.width = `${winW}px`;
          $video.style.height = `auto`;
        }
        if(winW < vidW){
          $video.style.width = `auto`;
          $video.style.height = `${winW}px`;
        }
        $video.style.marginTop = `${marT}px`;
        $video.style.marginLeft = `${marL}px`;
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

})(window, document);