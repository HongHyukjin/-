import React from 'react';
import HeaderCompponent from './HeaderCompponent';
import DaumPostcodeEmbed from 'react-daum-postcode';

export default function SignupComponent() {

  const [state,setState] = React.useState({
    닉네임 : '',
    이메일 : '',
    이메일도메인 : '',
    비밀번호 : '',
    비밀번호확인 : '',
    지역 : '',
    isOpenPost : false
  })

  const onChangeNick = (e) => {
    const {value} = e.target;
    setState({
      ...state,
      닉네임 : value
    })
  }

  const onChangeEmail = (e) => {
    const {value} = e.target;
    setState({
      ...state,
      이메일 : value
    })
  }

  const onChangeEmailDomain = (e) => {
    const {value} = e.target;
    setState({
      ...state,
      이메일도메인 : value
    })
  }

  const onChangePw = (e) => {
    const {value} = e.target;
    setState({
      ...state,
      비밀번호 : value
    })
  }

  const onChangeAddr = (e) => {
    const {value} = e.target;
    setState({
      ...state,
      지역 : value
    })
  }

  const onClickAddrPopupOpenApi=(e)=>{
      e.preventDefault();
      setState({
        ...state,
        isOpenPost : true
      })
  }

  const postCodeStyle = {
    display: 'block',
    position: 'absolute',
    'z-index' : 2,
    top: '0%',
    width: '400px',
    height: '400px',
    padding: '7px',
  };
  

  return (
    <>
      <header id='header'>
        <div className="container">
          <a href="/home" className="logo"><img src="./img/logo.c33abdcc.png" />발자취</a>
        </div>
      </header>
      <div id='signup'>
        <div className="container">
          <div className="title">
            <h3>회원가입</h3>
          </div>
          <div className="content">
            <form action="" name='signup' id='signup' method='post'>
              <div className="inputDiv">
                <label htmlFor="">닉네임</label>
                <input className='input' onChange={onChangeNick} name='user_nick' id='user_nick' type="text" placeholder='별명 (2~8자)' autoComplete='off' />
              </div>
              <div className="inputDiv">
                <label htmlFor="">이메일</label>
                <div className="emailGroup">
                  <span>
                    <input className='emailItem1 input' onChange={onChangeEmail} type="text" autoComplete='off' placeholder='아이디' />
                  </span>
                  <span className='emailItem2'>@</span>
                  <span>
                    <select className='emailItem3' onChange={onChangeEmailDomain} name="domain" id="userId">
                      <option value selected='selected'>----- 선택 -----</option>
                      <option value="naver.com">naver.com</option>
                      <option value="gmail.com">gmail.com</option>
                      <option value="직접입력">직접입력</option>
                    </select>
                  </span>
                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor="">비밀번호</label>
                <input className='input' onChange={onChangePw} name='user_pw' id='user_pw' type="password" placeholder='비밀번호 (영어, 숫자, 특수문자 포함 8~20자)' autoComplete='off' />
              </div>
              <div className="inputDiv">
                <label htmlFor="">비밀번호 확인</label>
                <input className='input' name='user_pw2' id='user_pw2' type="password" placeholder='비밀번호 재입력' autoComplete='off' />
              </div>
              <div className="inputDiv">
                <label htmlFor="">지역설정</label>
                <input className='input' onChange={onChangeAddr} name='user_area' id='user_area' type="text" readOnly placeholder='지역명(ex. 성북구 정릉동)' />
                <button type='button' className='btn' onClick={onClickAddrPopupOpenApi}>지역검색</button>
              </div>
              <div className="inputDiv">
                <label htmlFor="">개인정보 수집 및 이용 안내</label>
                <div className='textBox'>
                  <small>
                    <b>개인정보 수집·이용 안내</b>
                  </small>
                  <small>
                    <br />
                    발자취 서비스에서는 아래와 같이 개인정보를 수집 및 이용합니다.
                  </small>
                  <small>
                    <br />
                    - 개인정보 수집 목적: 회원관리
                  </small>
                  <small>
                    <br />
                    - 개인정보 수집 항목: 아이디, 비밀번호, 이메일
                  </small>
                  <small>
                    <br />
                    - 보유 및 이용기간: 회원 탈퇴시까지
                  </small>
                  <br /><br />
                  <div className="agreeBox">
                    <label htmlFor="agree">
                      <input name='agree' id='agree' type="checkbox" />
                      개인정보 수집 및 이용에 동의합니다.
                    </label>
                  </div>
                </div>
              </div>
              <button type='submit' className='submitBtn'>회원가입하기</button>
            </form>
          </div>
        </div>
      </div>
      {
        state.isOpenPost &&
          <DaumPostcodeEmbed style={postCodeStyle} />
      }
    </>
  );
};

