let arr = [];
arr = ['일', '월', '화', '수', '목', '금', '토'];

//날짜
const newDate = new Date();
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
