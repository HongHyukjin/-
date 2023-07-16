jQuery(function(){
	
	var winW = winH = S1W = h4Rat = 0;
		h4Rat =	40/1800;
	

	function section1ResizeFn(){
		winW = $(window).innerWidth();
		winH = $(window).innerHeight();
		
		S1W = $('#section1').innerWidth();
		h4Rat =	40/1800
		
		$('#section1>div>div>div>h2').css({ fontsize: h4Rat*S1W });
		
	}
	
	section1ResizeFn();
		setTimeout(section1ResizeFn,100);
	
	
	$(window).resize(function(){
		section1ResizeFn();
	});
	
	
});//section1.js