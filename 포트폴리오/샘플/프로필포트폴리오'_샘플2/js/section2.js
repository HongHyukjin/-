$(function(){

	var cnt = 0;
	
	var winW = $(window).innerWidth();
	var winH = $(window).innerHeight();
	var s2SlideW = winW*0.968606667;
	var s2SlideL = winW*0.65;	
	var imgW = winW*0.36;
	var slideBoxW = winW*0.009883741;
	
	
	function resizeFn(){
		winW = $(window).innerWidth();
		winH = $(window).innerHeight();
		s2SlideW = winW*0.968606667;	
		s2SlideL = winW*0.65;	
		imgW = winW*0.36;
		
		// $('#section1').css({height:winH});
		// $('#section1').css({width: (s2SlideW) });
		// $('#section2 .content-wrap').css({width: (s2SlideW*6),marginLeft:-s2SlideL });
		// $('#section2 .content-img-wrap').css({width: imgW });
		
		s2MainSlideFn(cnt);
	}
	
	setTimeout(resizeFn,100);
	
	$(window).resize(function(){
		resizeFn();
	});
	

	floatFn();
	
	function floatFn(){
		$('.content-portfolio').each(function(index){

			if( index%2 == 0){
				$(this).find('.content-img-wrap').css({float:'left'});
				$(this).find('.content-txt-wrap').css({float:'right', marginLeft:5+'%'});
			}
			else if( index%2 == 1){
				$(this).find('.content-img-wrap').css({float:'right'});
				$(this).find('.content-txt-wrap').css({float:'left', marginRight:5+'%'});
			}
			
		});
	}
	
	
	
	// autoPlayFn();
	function autoPlayFn(){
		setId = setInterval(s2nextContFn,5000);
	}
	
	
	
	function s2nextContFn(){
		
			cnt++;
			s2MainSlideFn();	
		
		
	}
	
	function s2prevContFn(){
		cnt--;
		s2MainSlideFn();
	}
	
	
	
	$('.nextBt').on({
		click: function(){
			s2nextContFn();
		}
	});
	
	$('.prevBt').on({
		click: function(){
			s2prevContFn();
		}
	});
	
	
	
	
	function s2MainSlideFn(){
		$('.content-wrap').stop().animate({left: -(99*cnt)+'%'},600, 'easeInQuad',function(){
			if( cnt>3 ){
				cnt=0;
			}
			if( cnt<0 ){
				cnt=3;
			}
			$('.content-wrap').stop().animate({left: -(99*cnt)+'%'},0);
		});
		

		
		
		
		
	}
	

	
	
});//section2.js