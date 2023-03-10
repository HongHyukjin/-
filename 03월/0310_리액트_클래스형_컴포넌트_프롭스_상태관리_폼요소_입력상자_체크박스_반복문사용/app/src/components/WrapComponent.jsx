import React, { Component } from 'react';
import '../scss/style_wrap.scss'

class WrapComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      userId : '',
      userPw : '',
      userPwOk : '',
      userName : '',
      userEmail : '',
      userHp : '',
      회원가입정보 : [],
      //체크박스 반복사용할 기초 데이터 배열
      과일 : ['딸기', '사과', '포도', '수박', '자몽'],
      //체크박스 사용 저장 배열
      좋아하는과일 : [], //체크된 과일 저장하는 배열
      취미 : ['산책', '독서', '게임', '영화', '운동'],
      좋아하는취미 : []
    }
  }

  onChangeUserId = (e) => {
    this.setState({
      userId : e.target.value
    })
  }

  onChangeUserPw = (e) => {
    this.setState({
      userPw : e.target.value
    })
  }

  onChangeUserPwOk = (e) => {
    this.setState({
      userPwOk : e.target.value
    })
  }

  onChangeUserName = (e) => {
    this.setState({
      userName : e.target.value
    })
  }

  onChangeUserEmail = (e) => {
    this.setState({
      userEmail : e.target.value
    })
  }

  onChangeUserHp = (e) => {
    this.setState({
      userHp : e.target.value
    })
  }

  //CHECKBOX EVENT/////////////////////////////////////////////////////////////
  //1. 체크박스 온체인지 이벤트
  //2. 상태관리 변수(속성) checked1 => VALUE 저장 TRUE OR FALSE
  //3. 조건문
  //4. 5개의 과일중 체크된 항목들 저장할 배열 선언 사용
  onChangeCheckEvent = (e) => {
    if(e.target.checked === true){
      this.setState({
        좋아하는과일 : [
          ...this.state.좋아하는과일,
          e.target.value
        ]
      })
    }
    else{
      this.setState({
        좋아하는과일 : this.state.좋아하는과일.filter((item) => item!==e.target.value)
      })
    }
  }


  onChangeCheckE = (e) => {
    if(e.target.checked === true){
      this.setState({
        좋아하는취미 : [
          ...this.state.좋아하는취미,
          e.target.value
        ]
      })
    }
    else{
      this.setState({
        좋아하는취미 : this.state.좋아하는취미.filter((item) => item!==e.target.value)
      })
    }
  }

  //저장하기 클릭 이벤트
  onClickSave = (e) => {
    e.preventDefault();
    this.setState({
      회원가입정보 : [
        ...this.state.회원가입정보,
        {
          userId : this.state.userId,
          userPw : this.state.userPw,
          userPwOk : this.state.userPwOk,
          userName : this.state.userName,
          userEmail : this.state.userEmail,
          userHp : this.state.userHp,
          좋아하는과일 : this.state.좋아하는과일,
          좋아하는취미 : this.state.좋아하는취미,
          가입일자 : `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
        }
      ],
      userId : '',
      userPw : '',
      userPwOk : '',
      userName : '',
      userEmail : '',
      userHp : ''
    })
  }

  render() {
    return (
      <div id='wrap'>
        <div className="container">
          <div className="title">
            <h1>회원가입</h1>
            <h3><i>*</i>필수입력사항</h3>
          </div>
          <div className="content">
            <form name='member_form' id='memberForm' method='post' action="./member_form.php">
              <ul>
                <li>
                  <div>
                    <label htmlFor="userId">아이디<i>*</i></label>
                    <input onChange={this.onChangeUserId} type="text" name='user_id' id='userId' placeholder='아이디를 입력해주세요' value={this.state.userId}/>
                    <button>중복확인</button>
                  </div>
                </li>
                <li>
                  <div>
                    <label htmlFor="userPw">비밀번호<i>*</i></label>
                    <input onChange={this.onChangeUserPw} type="text" name='user_pw' id='userPw' placeholder='비밀번호를 입력해주세요' value={this.state.userPw} />
                  </div>
                </li>
                <li>
                  <div>
                    <label htmlFor="userPwOk">비밀번호확인<i>*</i></label>
                    <input onChange={this.onChangeUserPwOk} type="text" name='user_pw_ok' id='userPwOk' placeholder='비밀번호를 한번 더 입력해주세요' value={this.state.userPwOk}/>
                  </div>
                </li>
                <li>
                  <div>
                    <label htmlFor="userName">이름<i>*</i></label>
                    <input onChange={this.onChangeUserName} type="text" name='user_name' id='userName' placeholder='이름을 입력해주세요' value={this.state.userName}/>
                  </div>
                </li>
                <li>
                  <div>
                    <label htmlFor="userEmail">이메일<i>*</i></label>
                    <input onChange={this.onChangeUserEmail} type="text" name='user_email' id='userEmail' placeholder='예: marketkurly@kurly.com' value={this.state.userEmail}/>
                    <button>중복확인</button>
                  </div>
                </li>
                <li>
                  <div>
                    <label htmlFor="userHp">휴대폰<i>*</i></label>
                    <input onChange={this.onChangeUserHp} type="text" name='user_hp' id='userHp' placeholder='숫자만 입력해주세요' value={this.state.userHp}/>
                    <button >인증번호 받기</button>
                  </div>
                </li>
                <li className='fruit'>
                  {
                    this.state.과일.map((item,idx) => {
                      return(
                        <label key={idx} htmlFor={`chk${idx}`}>
                          <input onChange={this.onChangeCheckEvent} type='checkbox' name={`chk${idx}`} id={`chk${idx}`} value={item} checked={this.state.좋아하는과일.includes(item)}/>{item}
                        </label>
                      )
                    })
                  }
                </li>
                <li className='hobby'>
                  {//jsx 스크립트는 semicolone 주의
                  // {/*템플릿 리터럴은 제일 먼저 양쪽에 중괄호를 한다.*/}
                  // {/* 중괄호안에 또 중괄호는 중괄호 앞에 달러사인을 표기한다. 그럼 변수로 인식된다. */}
                  // {/* 체크박스 이벤트는  */}
                    this.state.취미.map((item,idx) => {
                      return(
                          <label key={idx} htmlFor={`check${idx}`}>
                            <input onChange={this.onChangeCheckE} type="checkbox" name={`check${idx}`} id={`check${idx}`} value={item} checked={this.state.좋아하는취미.includes(item)}/>{item}
                          </label>      
                      )
                    })
                  }                  
                </li>
              </ul>
              <div className="btn-box">
                <button onClick={this.onClickSave}>저장</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default WrapComponent;