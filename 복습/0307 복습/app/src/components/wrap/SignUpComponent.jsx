import React,{useState} from 'react';
import '../../css/signup.css'
import ModalComponent from './sign_up/ModalComponent';

export default function SignUpComponent(){

  const [state, setState] = useState({
    isModal : true
  })

  return (
    <div id='signUp'>
      <div className="title">
        <h1>회원가입폼</h1>
      </div>
      <div className="content">
        <form name='sign_up' id='signUp' method='post' action="./sign_up.php">
          <ul>
            <li>
              <div>
                <input type="text" name='id' id='id' placeholder='아이디 입력' />
              </div>
            </li>
            <li>
              <div>
                <input type="password" name='password' id='password' placeholder='비밀번호 입력' />
              </div>
            </li>
            <li>
              <div>
                <input type="text" name='name' id='name' placeholder='이름 입력' />
              </div>
            </li>
            <li>
              <div>
                <input type="text" name='hp' id='hp' placeholder='전화번호 입력' />
                <button type='button'>인증번호 받기</button>
              </div>
            </li>
            <li>
              <div>
                <input type="text" name='cn' id='cn' placeholder='인증번호 입력' />
                <button type='button'>인증번호 확인</button>
              </div>
            </li>
          </ul>
        </form>
      </div>
      {
        state.isModal && <ModalComponent />
      }
    </div>
  );
};

