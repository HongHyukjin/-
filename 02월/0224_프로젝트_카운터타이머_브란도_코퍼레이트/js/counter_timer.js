(function($, window, document){

  const counter_timer = {
    init(){
      this.main();
    },
    main(){
      const num = $('#sectionCounter .num');
      let countNum = [7823000, 9015000, 3614000, 1770000];
      let countSum = [0,0,0,0];
      let setId = 0;
      let cnt = 0;

      //천단위 마다 콤마형식으로 치환하기 Replace
      // 스트링(문자열).replace(정규표현식REGEXP, '그룹1, 그룹2')
      // 그룹은 소괄호 ()()
      // (^시작문자 숫자\d 1자이상) + (234 뒤에는 반드시 숫자 \d {3})
      // (^시작문자 숫자\d 1자이상) + (1,234)
      // (^시작문자 숫자\d 1자이상) + (156,234)
      // (^시작문자 숫자\d 1자이상) + (3,156,234)
      // const regexp = /(그룹1)(그룹2)/g
      // const regexp = /($1)($2)/g 달러사인이 그룹이름으로 지정한다.
      const regexp = /(^\d+)(\d{3})/g

      //1회 구현하기 1000000,000
      //콤마형식 반복문 사용 구현하기 1,000,000,000
      let number1 = 7823;
      let number2 = 823;
      let number3 = String(12345678);
      console.log(String(number1).replace(regexp, '$1,$2'));

      //반복문 활용
      //정규표현식 참 거짓 이걸 확인 테스트
      //정규표현식.test('문자열')
      //regexp.test('String(number)')
      console.log(regexp.test(String(number1)));
      console.log(regexp.test(String(number2)));

      function commaFn(value){
        number3 = String(value);
        while(regexp.test(number3)){
          number3 = number3.replace(regexp, '$1,$2');
          console.log(number3);
        }
        //화일문 끝나면 리턴값을 되돌려보내라
        return number3
      }
        
      


      function countFn(){
        cnt++;  //1~1000
        if(cnt > 1000){
          clearInterval(setId);
        }
        for(let i=0; i<=3; i++){
          countSum[i] += (countNum[i] / 1000);
          // num.eq(i).html(String(Math.round(countSum[i])).replace(regexp, '$1,$2')  );
          num.eq(i).html(commaFn(Math.round(countSum[i])));
        }
      }

      setId = setInterval(countFn, 10);


    }
  }
  counter_timer.init();

})(jQuery, window, document);