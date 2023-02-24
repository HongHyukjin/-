(function($, window, document){

  const gallery = {
    init(){
      this.main();
    },
    main(){
      //Element 요소 선택자
      const galleryBtn = $('.gallery-btn');
      const galleryBoxUl = $('#gallery-box ul');  //갤러리 박스
      const galleryBoxUlLi = $('#gallery-box ul li'); //갤러리 목록(이미지박스)

      let n = galleryBoxUlLi.length;  //li 개수 hide 개수 show 개수
      let cols = 4;  //기본 4칸
      let rows = Math.ceil(n / cols);   //8개/4칸 = 2줄
      let winW = $(window).innerWidth();
      let imgW = winW / cols;  //창너비 / 칸수
      let imgH = imgW * 0.75;   //이미지너비 * 0.75
      let galBoxH = imgH * rows;  //갤러리박스 전체 높이

      let btnNumber = null; //버튼클릭시 전달되는 버튼번호

      //1. 반응형
      //2. 갤러리 함수
      //3. 갤러리 버튼 클릭 이벤트 : 버튼마다 해당 이미지 리스트가 다르다 구성

      //1. 반응형 이벤트
      // $(window).scroll()  //스크롤이 발생할때
      $(window).resize(function(e){   //크기 변경시 이벤트 발생
        galleryFn();
      })

      //2. 갤러리 함수
      function galleryFn(){

        console.log('버튼 번호', btnNumber);



        if($(window).innerWidth() >= 1200){
          cols = 4;
        }
        else if($(window).innerWidth() >= 991){
          cols = 3;
        }
        else if($(window).innerWidth() >= 768){
          cols = 2;
        }
        else{
          cols = 1;
        }

        rows = Math.ceil(n / cols);   //8개/4칸 = 2줄
        winW = $(window).innerWidth();
        imgW = winW / cols;  //창너비 / 칸수
        imgH = imgW * 0.75;   //이미지너비 * 0.75
        galBoxH = imgH * rows;  //갤러리박스 전체 높이
        
        // console.log(`n ${n}`);
        // console.log(`cols ${cols}`);
        // console.log(`rows ${rows}`);
        // console.log(`winW ${winW}`);
        // console.log(`imgW ${imgW}`);
        // console.log(`imgH ${imgH}`);
        // console.log(`galBoxH ${galBoxH}`);

        //갤러리박스 높이 지정
        galleryBoxUl.css({
          height : galBoxH
        })
        galleryBoxUlLi.css({
          width : imgW,
          height : imgH
        })

          

          //WEB - 5개

          //스위치 케이스
          if(btnNumber === 0){  //ALL
            console.log('ALL - 8개');
            switch(cols){
              case 4:
                galleryBoxUlLi.eq(0).stop().animate({top :imgH*0, left :imgW*0}, 300);
                galleryBoxUlLi.eq(1).stop().animate({top :imgH*0, left :imgW*1}, 300);
                galleryBoxUlLi.eq(2).stop().animate({top :imgH*0, left :imgW*2}, 300);
                galleryBoxUlLi.eq(3).stop().animate({top :imgH*0, left :imgW*3}, 300);
      
                galleryBoxUlLi.eq(4).stop().animate({top :imgH*1, left :imgW*0}, 300);
                galleryBoxUlLi.eq(5).stop().animate({top :imgH*1, left :imgW*1}, 300);
                galleryBoxUlLi.eq(6).stop().animate({top :imgH*1, left :imgW*2}, 300);
                galleryBoxUlLi.eq(7).stop().animate({top :imgH*1, left :imgW*3}, 300);
                break;
              case 3:
                galleryBoxUlLi.eq(0).stop().animate({top :imgH*0, left :imgW*0}, 300);
                galleryBoxUlLi.eq(1).stop().animate({top :imgH*0, left :imgW*1}, 300);
                galleryBoxUlLi.eq(2).stop().animate({top :imgH*0, left :imgW*2}, 300);

                galleryBoxUlLi.eq(3).stop().animate({top :imgH*1, left :imgW*0}, 300);
                galleryBoxUlLi.eq(4).stop().animate({top :imgH*1, left :imgW*1}, 300);
                galleryBoxUlLi.eq(5).stop().animate({top :imgH*1, left :imgW*2}, 300);

                galleryBoxUlLi.eq(6).stop().animate({top :imgH*2, left :imgW*0}, 300);
                galleryBoxUlLi.eq(7).stop().animate({top :imgH*2, left :imgW*1}, 300);
                break;
              case 2:
                galleryBoxUlLi.eq(0).stop().animate({top :imgH*0, left :imgW*0}, 300);
                galleryBoxUlLi.eq(1).stop().animate({top :imgH*0, left :imgW*1}, 300);

                galleryBoxUlLi.eq(2).stop().animate({top :imgH*1, left :imgW*0}, 300);
                galleryBoxUlLi.eq(3).stop().animate({top :imgH*1, left :imgW*1}, 300);

                galleryBoxUlLi.eq(4).stop().animate({top :imgH*2, left :imgW*0}, 300);
                galleryBoxUlLi.eq(5).stop().animate({top :imgH*2, left :imgW*1}, 300);

                galleryBoxUlLi.eq(6).stop().animate({top :imgH*3, left :imgW*0}, 300);
                galleryBoxUlLi.eq(7).stop().animate({top :imgH*3, left :imgW*1}, 300);
                break;
              default:
                galleryBoxUlLi.eq(0).stop().animate({top :imgH*0, left :imgW*0}, 300);
              
                galleryBoxUlLi.eq(1).stop().animate({top :imgH*1, left :imgW*0}, 300);

                galleryBoxUlLi.eq(2).stop().animate({top :imgH*2, left :imgW*0}, 300);

                galleryBoxUlLi.eq(3).stop().animate({top :imgH*3, left :imgW*0}, 300);

                galleryBoxUlLi.eq(4).stop().animate({top :imgH*4, left :imgW*0}, 300);

                galleryBoxUlLi.eq(5).stop().animate({top :imgH*5, left :imgW*0}, 300);

                galleryBoxUlLi.eq(6).stop().animate({top :imgH*6, left :imgW*0}, 300);

                galleryBoxUlLi.eq(7).stop().animate({top :imgH*7, left :imgW*0}, 300);
                break;
            }  
          }
          else if(btnNumber === 1){ //WEB
            console.log('WEB - 5개');
            switch(cols){
              case 4:
                galleryBoxUlLi.eq(0).stop().animate({top :imgH*0, left :imgW*0}, 300);
                galleryBoxUlLi.eq(1).stop().animate({top :imgH*0, left :imgW*1}, 300);
                galleryBoxUlLi.eq(2).stop().animate({top :imgH*0, left :imgW*2}, 300);
                galleryBoxUlLi.eq(3).stop().animate({top :imgH*0, left :imgW*3}, 300);
      
                galleryBoxUlLi.eq(4).stop().animate({top :imgH*1, left :imgW*0}, 300);
                break;
              case 3:
                galleryBoxUlLi.eq(0).stop().animate({top :imgH*0, left :imgW*0}, 300);
                galleryBoxUlLi.eq(1).stop().animate({top :imgH*0, left :imgW*1}, 300);
                galleryBoxUlLi.eq(2).stop().animate({top :imgH*0, left :imgW*2}, 300);

                galleryBoxUlLi.eq(3).stop().animate({top :imgH*1, left :imgW*0}, 300);
                galleryBoxUlLi.eq(4).stop().animate({top :imgH*1, left :imgW*1}, 300);
                break;
              case 2:
                galleryBoxUlLi.eq(0).stop().animate({top :imgH*0, left :imgW*0}, 300);
                galleryBoxUlLi.eq(1).stop().animate({top :imgH*0, left :imgW*1}, 300);

                galleryBoxUlLi.eq(2).stop().animate({top :imgH*1, left :imgW*0}, 300);
                galleryBoxUlLi.eq(3).stop().animate({top :imgH*1, left :imgW*1}, 300);

                galleryBoxUlLi.eq(4).stop().animate({top :imgH*2, left :imgW*0}, 300);
                break;
              default:
                galleryBoxUlLi.eq(0).stop().animate({top :imgH*0, left :imgW*0}, 300);
              
                galleryBoxUlLi.eq(1).stop().animate({top :imgH*1, left :imgW*0}, 300);

                galleryBoxUlLi.eq(2).stop().animate({top :imgH*2, left :imgW*0}, 300);

                galleryBoxUlLi.eq(3).stop().animate({top :imgH*3, left :imgW*0}, 300);

                galleryBoxUlLi.eq(4).stop().animate({top :imgH*4, left :imgW*0}, 300);
                break;
            }
          }
          else if(btnNumber === 2){  //DESIGN
            console.log('DESIGN - 6개');
            switch(cols){
              case 4:
                galleryBoxUlLi.eq(0).stop().animate({top :imgH*0, left :imgW*0}, 300);
                galleryBoxUlLi.eq(1).stop().animate({top :imgH*0, left :imgW*1}, 300);
                galleryBoxUlLi.eq(2).stop().animate({top :imgH*0, left :imgW*2}, 300);
                galleryBoxUlLi.eq(3).stop().animate({top :imgH*0, left :imgW*3}, 300);
      
                galleryBoxUlLi.eq(4).stop().animate({top :imgH*1, left :imgW*0}, 300);
                galleryBoxUlLi.eq(5).stop().animate({top :imgH*1, left :imgW*1}, 300);
                galleryBoxUlLi.eq(6).stop().animate({top :imgH*1, left :imgW*2}, 300);
                galleryBoxUlLi.eq(7).stop().animate({top :imgH*1, left :imgW*3}, 300);
                break;
              case 3:
                galleryBoxUlLi.eq(0).stop().animate({top :imgH*0, left :imgW*0}, 300);
                galleryBoxUlLi.eq(1).stop().animate({top :imgH*0, left :imgW*1}, 300);
                galleryBoxUlLi.eq(2).stop().animate({top :imgH*0, left :imgW*2}, 300);

                galleryBoxUlLi.eq(3).stop().animate({top :imgH*1, left :imgW*0}, 300);
                galleryBoxUlLi.eq(4).stop().animate({top :imgH*1, left :imgW*1}, 300);
                galleryBoxUlLi.eq(5).stop().animate({top :imgH*1, left :imgW*2}, 300);

                galleryBoxUlLi.eq(6).stop().animate({top :imgH*2, left :imgW*0}, 300);
                galleryBoxUlLi.eq(7).stop().animate({top :imgH*2, left :imgW*1}, 300);
                break;
              case 2:
                galleryBoxUlLi.eq(0).stop().animate({top :imgH*0, left :imgW*0}, 300);
                galleryBoxUlLi.eq(1).stop().animate({top :imgH*0, left :imgW*1}, 300);

                galleryBoxUlLi.eq(2).stop().animate({top :imgH*1, left :imgW*0}, 300);
                galleryBoxUlLi.eq(3).stop().animate({top :imgH*1, left :imgW*1}, 300);

                galleryBoxUlLi.eq(4).stop().animate({top :imgH*2, left :imgW*0}, 300);
                galleryBoxUlLi.eq(5).stop().animate({top :imgH*2, left :imgW*1}, 300);

                galleryBoxUlLi.eq(6).stop().animate({top :imgH*3, left :imgW*0}, 300);
                galleryBoxUlLi.eq(7).stop().animate({top :imgH*3, left :imgW*1}, 300);
                break;
              default:
                galleryBoxUlLi.eq(0).stop().animate({top :imgH*0, left :imgW*0}, 300);
              
                galleryBoxUlLi.eq(1).stop().animate({top :imgH*1, left :imgW*0}, 300);

                galleryBoxUlLi.eq(2).stop().animate({top :imgH*2, left :imgW*0}, 300);

                galleryBoxUlLi.eq(3).stop().animate({top :imgH*3, left :imgW*0}, 300);

                galleryBoxUlLi.eq(4).stop().animate({top :imgH*4, left :imgW*0}, 300);

                galleryBoxUlLi.eq(5).stop().animate({top :imgH*5, left :imgW*0}, 300);

                galleryBoxUlLi.eq(6).stop().animate({top :imgH*6, left :imgW*0}, 300);

                galleryBoxUlLi.eq(7).stop().animate({top :imgH*7, left :imgW*0}, 300);
                break;
            }  
          }
          else if(btnNumber === 3){  //BRANDING
            console.log('BRANDING - 4개');
            switch(cols){
              case 4:
                galleryBoxUlLi.eq(0).stop().animate({top :imgH*0, left :imgW*0}, 300);
                galleryBoxUlLi.eq(1).stop().animate({top :imgH*0, left :imgW*1}, 300);
                galleryBoxUlLi.eq(2).stop().animate({top :imgH*0, left :imgW*2}, 300);
                galleryBoxUlLi.eq(3).stop().animate({top :imgH*0, left :imgW*3}, 300);
      
                galleryBoxUlLi.eq(4).stop().animate({top :imgH*1, left :imgW*0}, 300);
                galleryBoxUlLi.eq(5).stop().animate({top :imgH*1, left :imgW*1}, 300);
                galleryBoxUlLi.eq(6).stop().animate({top :imgH*1, left :imgW*2}, 300);
                galleryBoxUlLi.eq(7).stop().animate({top :imgH*1, left :imgW*3}, 300);
                break;
              case 3:
                galleryBoxUlLi.eq(0).stop().animate({top :imgH*0, left :imgW*0}, 300);
                galleryBoxUlLi.eq(1).stop().animate({top :imgH*0, left :imgW*1}, 300);
                galleryBoxUlLi.eq(2).stop().animate({top :imgH*0, left :imgW*2}, 300);

                galleryBoxUlLi.eq(3).stop().animate({top :imgH*1, left :imgW*0}, 300);
                galleryBoxUlLi.eq(4).stop().animate({top :imgH*1, left :imgW*1}, 300);
                galleryBoxUlLi.eq(5).stop().animate({top :imgH*1, left :imgW*2}, 300);

                galleryBoxUlLi.eq(6).stop().animate({top :imgH*2, left :imgW*0}, 300);
                galleryBoxUlLi.eq(7).stop().animate({top :imgH*2, left :imgW*1}, 300);
                break;
              case 2:
                galleryBoxUlLi.eq(0).stop().animate({top :imgH*0, left :imgW*0}, 300);
                galleryBoxUlLi.eq(1).stop().animate({top :imgH*0, left :imgW*1}, 300);

                galleryBoxUlLi.eq(2).stop().animate({top :imgH*1, left :imgW*0}, 300);
                galleryBoxUlLi.eq(3).stop().animate({top :imgH*1, left :imgW*1}, 300);

                galleryBoxUlLi.eq(4).stop().animate({top :imgH*2, left :imgW*0}, 300);
                galleryBoxUlLi.eq(5).stop().animate({top :imgH*2, left :imgW*1}, 300);

                galleryBoxUlLi.eq(6).stop().animate({top :imgH*3, left :imgW*0}, 300);
                galleryBoxUlLi.eq(7).stop().animate({top :imgH*3, left :imgW*1}, 300);
                break;
              default:
                galleryBoxUlLi.eq(0).stop().animate({top :imgH*0, left :imgW*0}, 300);
              
                galleryBoxUlLi.eq(1).stop().animate({top :imgH*1, left :imgW*0}, 300);

                galleryBoxUlLi.eq(2).stop().animate({top :imgH*2, left :imgW*0}, 300);

                galleryBoxUlLi.eq(3).stop().animate({top :imgH*3, left :imgW*0}, 300);

                galleryBoxUlLi.eq(4).stop().animate({top :imgH*4, left :imgW*0}, 300);

                galleryBoxUlLi.eq(5).stop().animate({top :imgH*5, left :imgW*0}, 300);

                galleryBoxUlLi.eq(6).stop().animate({top :imgH*6, left :imgW*0}, 300);

                galleryBoxUlLi.eq(7).stop().animate({top :imgH*7, left :imgW*0}, 300);
                break;
            }  
          }
          else if(btnNumber === 4){  //ADVERTISING
            console.log('ADVERTISING - 7개');
            switch(cols){
              case 4:
                galleryBoxUlLi.eq(0).stop().animate({top :imgH*0, left :imgW*0}, 300);
                galleryBoxUlLi.eq(1).stop().animate({top :imgH*0, left :imgW*1}, 300);
                galleryBoxUlLi.eq(2).stop().animate({top :imgH*0, left :imgW*2}, 300);
                galleryBoxUlLi.eq(3).stop().animate({top :imgH*0, left :imgW*3}, 300);
      
                galleryBoxUlLi.eq(4).stop().animate({top :imgH*1, left :imgW*0}, 300);
                galleryBoxUlLi.eq(5).stop().animate({top :imgH*1, left :imgW*1}, 300);
                galleryBoxUlLi.eq(6).stop().animate({top :imgH*1, left :imgW*2}, 300);
                galleryBoxUlLi.eq(7).stop().animate({top :imgH*1, left :imgW*3}, 300);
                break;
              case 3:
                galleryBoxUlLi.eq(0).stop().animate({top :imgH*0, left :imgW*0}, 300);
                galleryBoxUlLi.eq(1).stop().animate({top :imgH*0, left :imgW*1}, 300);
                galleryBoxUlLi.eq(2).stop().animate({top :imgH*0, left :imgW*2}, 300);

                galleryBoxUlLi.eq(3).stop().animate({top :imgH*1, left :imgW*0}, 300);
                galleryBoxUlLi.eq(4).stop().animate({top :imgH*1, left :imgW*1}, 300);
                galleryBoxUlLi.eq(5).stop().animate({top :imgH*1, left :imgW*2}, 300);

                galleryBoxUlLi.eq(6).stop().animate({top :imgH*2, left :imgW*0}, 300);
                galleryBoxUlLi.eq(7).stop().animate({top :imgH*2, left :imgW*1}, 300);
                break;
              case 2:
                galleryBoxUlLi.eq(0).stop().animate({top :imgH*0, left :imgW*0}, 300);
                galleryBoxUlLi.eq(1).stop().animate({top :imgH*0, left :imgW*1}, 300);

                galleryBoxUlLi.eq(2).stop().animate({top :imgH*1, left :imgW*0}, 300);
                galleryBoxUlLi.eq(3).stop().animate({top :imgH*1, left :imgW*1}, 300);

                galleryBoxUlLi.eq(4).stop().animate({top :imgH*2, left :imgW*0}, 300);
                galleryBoxUlLi.eq(5).stop().animate({top :imgH*2, left :imgW*1}, 300);

                galleryBoxUlLi.eq(6).stop().animate({top :imgH*3, left :imgW*0}, 300);
                galleryBoxUlLi.eq(7).stop().animate({top :imgH*3, left :imgW*1}, 300);
                break;
              default:
                galleryBoxUlLi.eq(0).stop().animate({top :imgH*0, left :imgW*0}, 300);
              
                galleryBoxUlLi.eq(1).stop().animate({top :imgH*1, left :imgW*0}, 300);

                galleryBoxUlLi.eq(2).stop().animate({top :imgH*2, left :imgW*0}, 300);

                galleryBoxUlLi.eq(3).stop().animate({top :imgH*3, left :imgW*0}, 300);

                galleryBoxUlLi.eq(4).stop().animate({top :imgH*4, left :imgW*0}, 300);

                galleryBoxUlLi.eq(5).stop().animate({top :imgH*5, left :imgW*0}, 300);

                galleryBoxUlLi.eq(6).stop().animate({top :imgH*6, left :imgW*0}, 300);

                galleryBoxUlLi.eq(7).stop().animate({top :imgH*7, left :imgW*0}, 300);
                break;
            }  
          }



      }

      //3. 갤러리 버튼 클릭 이벤트
      galleryBtn.each(function(idx){
        $(this).on({
          click(e){
            e.preventDefault();
            console.log(idx);
            btnNumber = idx;
            galleryFn();
          }
        })
      })

    }
  }
  gallery.init();

})(jQuery, window, document);