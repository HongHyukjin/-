(function($, window, document){

  const gallery = {
    init(){
      this.main();
    },
    main(){
      //Element 요소 선택자
      //선택자 중복을 피하기 위해서 반드시 해당 섹션 아이디를 앞에서 표기한다.
      const galleryBtn = $('#gallery .gallery-btn');
      const imgBox = $('#gallery .img-box');

      const galleryBoxUl = $('#gallery-box ul');  //갤러리 박스
      const galleryBoxUlLi = $('#gallery-box ul li'); //갤러리 목록(이미지박스)
      

      let n = galleryBoxUlLi.length;  //li 개수 hide 개수 show 개수
      let cols = 4;  //기본 4칸
      let rows = Math.ceil(n / cols);   //8개/4칸 = 2줄
      let winW = $(window).innerWidth();
      let imgW = winW / cols;  //창너비 / 칸수
      let imgH = imgW * 0.75;   //이미지너비 * 0.75
      let galBoxH = imgH * rows;  //갤러리박스 전체 높이

      let btnNumber = 3; //버튼클릭시 전달되는 버튼번호
      let a = [];

      //로딩시 함수 호출 실행
      galleryFn();
      galleryBtn.removeClass('on');
      galleryBtn.eq(btnNumber).addClass('on');
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
        switch(btnNumber){
          case 0:
            n = 8;
            break;
          case 1:
            n = 5;
            break;
          case 2:
            n = 6;
            break;
          case 3:
            n = 4;
            break;
          default:
            n = 7;
        }
        console.log('갤러리 리스트 개수', n);

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
        console.log('rows ', rows);
        winW = $(window).innerWidth();
        imgW = winW / cols;  //창너비 / 칸수
        imgH = imgW * 0.75;   //이미지너비 * 0.75
        galBoxH = imgH * rows;  //갤러리박스 전체 높이
        
        //갤러리박스 높이 지정
        galleryBoxUl.css({
          height : galBoxH
        })
        galleryBoxUlLi.css({
          width : imgW,
          height : imgH
        })

        //버튼번호에 따른 배열 값을 정리하고 반복처리
        switch(btnNumber){
          case 0:
            a=[0,1,2,3,4,5,6,7]; 
            break;
          case 1:
            a=[2,3,5,6,7];
            break;
          case 2:
            a=[0,1,3,4,6,7];
            break;
          case 3:
            a=[0,2,4,6];
            break;
          case 4:
            a=[0,1,3,4,5,6,7];  
            break;
        }

        //전체반복처리 마무리
        imgBox.removeClass('addZoom');
        let k = -1;
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            k++;
            galleryBoxUlLi.eq(a[k]).stop().animate({ top: imgH * i, left: imgW * j }, 300);
          }
        }
        for (let i = 0; i < a.length; i++) {
          imgBox.eq(a[i]).addClass('addZoom');
        }
      }//갤러리 함수 끝

      //3. 갤러리 버튼 클릭 이벤트
      galleryBtn.each(function(idx){
        $(this).on({
          click(e){
            e.preventDefault();
            galleryBtn.removeClass('on');
            $(this).addClass('on');
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