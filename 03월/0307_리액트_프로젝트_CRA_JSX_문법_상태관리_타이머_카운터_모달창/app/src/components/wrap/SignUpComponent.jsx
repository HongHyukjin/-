import React,{useEffect, useState} from 'react';
import ModalComponent from './sign_up/ModalComponent';
import '../../css/signup.css'

export default function SignupComponent ({isTimer, isTimerFn, timerClear, timerCounter, setId, seconds, minutes, timerMsg}){

  const [state, setState] = useState({
    isModal : false,
    modalMsg : '',
    hpOkNumber : 0,
    휴대폰번호 : '',
    휴대폰인증번호 : '',
    아이디 : '',
    이름 : '',
    비밀번호 : '',
    isUserHp : true,
    isUserHpOk : true,
    isTimer : false
  });

  //1. 아이디 입력상자 : 온 체인지 이벤트
  const onChangeUserId = (e) => {
    setState({
      ...state,
      아이디 : e.target.value
    })
  }

  //2. 비밀번호 입력상자
  const onChangeUserPw = (e) => {
    setState({
      ...state,
      비밀번호 : e.target.value
    })
  }

  //3. 이름 입력상자
  const onChangeUserName = (e) => {
    setState({
      ...state,
      이름 : e.target.value
    })
  }

  //4. 휴대폰번호 입력상자
  const onChangeUserHp = (e) => {
    let isUserHp = true;
    if(e.target.value.length >= 1){
      isUserHp = false;
    }
    else{
      isUserHp = true;
    }

    setState({
      ...state,
      휴대폰번호 : e.target.value,
      isUserHp : isUserHp
    })
  }

  //5. 휴대폰인증번호  입력상자
  const onChangeUserHpOk = (e) => {
    let isUserHpOk = true;
    if(e.target.value.length >= 1){
      isUserHpOk = false;
    }
    else{
      isUserHpOk = true;
    }
    setState({
      ...state,
      휴대폰인증번호 : e.target.value,
      isUserHpOk : isUserHpOk
    })
  }
  
  //6. 인증번호 받기
  //모달창열기 클릭이벤트
  const onClickHpOkNum = (e) => {
    e.preventDefault();
    let hpOkNumber = 0;

    //6자리의 랜덤(Random)한 번호를 만들자
    hpOkNumber = Math.floor((Math.random() * 9000000));

    setState({
      ...state,
      isModal : true,
      modalMsg : `휴대폰 인증번호가 전송되었습니다. ${hpOkNumber}`,
      hpOkNumber : hpOkNumber,
      isTimer : true    //모달창 닫기할때 true이면 타이머 동작 시작
    })

  }
  //모달창닫기 클릭이벤트 => 모달창에서 확인버튼 클릭하면 호출되어서 실행하는 이벤트
  const modalClose = () => {
    setState({
      ...state,
      isModal : false
    })
  }

  //인증번호 비교
  const onClickOkIf = (e) => {
    e.preventDefault();
    let modalMsg = ''
    //상태관리 인증번호와 휴대폰 인증번호 입력상자 입력된 인증번호를 비교
    if(state.hpOkNumber === Number(state.휴대폰인증번호)){
      modalMsg = '인증이 되었습니다.';
      //타이머 정지하기
      timerClear();
    }
    else{
      modalMsg = '인증번호를 확인하세요.';
    }
    setState({
      ...state,
      isModal : true,
      modalMsg : modalMsg
    })
  }


  return (
    <div id='signUp'>
      <div className="title">
        <h1>회원가입폼</h1>
      </div>
      <div className="content">
        <form name='sign_up' id='signUp' method='post' action='./sign_up.php'>
          <ul>
            <li>
              <div>
                <input onChange={onChangeUserId} type="text" name='user_id' id='userId' placeholder='아이디를 입력하세요'/>
              </div>
            </li>
            <li>
              <div>
                <input onChange={onChangeUserPw} type="password" name='user_pw' id='userPw' placeholder='비밀번호를 입력하세요'/>
              </div>
            </li>
            <li>
              <div>
                <input onChange={onChangeUserName} type="text" name='user_name' id='userName' placeholder='이름을 입력하세요'/>
              </div>
            </li>
            <li>
              <div>
                <input onChange={onChangeUserHp} type="text" name='user_hp' id='userHp' placeholder='휴대폰 번호 입력하세요'/>
                <button
                   onClick={onClickHpOkNum} 
                   type='button' 
                   disabled={state.isUserHp}  //버튼이 isUserHp 변수값이 false이면 사용가능
                   className = {state.isUserHp === false ? 'on' : ''}
                >인증번호 받기</button>
              </div>
            </li>
            <li>
              <div>
                <input onChange={onChangeUserHpOk} type="text" name='user_hpOk' id='userHpOk' placeholder='휴대폰 인증번호 입력하세요'/>
                <button 
                    onClick={onClickOkIf} 
                    type='button' 
                    disabled={state.isUserHpOk}
                    className = {state.isUserHpOk === false ? 'on' : ''}
                >인증번호 확인</button>
                <span>{`0${minutes}`} : {seconds<10?`0${seconds}`:seconds}</span>
              </div>
            </li>
          </ul>
        </form>
      </div>
        {
          state.isModal && <ModalComponent isTimerFn={isTimerFn} timerCounter={timerCounter} modalClose={modalClose} modalMsg={state.modalMsg} isTimer={state.isTimer}/>
        }
    </div>
  );
};
