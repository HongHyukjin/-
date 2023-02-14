let arr = [];
arr = ['일', '월', '화', '수', '목', '금', '토'];

//날짜
// const newDate = new Date();
let newDate = new Date();
console.log(`표준시 ${newDate}`); //날짜 확인
console.log(`년 newDate.getFullYear()  ${newDate.getFullYear()}년`);  //년
console.log(`월 newDate.getMonth()     ${newDate.getMonth()+1}월`);  //월
console.log(`일 newDate.getDate()      ${newDate.getDate()}일`);  //일
console.log(`요일 newDate.getDay()     ${arr[newDate.getDay()]}요일`);  //요일

//0000-00-00
console.log(`${newDate.getFullYear()}-${newDate.getMonth()+1 < 10 ? `0${newDate.getMonth()+1}` : newDate.getMonth()+1}-${newDate.getDate()}`)
//조건문
//if(){}
//삼항연산자
//조건식(1항) ? 참(2항) : 거짓(2항);
newDate.getMonth()+1 < 10 ? `0${newDate.getMonth()+1}` : newDate.getMonth()+1

//시간
console.log(newDate.getHours()); //시
console.log(newDate.getMinutes()); //분
console.log(newDate.getSeconds()); //초

//00:00:00
console.log(`${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`);

//게터 getter : 날짜와 시간 가져오기
//세터 setter : 날짜와 시간 변경하기

//현재 년도에 1년을 더한다. setFullYear(현재년도 + 1);
//setFullYear(newDate.getFullYear() + 1);
//setMonth(newDate.getMonth() + 1);
//setDay(newDate.getDate() + 1);
//setHours(newDate.getHours() + 1);

newDate.setFullYear(newDate.getFullYear() + 1);
//설정된 년도 확인하기
console.log(newDate.getFullYear());

//날짜를 표준시로 반환
console.log(newDate.toUTCString());

//3개월 더하기
newDate = new Date();

console.log('셋팅 이전 월', newDate.getMonth());
newDate.setMonth(newDate.getMonth() + 3);
console.log('셋팅 이후 월', newDate.getMonth());

//7일 더하기
newDate = new Date();

console.log('셋팅 이전 일', newDate.getDate());
newDate.setDate(newDate.getDate() + 7);
console.log('셋팅 이후 일', newDate.getDate());

//10시간 더하기
newDate = new Date();

console.log('셋팅 이전 시', newDate.getHours());
newDate.setHours(newDate.getHours() + 10);
console.log('셋팅 이후 시', newDate.getHours());
console.log(newDate.toUTCString());

//현재 시 분 초 띄우기
//1초단위로 현재 날짜 객체를 가져오기
//자동타이머
setInterval(function(){
  newDate = new Date();
  console.log(`${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`);
}, 1000);  //1초 간격으로 계속 실행