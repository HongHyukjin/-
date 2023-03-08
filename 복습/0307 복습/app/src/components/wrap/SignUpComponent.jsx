import React,{useState} from 'react';
import '../../css/signup.css'
import ModalComponent from './sign_up/ModalComponent';

export default function SignUpComponent({timerCounter, minutes, seconds, setId}){

  const [state, setState] = useState({
    id : '',
    pw : '',
    name : '',
    phoneNum : '',
    cNum : 0,
    modalMsg : '',
    isModal : false,
    write : '',
    isTimer : false,
    timerShow : false
  })

  const onChangeId = (e) => {
    setState({
      ...state,
      id : e.target.value
    })
  }

  const onChangePw = (e) => {
    setState({
      ...state,
      pw : e.target.value
    })
  }

  const onChangeName = (e) => {
    setState({
      ...state,
      name : e.target.value
    })
  
  }
  const onChangePhoneNum = (e) => {
    setState({
      ...state,
      phoneNum : e.target.value
    })
  }

  const onClickModalOpen = (e) => {
    
    let cNum = 0;
    let modalMsg = ''
    cNum = Math.floor(Math.random() * 1000000)
    modalMsg = `전화번호로 인증번호가 전송되었습니다. ${cNum}`
    
    setState({
      ...state,
      cNum : cNum,
      modalMsg : modalMsg,
      isModal : true,
      isTimer : true,
      timerShow : true
    })
  }
  
  const onChangeWrite = (e) => {
    setState({
      ...state,
      write : e.target.value
    })
  }

  const onClickCompare = (e) => {
    e.preventDefault();
    let modalMsg = '';
    if(Number(state.write) === state.cNum){
      modalMsg = '인증 되었습니다';
      clearInterval(setId);
    }
    else{
      modalMsg = '인증번호를 확인해주세요'
    }
    setState({
      ...state,
      modalMsg : modalMsg,
      isModal : true,
      isTimer : false
    })
  }

  const modalCloseFn = () => {
    setState({
      ...state,
      isModal : false
    })
  }

  

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
                <input onChange={onChangeId} type="text" name='id' id='id' placeholder='아이디 입력' />
              </div>
            </li>
            <li>
              <div>
                <input onChange={onChangePw} type="password" name='password' id='password' placeholder='비밀번호 입력' />
              </div>
            </li>
            <li>
              <div>
                <input onChange={onChangeName} type="text" name='name' id='name' placeholder='이름 입력' />
              </div>
            </li>
            <li>
              <div>
                <input onChange={onChangePhoneNum} type="text" name='hp' id='hp' placeholder='전화번호 입력' />
                <button onClick={onClickModalOpen} type='button' className={state.phoneNum ? 'on' : ''}>인증번호 받기</button>
              </div>
            </li>
            <li>
              <div>
                <input onChange={onChangeWrite} type="text" name='cn' id='cn' placeholder='인증번호 입력' />
                <button onClick={onClickCompare} type='button' className={state.write ? 'on' : ''}>인증번호 확인</button>
                <span className={state.timerShow ? 'on' : ''}>{`0${minutes}`} : {seconds < 10 ? `0${seconds}` : seconds} </span>
              </div>
            </li>
          </ul>
        </form>
      </div>
      {
        state.isModal && <ModalComponent modalMsg={state.modalMsg} modalCloseFn={modalCloseFn} timerCounter={timerCounter} isTimer={state.isTimer} setId={setId}/>
      }
    </div>
  );
};

