import React from 'react';
import {Link} from 'react-router-dom';

export default function HeaderCompponent() {

  const token = sessionStorage.getItem('token');

  return (
    <header id='header'>
      <div className="container">
        <Link to="/home" className="logo"><img src="./img/logo.c33abdcc.png" />발자취</Link>
        <div>
          <Link to="/notice" className="menutext">공지사항</Link>
          <Link to="/postlist" className="item"><button>배달 같이하기</button></Link>
          <Link to="/login" className="item">로그인</Link> |
          <Link to="/signup" className="item">회원가입</Link>
        </div>
      </div>
    </header>
  );
};

