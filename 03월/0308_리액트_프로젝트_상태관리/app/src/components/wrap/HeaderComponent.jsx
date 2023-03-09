import React from 'react';
import '../../scss/style_header.scss';

export default function HeaderComponent (){

  const onClickAddFruit = (e) => {
    e.preventDefault();
  }

  return (
    <header id="header">
      <button onClick={onClickAddFruit} type='button'>좋아하는 과일</button>
    </header>
  );
};

