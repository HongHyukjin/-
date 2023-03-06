import React from 'react';
import '../../css/style_header.css'

export default function HeaderComponent ({전화번호, 이름, cnt, cnt1, onClickCount, onClickPhone, modalOpenFn}) {

  const clickCount = (e) => {
    e.preventDefault();
    // alert('cnt 증가');
    onClickCount();
  }

  const onClickModalOpen = (e) => {
    e.preventDefault();
    modalOpenFn();
  }

  return (
    <header id="header">
      <hr />
      <h1>HeaderComponent</h1>
      <h1>{이름}</h1>
      <h1>수동 증가 {cnt}</h1>
      <h1>자동 증가 {cnt1}</h1>
      <h1 onClick={onClickPhone}>{전화번호}</h1>
      <button onClick={clickCount}>cnt 증가</button>
      <button onClick={onClickModalOpen}>모달창 생성</button>
    </header>
  );
};

