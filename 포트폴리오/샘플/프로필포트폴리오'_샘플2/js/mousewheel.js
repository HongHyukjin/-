jQuery(function(){
	
	var wheelDelta = 0; //휠 이벤트 발생시 반환값을 확인 변수
	var browser = 0;	//파이어폭스 브라우저 판별 변수 BOM
	
	
	
	
	//섹션9개 클래스요소를 배열처리 방법2
	//마우스휠을 아래로 한번이상 wheel이벤트가 발생하면
	//다음(next()) 섹션으로 스크롤 이벤트가 부드럽게 발생(스무스 스크롤이벤트)
	//마우스 휠을 위로(120)한번이상 휠이벤트가 발생하면
	//이전(prev()) 섹션으로 스크롤이벤트가 부드럽게 발생(스무스 스크롤이벤트)
	//Browser[event - mouseWheel] : 크롬,익스프롤러,사파리,오페라등... 
	//Browser[event - DOMMouseScroll] : 파이어폭스 제외
	//									  delta값: 아래로 내려가는게 (+30) 위로올라가는게 (-30)이며 다른브라우저와 반대로 수행
	//파이어폭스 브라우저판별 해야한다. => window.navigator.userAgent 윈도우를 판별하겠다 사용자가 사용하고있는브라우저
	
	
	
	
	
	
	$('.section').each(function(index){  //0 1 2 ....8 (9개섹션) 
		$(this).on('mousewheel DOMMouseScroll', function(event){  
			event.preventDefault();
			
			
			
			//크로스 브라우징 파이어폭스 마우스휠이벤트 DOMMouseScroll
			
				//사용자가 사용중인 브라우저 종류 
				//소문자 변환 통일 toLowerCase() / toUpperCase()
				//.indexOf('chrome') 있으면 (숫자)번째에 글자가있다 , 없으면 -1
					browser = window.navigator.userAgent.toLowerCase().indexOf('firefox'); 
					
				// console.log( browser );
					if( browser>=0 ){ 	//파이어폭스를 찾으면 browser>=0:긍정문 /  browser!=-1:부정문
						
						//파이어폭스의 휠 델타 값(기본값 아래:3, 위:-3)
						//(변환) 기본값 아래:120, 위:-120
						wheelDelta = -event.detail*40; 
						// console.log(browser);
					}
					else{  //그밖의 모든브라우저 크롬,익스프롤러,사파리,오페라등... 
						
						
						// console.log( event ); // console.log(event)로 확인했을때의 originalEvent. wheelDelta값 불러서 이벤트실행
						wheelDelta = event.originalEvent.wheelDelta/120; //방향을 알수있다. 위+120 아래 -120			
						// console.log( wheelDelta ); // delta값 확인
			
						
					}
						console.log( wheelDelta );
				
				


			if( wheelDelta < 0 ){     	//아래로 섹션 다음(next())으로 이동 -120
				if( index < $('.section').length-1 ){   	//더이상 내려가지 못하게 (오류메세지 해결) // $('.section').length = 8 (올자동화 방법)					
					$('html,body').stop().animate({scrollTop: jQuery('.section').eq(index).next().offset().top },500); // 7(마지막전 섹션)을 만들기위해서 ($('.section').length-1=8) 미만* 
				} // jQuery('.section').eq(index) -> 로 해줄경우 header main 상관없이 밑으로 계속 내려갈수있음
			}
			else {   //위로 섹션 이전(prev())으로 이동 120
				if( index > 0 ){  
					$('html,body').stop().animate({scrollTop: jQuery('.section').eq(index).prev().offset().top },500);				
				}
			}
			
			
			//console.log( wheelDelta );
		});
	});
	
	
});//mouseWheel.js




	/*
	//<섹션9개 클래스요소를 배열처리 방법1>
	$('.section').each(function(index){
		$(this).on({
			mousewheel: function(event){
				event.preventDefault();
			
				delta = event.originalEvent.wheelDelta/120;
				console.log(delta);
				
			}
		});			
	});
	
	
	
	//<섹션9개 클래스요소를 배열처리 방법2>
	$('.section').each(function(index){
		$(this).on('mouseWheel', function(event){
			event.preventDefault();
			
			delta = event.originalEvent.wheelDelta/120;
			
			
			console.log(delta);
		});
	});	
	*/
	