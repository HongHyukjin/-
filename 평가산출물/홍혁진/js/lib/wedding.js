(function($){
    const wedding = {
        init(){
            this.header();
            this.section1();
            this.section2();
            this.section3();
        },
        header(){
            $('.mobile-btn').on({
                click(){
                  $(this).find('.line').toggleClass('on');
                }
            });
            $('.main-btn').on({
                click(){
                    let pos = $(this).attr('href'); //누른곳의 섹션번호 pos
                    $(html,body).animate({scrollTop : $(pos).offset().top},300);
                }
            })
        },
        section1(){

        },
        section2(){

        },
        section3(){

        }
    }
    wedding.init();

})(jQuery);