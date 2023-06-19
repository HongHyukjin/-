import React from 'react';
import {Link} from 'react-router-dom';

export default function HeaderCompponent() {
  return (
    <header id='header'>
      <div className="container">
        <a href="/home" className="logo"><img src="./img/logo.c33abdcc.png" />발자취</a>
        <div>
          <Link to="/notice" className="menutext">공지사항</Link>
          <a href="#!" className="item"><button>배달 같이하기</button></a>
          <Link to="/login" className="item">로그인</Link> |
          <Link to="/signup" className="item">회원가입</Link>
        </div>
      </div>
    </header>
  );
};

