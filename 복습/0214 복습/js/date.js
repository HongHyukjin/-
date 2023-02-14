const arr = ['일', '월', '화', '수', '목', '금', '토'];

let newDate = new Date();
console.log(`표준시 ${newDate}`);
console.log(`년 newDate.getFullYear() ${newDate.getFullYear()}년`);
console.log(`월 newDate.getMonth() ${newDate.getMonth()+1}월`);
console.log(`일 newDate.getDate() ${newDate.getDate()}일`);
console.log(`요일 newDate.getDay() ${arr[newDate.getDay()]}요일`);

//0000-00-00
console.log(`${newDate.getFullYear()}-${newDate.getMonth()+1<10? `0${newDate.getMonth()+1}` : newDate.getMonth()+1}-${newDate.getDate()}`);

console.log(`${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`);

//3개월 더하기
newDate = new Date();
console.log('셋팅 이전 월', newDate.getMonth()+1);
newDate.setMonth(newDate.getMonth()+3);
console.log('셋팅 이후 월', newDate.getMonth()+1);

//10일 더하기
newDate = new Date();
console.log('셋팅 이전 월', newDate.getDate());
newDate.setDate(newDate.getDate()+10);
console.log('셋팅 이후 월', newDate.getDate());


setInterval(function(){
  newDate = new Date();
  console.log(`${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`);
}, 1000)