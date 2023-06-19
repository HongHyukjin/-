import React from 'react';
import {Link} from 'react-router-dom';

export default function LoginComponent () {
  return (
    <div id='login'>
      <div className="container">
        <Link to='/' className='logo'>
          <img src="./img/logo.c33abdcc.png" alt="" />
          발자취
        </Link>
        <form name='login' id='login' method='post' action="">
          <div className="Div">
            <div>
              <input name='user_name' id='user_name' type="text" placeholder='닉네임'/>
            </div>
            <div>
              <input name='user_pw' id='user_pw' type="text" placeholder='비밀번호'/>
            </div>
            <button type='submit'>로그인</button>
          </div>
        </form>
        <div className="Div2">
          <Link to='/' className='link'>아이디 찾기</Link>
          |
          <Link to='/' className='link'>비밀번호 찾기</Link>
          |
          <Link to='/' className='link'>회원가입</Link>
        </div>
      </div>
    </div>
  );
};

