jQuery(function(){
	var _path = $('#svgPath').find('path');
	var objTotLen = [];
	
	
	svgPathFn();
	setInterval(svgPathFn,11000);
	
	function svgPathFn(){
		$.each(_path,function( index, obj ){
			// console.log( index,obj );
			
			objTotLen[index] = obj.getTotalLength();
			
			obj.style.strokeDasharray  = objTotLen[index];
			obj.style.strokeDashoffset = objTotLen[index];
			
			// console.log( objTotLen[index] );

			$(obj).stop().animate({strokeDashoffset:objTotLen[index]},0).animate({strokeDashoffset:0},7000, function(){
				$(this).stop().animate({strokeDashoffset:objTotLen[index]},3000);
			});
			
		});
	}
	
	
	//.animate({strokeDashoffset:objTotLen[index]},0) 문자길이 저장
	
});//svgPath.js