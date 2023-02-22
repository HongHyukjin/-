
(function($){

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
      let cnt1 = 0;
      let cnt2 = 0;
      let cnt3 = 0;
      let cnt4 = 0;

      let setId1 = setInterval(function(){
        cnt1+=10;
        if(cnt1 > 2530){
          cnt1 = 2530;
          clearInterval(setId1);
        }
        $('.cnt1').html(cnt1);
      }, 59.29);  //4.743

      let setId2 = setInterval(function(){
        cnt2+=10;
        if(cnt2 > 3200){
          cnt2 = 3200;
          clearInterval(setId2);
        }
        $('.cnt2').html(cnt2);
      }, 46.88);  //3.750

      let setId3 = setInterval(function(){
        cnt3+=10;
        if(cnt3 > 2830){
          cnt3 = 2830;
          clearInterval(setId3);
        }
        $('.cnt3').html(cnt3);
      }, 53);  //4.240

      let setId4 = setInterval(function(){
        cnt4+=10;
        if(cnt4 > 1035){
          cnt4 = 1035;
          clearInterval(setId4);
        }
        $('.cnt4').html(cnt4);
      }, 145.94); //11.594

    },

    section8(){
      $('.a_1,.a_2,.a_3,.a_4,.a_5').on({
        click(e){
          e.preventDefault();
          $('.a_1,.a_2,.a_3,.a_4,.a_5').removeClass('on')
          $(this).addClass('on');
        }
      });

      $('.a_1').on({
        click(e){
          $('.response_ul').css({
            "height" : "1838.22px"
          });
          $('.img_1').css({
            "display" : "block",
            "top" : "0",
            "left" : "0"
          });
          $('.img_2').css({
            "display" : "block",
            "top" : "0",
            "left" : "50%"
          });
          $('.img_3').css({
            "display" : "block",
            "top" : "448.25px",
            "left" : "0"
          });
          $('.img_4').css({
            "display" : "block",
            "top" : "313.906px",
            "left" : "50%"
          });
          $('.img_5').css({
            "display" : "block",
            "top" : "762.156px",
            "left" : "0"
          });
          $('.img_6').css({
            "display" : "block",
            "top" : "762.156px",
            "left" : "50%"
          });
          $('.img_7').css({
            "display" : "block",
            "top" : "1210.41px",
            "left" : "0"
          });
          $('.img_8').css({
            "display" : "block",
            "top" : "1076.06px",
            "left" : "50%"
          });
          $('.img_9').css({
            "display" : "block",
            "top" : "1524.31px",
            "left" : "0"
          });
          $('.img_10').css({
            "display" : "block",
            "top" : "1524.31px",
            "left" : "50%"
          });
        }
      })

      $('.a_2').on({
        click(e){
          $('.response_ul').css({
            "height" : "941.718px"
          })
          $('.img_1').css({
            "display" : "none"
          });
          $('.img_2').css({
            "display" : "block",
            "top" : "0",
            "left" : "0"
          });
          $('.img_3').css({
            "display" : "block",
            "top" : "0",
            "left" : "50%"
          });
          $('.img_4').css({
            "display" : "none"
          });
          $('.img_5').css({
            "display" : "none"
          });
          $('.img_6').css({
            "display" : "block",
            "top" : "313.906px",
            "left" : "0"
          });
          $('.img_7').css({
            "display" : "block",
            "top" : "313.906px",
            "left" : "50%"
          });
          $('.img_8').css({
            "display" : "none"
          });
          $('.img_9').css({
            "display" : "block",
            "top" : "627.812px",
            "left" : "0"
          });
          $('.img_10').css({
            "display" : "block",
            "top" : "627.812px",
            "left" : "50%"
          });
        }
      })

      $('.a_3').on({
        click(e){
          $('.response_ul').css({
            "height" : "1210.41px"
          })
          $('.img_1').css({
            "display" : "none"
          });
          $('.img_2').css({
            "display" : "block",
            "top" : "0",
            "left" : "0"
          });
          $('.img_3').css({
            "display" : "none",
          });
          $('.img_4').css({
            "display" : "block",
            "top" : "0",
            "left" : "50%"
          });
          $('.img_5').css({
            "display" : "block",
            "top" : "313.906px",
            "left" : "0"
          });
          $('.img_6').css({
            "display" : "block",
            "top" : "448.25px",
            "left" : "50%"
          });
          $('.img_7').css({
            "display" : "none",
          });
          $('.img_8').css({
            "display" : "block",
            "top" : "762.156px",
            "left" : "0"
          });
          $('.img_9').css({
            "display" : "none",
          });
          $('.img_10').css({
            "display" : "block",
            "top" : "762.156px",
            "left" : "50%"
          });
        }
      })

      $('.a_4').on({
        click(e){
          $('.response_ul').css({
            "height" : "1524.31px"
          })
          $('.img_1').css({
            "display" : "block",
            "top" : "0",
            "left" : "0"
          });
          $('.img_2').css({
            "display" : "none"
          });
          $('.img_3').css({
            "display" : "none"
          });
          $('.img_4').css({
            "display" : "block",
            "top" : "0",
            "left" : "50%"
          });
          $('.img_5').css({
            "display" : "block",
            "top" : "448.25px",
            "left" : "0"
          });
          $('.img_6').css({
            "display" : "block",
            "top" : "448.25px",
            "left" : "50%"
          });
          $('.img_7').css({
            "display" : "block",
            "top" : "896.5px",
            "left" : "0"
          });
          $('.img_8').css({
            "display" : "block",
            "top" : "762.156px",
            "left" : "50%"
          });
          $('.img_9').css({
            "display" : "block",
            "top" : "1210.41px",
            "left" : "0"
          });
          $('.img_10').css({
            "display" : "block",
            "top" : "1210.41px",
            "left" : "50%"
          });
        }
      })

      $('.a_5').on({
        click(e){
          $('.response_ul').css({
            "height" : "1076.06px"
          })
          $('.img_1').css({
            "display" : "block",
            "top" : "0",
            "left" : "0"
          });
          $('.img_2').css({
            "display" : "none"
          });
          $('.img_3').css({
            "display" : "block",
            "top" : "0",
            "left" : "50%"
          });
          $('.img_4').css({
            "display" : "none"
          });
          $('.img_5').css({
            "display" : "block",
            "top" : "313.906px",
            "left" : "50%"
          });
          $('.img_6').css({
            "display" : "none"
          });
          $('.img_7').css({
            "display" : "block",
            "top" : "448.25px",
            "left" : "0"
          });
          $('.img_8').css({
            "display" : "none"
          });
          $('.img_9').css({
            "display" : "none"
          });
          $('.img_10').css({
            "display" : "block",
            "top" : "762.156px",
            "left" : "0"
          });
        }
      })

    }

  }
  personal.init();

})(jQuery);
