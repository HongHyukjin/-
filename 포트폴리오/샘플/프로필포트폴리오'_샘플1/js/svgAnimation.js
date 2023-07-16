$(function(){
	var svgPath = $('.pathAni').find('path');
	var objLength = [];
	var setId1 ='';
	
	autoPlay();
	setInterval(autoPlay, 7000);
	
	function autoPlay(){
		$(svgPath).each(function(index, obj){
			objLength[index] = obj.getTotalLength();
			
			// console.log(objLength);
			
			obj.style.strokeDasharray = objLength[index];
			obj.style.strokeDashoffset = objLength[index];
			
			$(obj).stop().animate({strokeDashoffset : 0}, 4000, function(){
				$(obj).stop().animate({strokeDashoffset : -objLength[index] }, 3000)
			});
		});
	}
	
	


});//svgAnimation.js