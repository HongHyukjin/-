(function popup(){ //함수안에서 사용되는 변수 지역(Local) 변수
  // window.open('웹파일.html', '창이름', '너비=500, 높이=600, x축좌표=0, y축좌표=0');
  const windowName = 'popup_20230215';
  const windowName2 = 'popup_20230216';
  const popupWidth = 530;  //변수에 값을 대입하면서 선언시는 const지정가능하다.
  const popupHeight = 570;
  console.log(popupWidth);
  console.log(popupHeight);
  const popupLeft = 0;
  const popupLeft2 = 100;
  const popupTop = 0;
  const popupTop2 = 200;
  window.open('./popup.html', windowName, `width=${popupWidth}, height=${popupHeight}, left=${popupLeft}, top=${popupTop}`);
  window.open('./popup2.html', windowName2, `width=${popupWidth}, height=${popupHeight}, left=${popupLeft2}, top=${popupTop2}`);
}); //즉시실행함수 곧바로 호출