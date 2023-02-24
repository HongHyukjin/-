
(function($, window, document){

  const personal = {
    init(){
      this.wrap();
      this.header();
      this.section1();
      this.section4();
      this.section8();
    },

    wrap(){
      //section2 : 500
      //section3 : 1300
      //section5 : 2100
      //section6 : 3000
      //section8 : 4000
      //section9 : 6200
      //section10 : 7200

      let scrollTop = 0;
      $(window).scroll(function(e){
        scrollTop = $(window).scrollTop();
        // console.log(scrollTop);
        if(scrollTop < 500){
          $('.main-btn').removeClass('on');
        }
        if(500 <= scrollTop && scrollTop < 1300){
          $('.main-btn').removeClass('on');
          $('header').find('.n1').addClass('on');
        }
        if(1300 <= scrollTop && scrollTop < 2100){
          $('.main-btn').removeClass('on');
          $('header').find('.n2').addClass('on');
        }
        if(2100 <= scrollTop && scrollTop < 3000){
          $('.main-btn').removeClass('on');
          $('header').find('.n3').addClass('on');
        }
        if(3000 <= scrollTop && scrollTop < 4000){
          $('.main-btn').removeClass('on');
          $('header').find('.n4').addClass('on');
        }
        if(4000 <= scrollTop && scrollTop < 6200){
          $('.main-btn').removeClass('on');
          $('header').find('.n5').addClass('on');
        }
        if(6200 <= scrollTop && scrollTop < 7200){
          $('.main-btn').removeClass('on');
          $('header').find('.n6').addClass('on');
        }
        if(7200 <= scrollTop){
          $('.main-btn').removeClass('on');
          $('header').find('.n7').addClass('on');
        }
      });
    },

    header(){
      $('.main-btn').on({
        click(){
          let pos = $(this).attr('href');
          $('html, body').animate({scrollTop : $(pos).offset().top},500);
          $('.main-btn').removeClass('on');          
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
          pageNation();
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
          autoTimer();
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

      function pageNation(){
        $('.page-btn').removeClass('on');
        $('.page-btn').eq(cnt).addClass('on');
      }

      // $('.page-btn').eq(0).on({
      //   click(e){
      //     e.preventDefault();
      //     clearInterval(setId);
      //     cnt = 0;
      //     mainSlide();
      //   }        
      // })
      // $('.page-btn').eq(1).on({
      //   click(e){
      //     e.preventDefault();
      //     clearInterval(setId);
      //     cnt = 1;
      //     mainSlide();
      //   }        
      // })
      // $('.page-btn').eq(2).on({
      //   click(e){
      //     e.preventDefault();
      //     clearInterval(setId);
      //     cnt = 2;
      //     mainSlide();
      //   }        
      // })

        $('.page-btn').each(function(idx){
          $(this).on({
            click(e){
              e.preventDefault();
              clearInterval(setId);
              cnt = idx;
              mainSlide();
              autoTimer();
            }
          })
        })


    },

    section4(){
      const num = $('#section4 .num');
      let countNum = [2530, 3200, 2830, 1035];
      let countSum = [0,0,0,0];

      let setId = 0;
      let cnt = 0;


      function countFn(){
        cnt++;  //1~1000
        if(cnt > 1000){
          clearInterval(setId);
        }

        for(let i=0; i<=countNum.length; i++){
          countSum[i] += (countNum[i] / 1000);
          num.eq(i).html(Math.round(countSum[i]));
        }
      }

      setId = setInterval(countFn, 10);

    },

    section8(){
      const galleryBtn = $('#section8 .txt_btn');
      const imgBox = $('#section8 .img-box');

      const ul = $('.response_ul');
      const li = $('.response_ul li');

      let n = li.length;
      let l = 0;
      let r = 0;
      let cols = 2; //기본 2칸
      let boxW = ul.width();
      let imgW = (boxW - 44) / 2;
      let arr = [1,0,0,1,1,0,0,1,0,0];
      let l_imgH = imgW * 1.032707;
      let s_imgH = imgW * 0.707255756;
      let leftBoxH = 0;
      let rightBoxH = 0;
      let boxH = 0;

      let btnNumber = 0;
      let a = [];
      let b = [];

      galleryFn();
      galleryBtn.removeClass('on');
      galleryBtn.eq(btnNumber).addClass('on');


      $(window).resize(function(e){
        galleryFn();
      }) 

      function galleryFn(){
        console.log('버튼 번호', btnNumber);
        switch(btnNumber){
          case 0:
            n = 10;
            l = 5;
            r = 5;
            a = [1,3,5,7,9];
            b = [2,4,6,8,10];
            break;
          case 1:
            n = 6;
            l = 3;
            r = 3;
            a = [2,6,9];
            b = [3,7,10];
            break;
          case 2:
            n = 6;
            l = 3;
            r = 3;
            break;
          case 3:
            n = 8;
            l = 4;
            r = 4;
            break;
          case 4:
            n = 5;
            l = 3;
            r = 2;
            break;
        }
        console.log('갤러리 리스트 개수', n,l,r);

        if($(window).innerWidth() >= 770){
          cols = 2;
        }
        else{
          cols = 1;
        }


        boxW = ul.width();
        imgW = (boxW - 44) / 2;
        l_imgH = imgW * 1.032707;
        s_imgH = imgW * 0.707255756;
        leftBoxH = 0;
        rightBoxH = 0;

        li.each(function(idx){
          let h = arr[idx]===1 ? l_imgH : s_imgH;
          li.eq(idx).css({
            width : imgW,
            height : h
          })
        })

        if(cols === 2){
          li.eq(0).stop().animate({top:leftBoxH,left:imgW*0})
          li.eq(1).stop().animate({top:rightBoxH,left:imgW*1})
          leftBoxH += l_imgH;
          rightBoxH += s_imgH;
          li.eq(2).stop().animate({top:leftBoxH,left:imgW*0})
          li.eq(3).stop().animate({top:rightBoxH,left:imgW*1})
          leftBoxH += s_imgH;
          rightBoxH += l_imgH;
          li.eq(4).stop().animate({top:leftBoxH,left:imgW*0})
          li.eq(5).stop().animate({top:rightBoxH,left:imgW*1})
          leftBoxH += l_imgH;
          rightBoxH += s_imgH;
          li.eq(6).stop().animate({top:leftBoxH,left:imgW*0})
          li.eq(7).stop().animate({top:rightBoxH,left:imgW*1})
          leftBoxH += s_imgH;
          rightBoxH += l_imgH;
          li.eq(8).stop().animate({top:leftBoxH,left:imgW*0})
          li.eq(9).stop().animate({top:rightBoxH,left:imgW*1})
          leftBoxH += s_imgH;
          rightBoxH += s_imgH;
          boxH = leftBoxH > rightBoxH ? leftBoxH : rightBoxH;
          ul.css({
            height : boxH
          })
        }
        if(cols === 1){
          li.eq(0).stop().animate({top:leftBoxH,left:imgW*0})
          li.eq(1).stop().animate({top:rightBoxH,left:imgW*1})
          leftBoxH += l_imgH;
          rightBoxH += s_imgH;
          li.eq(2).stop().animate({top:leftBoxH,left:imgW*0})
          li.eq(3).stop().animate({top:rightBoxH,left:imgW*1})
          leftBoxH += s_imgH;
          rightBoxH += l_imgH;
          li.eq(4).stop().animate({top:leftBoxH,left:imgW*0})
          li.eq(5).stop().animate({top:rightBoxH,left:imgW*1})
          leftBoxH += l_imgH;
          rightBoxH += s_imgH;
          li.eq(6).stop().animate({top:leftBoxH,left:imgW*0})
          li.eq(7).stop().animate({top:rightBoxH,left:imgW*1})
          leftBoxH += s_imgH;
          rightBoxH += l_imgH;
          li.eq(8).stop().animate({top:leftBoxH,left:imgW*0})
          li.eq(9).stop().animate({top:rightBoxH,left:imgW*1})
          leftBoxH += s_imgH;
          rightBoxH += s_imgH;
          boxH = leftBoxH > rightBoxH ? leftBoxH : rightBoxH;
          ul.css({
            height : boxH
          })
        }

      }

      galleryBtn.each(function(idx){
        $(this).on({
          click(e){
            e.preventDefault();
            galleryBtn.removeClass('on');
            $(this).addClass('on');
            btnNumber = idx;
            galleryFn();
          }
        })
      })

    }

  }
  personal.init();

})(jQuery, window, document);
