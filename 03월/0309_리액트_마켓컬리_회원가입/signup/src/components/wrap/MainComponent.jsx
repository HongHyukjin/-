import React, { Component } from 'react';
import '../../scss/main.scss'

class MainComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      id : '',
      pw : '',
      pw2 : '',
      name : '',
      email : '',
      hp : ''
    }
  }

  onChangeId = (e) => {
    this.setState({
      id : e.target.value
    })
  }

  onChangePw = (e) => {
    this.setState({
      pw : e.target.value
    })
  }

  onChangePw2 = (e) => {
    this.setState({
      pw2 : e.target.value
    })
  }

  onChangeName = (e) => {
    this.setState({
      name : e.target.value
    })
  }

  onChangeEmail = (e) => {
    this.setState({
      email : e.target.value
    })
  }

  onChangeHp = (e) => {
    this.setState({
      hp : e.target.value
    })
  }

  render() {
    return (
      <main id="main">
        <section id="signup">
          <div className="container">
            <div className="title">
              <h1>회원가입</h1>
            </div>
            <div className="content">
              <form name='signUp' id='signUp' method='post' action="signup.php">
                <ul>
                  <li>
                    <span>아이디*</span>
                    <input onChange={this.onChangeId} name='user_id' id='user_id' type="text" placeholder='아이디를 입력해주세요'/>
                    <button>중복확인</button>
                  </li>
                  <li>
                    <span>비밀번호*</span>
                    <input onChange={this.onChangePw} name='user_pw' id='user_pw' type="password" placeholder='비밀번호를 입력해주세요'/>
                  </li>
                  <li>
                    <span>비밀번호확인*</span>
                    <input onChange={this.onChangePw2} name='user_pw2' id='user_pw2' type="password" placeholder='비밀번호를 한번 더 입력해주세요'/>
                  </li>
                  <li>
                    <span>이름*</span>
                    <input onChange={this.onChangeName} name='user_name' id='user_name' type="text" placeholder='이름을 입력해주세요'/>
                  </li>
                  <li>
                    <span>이메일*</span>
                    <input onChange={this.onChangeEmail} name='user_mail' id='user_mail' type="text" placeholder='예:marketkurly@kurly.com'/>
                    <button>중복확인</button>
                  </li>
                  <li>
                    <span>휴대폰*</span>
                    <input onChange={this.onChangeHp} name='user_hp' id='user_hp' type="text" placeholder='숫자만 입력해주세요'/>
                    <button>인증번호 받기</button>
                  </li>
                  <li>
                    <span>주소*</span>
                    <button>주소 검색</button>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default MainComponent;