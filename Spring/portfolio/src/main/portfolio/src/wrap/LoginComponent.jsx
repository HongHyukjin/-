import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

export default function LoginComponent () {

  const [state,setState] = React.useState({
    닉네임 : '',
    비밀번호 : ''
  })

  const onChangeNick = (e) => {
    const {value} = e.target;
    setState({
      ...state,
      닉네임 : value
    })
  }

  const onChangePw = (e) => {
    const {value} = e.target;
    setState({
      ...state,
      비밀번호 : value
    })
  }


  const onSubmitLogin = (e) => {
    e.preventDefault();
    const formData = {
      "nick" : state.닉네임,
      "pw" : state.비밀번호
    }

    $.ajax({
      url:'/login',
      type:'POST',
      data:JSON.stringify(formData),
      contentType:'application/json; charset=utf-8',
      success(res){
        console.log('AJAX 성공!')
        console.log(res);
        sessionStorage.setItem('token', res);
        alert('로그인 성공!');
        window.location.href="/";
      },
      error(err){
        console.log('AJAX 실패!', err);
      }
    })
  }

  return (
    <div id='login'>
      <div className="container">
        <Link to='/' className='logo'>
          <img src="./img/logo.c33abdcc.png" alt="" />
          발자취
        </Link>
        <form name='login' id='login' method='post' action="/home" onSubmit={onSubmitLogin}>
          <div className="Div">
            <div>
              <input name='user_name' onChange={onChangeNick} id='user_name' type="text" placeholder='닉네임'/>
            </div>
            <div>
              <input name='user_pw' onChange={onChangePw} id='user_pw' type="text" placeholder='비밀번호'/>
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

