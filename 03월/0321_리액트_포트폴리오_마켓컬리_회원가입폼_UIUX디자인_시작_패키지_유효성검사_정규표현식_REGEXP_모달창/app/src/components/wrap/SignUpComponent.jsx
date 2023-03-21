import React from 'react';
import axios from 'axios';

export default function SignUpComponent ({회원가입, timer}){

  const [state, setState] = React.useState(회원가입);
  const createRef = React.createRef();  //입력상자 태그요소 휴대폰을 선택함.(참조함)
  //let cnt = React.useRef(0);  //입력상자 태그요소 휴대폰을 선택함.(참조함)
  //useRef는 새로고침해야 증가값 보인다.
  //useRef는 새로고침해도 값이 유지된다.
  //state 상태변수는 새로고침하면 새로시작 초기화
  //state 상태변수는 변경되면 화면이 다시 그려진다. 마운트
  console.log(timer);
  console.log(timer.seconds);
  console.log(timer.minutes);

  const onClickConfirmModalClose = (e) => {
    e.preventDefault();
    // console.log(state.confirmMsg.includes('인증번호'));
    // console.log(state.confirmMsg.indexOf('인증번호'));
    // console.log(state.confirmMsg.search('인증번호'));

    if(state.confirmMsg.includes('인증번호')){
      //모달 닫기 그리고 함수 실행
      //타이머함수 호출 실행 
    }
    setState({
      ...state,
      isConfirmModal : false
    })
  }

  const onChangeUserId=(e)=>{
    // 입력제한 조건
    // 정규표현식 만들기
    // 1. 6자 이상 16자 이하
    // 2. 영문필수, 숫자 선택 => 1가지 이상 영문, 숫자 조합
    // 3. 특수문자 입력 안됨
    // 4. 한글입력은 가능한데 사용 안됨
    // 5. 공백사용 안됨
    const {value} = e.target
    const regExp1 = /[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/g;  //(특수문자) 
    const regExp2 = /.{6,16}/g;  //6자 이상 16자 이하
    const regExp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g; //한글
    const regExp4 = /[A-za-z]+[0-9]*/g; //영문 필수 1자 이상 + 숫자 선택 0자 이상 *
    const regExp5 = /\s/g;  //공백

    let 아이디 = '';
    let isIdError = false;
    let isIdMsg = '';

    //1) 문자열.replace(정규식, '');  특수문자를 공백으로 치환
    아이디 = value.replace(regExp1, '');
    // 테스트  정규식.test(문자열)
    //console.log(regExp1.test(value));   // 특수문자이면 true 반환 아니면 false

    //2) 정규식.test(문자열){6,16} 범위이면 true 아니면 false
    // if(regExp2.test(value)===false){
    //   // console.log('6자이상 16자이하로 입력해주세요');
    // }
    // else if(regExp2.test(value)===true){
    //   console.log('');
    // }

    //3) 정규식.test(문자열) 한글 사용하면 true 아니면 false
    // if(regExp3.test(value) === true){
      //console.log('영문필수, 숫자선택 1가지 이상 조합하여 사용됩니다. 한글은 사용 불가');
    // }
    // else{
      //console.log('');
    // }

    //4) 영문 필수 1자 이상 + 숫자 선택 0자 이상 *
    // if(regExp4.test(value) === false){
      // console.log('영문 필수 1자 이상, 숫자 선택 0자 이상 조합하여 사용됩니다');
    // }
    // else{
      // console.log('');
    // }

    //5) Error 조건 합치기
    if(regExp2.test(value)===false || regExp3.test(value)===true || regExp4.test(value)===false || regExp5.test(value)===true){
      isIdError = true;
      isIdMsg = '6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합';
    }
    else{
      isIdError = false;
      isIdMsg = '';
    }

    setState({
        ...state,
        아이디 : 아이디,
        isIdError : isIdError,
        isIdMsg : isIdMsg
    })
  }  

  const onClickUserIdOk = (e) => {
    e.preventDefault();
    const value = state.아이디 
    const regExp2 = /.{6,16}/g;  //6자 이상 16자 이하
    const regExp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g; //한글
    const regExp4 = /[A-za-z]+[0-9]*/g; //영문 필수 1자 이상 + 숫자 선택 0자 이상 *
    const regExp5 = /\s/g;  //공백

    if(regExp2.test(value)===false || regExp3.test(value)===true || regExp4.test(value)===false || regExp5.test(value)===true){
      setState({
        ...state,
        isConfirmModal : true,
        confirmMsg : '6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합'
      })
    }
    else{
      axios({
        url: 'http://gurwlszx.dothome.co.kr/signup_db/select.php',
        method:'GET',
      })
      .then((res)=>{
        const result = res.data.map((item) => item.아이디===value);
        if(result.includes(true)){
          setState({
            ...state,
            isIdOk : false,
            isConfirmModal : true,
            confirmMsg : '사용불가능한 아이디입니다.'
          })
        }
        else{
          setState({
            ...state,
            isIdOk : true,
            isConfirmModal : true,
            confirmMsg : '사용가능한 아이디입니다.'
          })
        }
      })
      .catch((err)=>{
        console.log(`AXIOS 실패! ${err}`);
      });
    }

  }

  const onChangeGender = (e) => {
    setState({
      ...state,
      성별 : e.target.value
    })
  }

  const onChangeUserPw1 = (e) => {
    const {value} = e.target;
    let isPwError = false;
    let isPwMsg = '';

    const regExp1 = /.{10,16}/g;
    const regExp2 = /([A-Za-z]+[0-9]+)+|([0-9]+[A-Za-z]+)+|([A-Za-z]+[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]+)+|([`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]+[A-Za-z]+)+|([0-9]+[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]+)+|([`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]+[0-9]+)+/g;
    const regExp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;
    const regExp4 = /\s/g;
    const regExp5 = /(\d)\1\1/g;;

    if(regExp1.test(value)===false){  //10~16글자 범위 밖이면
      isPwError = true;
      isPwMsg = '최소 10자 이상 입력';
    }
    else if(regExp2.test(value)===false || regExp3.test(value)===true || regExp4.test(value)===true){ //영문,숫자,특수문자의 조합이 잘못되고, 한글이 있고, 공백이 있다면
      isPwError = true;
      isPwMsg = '영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합';
    }
    else if(regExp5.test(value)===true){  //동일한 숫자가 3개 이상 연속된다면
      isPwError = true;
      isPwMsg = '동일한 숫자 3개 이상 연속 사용 불가';
    }
    else{
      isPwError = false;
      isPwMsg = '';
    }

    setState({
      ...state,
      isPwError : isPwError,
      isPwMsg : isPwMsg,
      비밀번호 : value
    })

  }

  const onChangeUserPw2 = (e) => {
    const {value} = e.target
    let isPw2Error = false;
    let isPw2Msg = '';
    if(value !== state.비밀번호){
      isPw2Error = true;
      isPw2Msg = '동일한 비밀번호를 입력';
    }
    else if(value===' '){
      isPw2Error = true;
      isPw2Msg = '비밀번호를 한번 더 입력해 주세요.';
    }
    else{
      isPw2Error = false;
      isPw2Msg = '';
    }

    setState({
      ...state,
      isPw2Error : isPw2Error,
      isPw2Msg : isPw2Msg,
      비밀번호확인 : value
    })
  }

  const onChangeUserName = (e) => {
    const {value} = e.target;
    let isNameError = false;
    let isNameMsg = '';
    let 이름 = '';
    const regExp = /[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/g;

    이름 = value.replace(regExp, '');
    if(이름 === ''){
      isNameError = true;
      isNameMsg = '이름을 입력해주세요'
    }
    else{
      isNameError = false;
      isNameMsg = '';
    }

    setState({
      ...state,
      isNameError : isNameError,
      isNameMsg : isNameMsg,
      이름 : 이름
    })
  }

  const onChangeUserEmail = (e) => {
    const {value} = e.target;
    let isEmailError = false;
    let isEmailMsg = '';
    const regExp = /^[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ\-_]+(\.)?[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ\-_]*@[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ.\-_]+\.[a-z]{2,3}$/gi;
    
    if(regExp.test(value)===false){
      isEmailError = true;
      isEmailMsg = '이메일 형식으로 입력해 주세요.';
    }
    else if(value===''){
      isEmailError = true;
      isEmailMsg = '이메일을 입력해 주세요.';
    }
    else{
      isEmailError = false;
      isEmailMsg = '';
    }

    setState({
      ...state,
      isEmailError : isEmailError,
      isEmailMsg : isEmailMsg,
      이메일 : value
    })
  }

  const onClickUserEmailOk = (e) => {
    e.preventDefault();
    axios({   //웹서버 & DB 서버에서 데이터 가져오기
      url: 'http://gurwlszx.dothome.co.kr/signup_db/select.php',
      method:'GET',
    })
    .then((res)=>{    //Success
      try{
        const result = res.data.map((item)=>item.이메일===state.이메일);
        if(result.includes(true)){
          setState({
            ...state,
            isEmailOk : false,
            isConfirmModal : true,
            confirmMsg : '사용 불가능한 이메일입니다.'
          })
        }
        else{
          setState({
            ...state,
            isEmailOk : true,
            isConfirmModal : true,
            confirmMsg : '사용 가능한 이메일입니다.'
          })
        }
      }
      catch(err){
        console.log(`AXIOS 오류 메시지! ${err}`);
      }
    })
    .catch((err)=>{
      console.log(`AXIOS 오류 메시지! ${err}`);
    });
  }

  const onChangeUserHp = (e) => {
    const {value} = e.target;
    let isHpError = false;
    let isHpMsg = '';
    let isHpdisabled = false;
    let 휴대폰 = '';

    const regExp = /[^0-9]*/g;


    휴대폰 = value.replace(regExp, '');
    if(휴대폰===''){
      isHpError = true;
      isHpMsg = '휴대폰 번호를 입력해 주세요.';
      isHpdisabled = true;
    }
    else{
      isHpError = false;
      isHpMsg = '';
      if(휴대폰.length >= 1){
        isHpdisabled = false;
      }
    }

    setState({
      ...state,
      isHpError : isHpError,
      isHpMsg : isHpMsg,
      휴대폰 : 휴대폰,
      isHpdisabled : isHpdisabled
    })
  }

  //6-1. 휴대폰 인증번호 받기 클릭 이벤트
  const onClickHpNum = (e) => {
    e.preventDefault();
    //휴대폰 번호가 정확한지 정규표현식으로 유효성검사
    //010 9662 9052
    const regExp = /^01[0-9]{1}[0-9]{3,4}[0-9]{4}$/g;
    let isConfirmModal = false;
    let confirmMsg = '';
    let num = 0;
    let 발송인증번호 = 0;

    if(!regExp.test(state.휴대폰)){
      isConfirmModal = true;
      confirmMsg = '잘못된 휴대폰 번호 입니다. 확인 후 다시 시도 해 주세요.';
      
    }
    else{
      //인증번호 전송 타이밍
      num = Math.floor(Math.random() * 900000 + 100000);
      발송인증번호 = num;
      isConfirmModal = true;
      confirmMsg = `인증번호가 발송되었습니다. ${num}`;
    }
    setState({
      ...state,
      isConfirmModal : isConfirmModal,
      confirmMsg : confirmMsg,
      발송인증번호 : 발송인증번호
    })
  }
  
  //6-2. 휴대폰 인증번호 확인 입력상자 onChange
  const onChangeUserHp2 = (e) => {
    const {value} = e.target;
    let isHpdisabled2 = false;

    if(value.length >= 1){
      isHpdisabled2 = false;
    }
    else{
      isHpdisabled2 = true;
    }
    
    setState({
      ...state,
      입력인증번호 : value,
      isHpdisabled2 : isHpdisabled2
    })

  }
  
  //6-3. 휴대폰 인증번호 확인 버튼 클릭 이벤트 onClick
  const onClickHpNum2 = (e) => {
    e.preventDefault();
    let isConfirmModal = false;
    let confirmMsg = '';
    let isHp3 = true;
    
    let 발송인증번호 = state.발송인증번호

    isConfirmModal = true;
    if(String(state.발송인증번호) === state.입력인증번호){
      confirmMsg = '인증에 성공 하였습니다.'
      isHp3 = false;
      발송인증번호 = '';
    }
    else{
      confirmMsg = '잘못된 인증 코드입니다.'
      isHp3 = true;
    }
    setState({
      ...state,
      isConfirmModal : isConfirmModal,
      confirmMsg : confirmMsg,
      isHp3 : isHp3,
      발송인증번호 : 발송인증번호
    })

  }

  const onClickHpNum3 = (e) => {
    e.preventDefault();
    let isHpdisabled = true;
    let isHp3 = true;
    setState({
      ...state,
      isHpdisabled : isHpdisabled,
      isHp3 : isHp3,
      휴대폰 : '',
      입력인증번호 : '',
      발송인증번호 : '',
    })
    createRef.current.focus();  //커서를 휴대폰 입력상자에 맞추겠다
  }

  return (
    <>
      <div id='signUp'>
      <section id="section1">
        <div className="container">
          <div className="gap">
            <div className="title">
              <h2>회원가입</h2>
              <p><span>필수입력사항<i>*</i></span></p>
            </div>
            <div className="content">
              <form name='sign_up_form' id='signUpForm' method='post' action="./sign_up.php">
                <ul>
                  <li>
                    <div>
                      <label htmlFor="userId">아이디<i>*</i></label>
                      <div className="center-box">
                        <input onChange={onChangeUserId} type="text" maxLength={16} name='user_id' id='userId' placeholder='아이디를 입력해주세요' value={state.아이디}/>
                      </div>
                      <button onClick={onClickUserIdOk}>중복확인</button>
                      <p className={`error-msg ${state.isIdError?' on':''}`}>
                        {
                          state.isIdMsg
                        }
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <label htmlFor="userPw">비밀번호<i>*</i></label>
                      <div className="center-box">
                        <input onChange={onChangeUserPw1} type="password" maxLength={16} name='user_pw' id='userPw' placeholder='비밀번호를 입력해주세요' value={state.비밀번호}/>
                      </div>
                      <p className={`error-msg ${state.isPwError ?' on':''}`}>
                        {
                          state.isPwMsg
                        }
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <label htmlFor="userPwOk">비밀번호확인<i>*</i></label>
                      <div className="center-box">
                        <input onChange={onChangeUserPw2} type="password" maxLength={16} name='user_pwok' id='userPwOk' placeholder='비밀번호를 한번 더 입력해주세요' value={state.비밀번호확인}/>
                      </div>
                      <p className={`error-msg ${state.isPw2Error?' on':''}`}>
                        {
                          state.isPw2Msg
                        }
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <label htmlFor="userName">이름<i>*</i></label>
                      <div className="center-box">
                        <input onChange={onChangeUserName} type="text" name='user_name' id='userName' placeholder='이름을 입력해주세요' value={state.이름}/>
                        
                      </div>
                      <p className={`error-msg ${state.isNameError?' on':''}`}>
                        {
                          state.isNameMsg
                        }
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <label htmlFor="userEmail">이메일<i>*</i></label>
                      <div className="center-box">
                        <input onChange={onChangeUserEmail} type="email" maxLength={30} name='user_email' id='userEmail' placeholder='예: marketkurly@kurly.com' value={state.이메일}/>
                      </div>
                      <button onClick={onClickUserEmailOk}>중복확인</button>
                      <p className={`error-msg ${state.isEmailError?' on':''}`}>
                        {
                          state.isEmailMsg
                        }
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <label htmlFor="userHp">휴대폰<i>*</i></label>
                      <div className="center-box">
                        <input onChange={onChangeUserHp} type="text" maxLength={11} name='user_hp' id='userHp' placeholder='숫자만 입력해주세요' value={state.휴대폰} ref={createRef}/>
                      </div>
                      <button className={`hp-num-btn${!state.isHpdisabled?' on':''}`} onClick={onClickHpNum} disabled={state.isHpdisabled}>인증번호 받기</button>
                      <button className={`hp-num-btn hp-num-btn3${!state.isHp3?' on':''}`} onClick={onClickHpNum3}>다른번호 인증</button>
                      <p className={`error-msg ${state.isHpError?' on':''}`}>
                        {
                          state.isHpMsg
                        }
                      </p>
                    </div>
                  </li>
                  {
                    state.발송인증번호 !== '' && (
                      <li>
                        <div>
                          <div className="center-box">
                            <input onChange={onChangeUserHp2} type="text" maxLength={6} name='user_hp2' id='userHp2' placeholder='인증번호를 입력하세요' value={state.휴대폰인증번호}/>
                          </div>
                          <button className={`hp-num-btn${!state.isHpdisabled2?' on':''}`} onClick={onClickHpNum2} disabled={state.isHpdisabled2}>인증번호 받기</button>
                        </div>
                      </li>
                    )
                  }
                  <li>
                    <div>
                      <label htmlFor="userAddress1">주소<i>*</i></label>
                      <div className="center-box">
                        {
                          state.isAddress1 && (
                            <button>주소 검색</button>
                          )
                        }
                        {
                          state.isAddress2 && (
                            <>
                              <input type="text" name='user_address1' id='userAddress1' placeholder='검색 주소1'/>
                              <input type="text" name='user_address2' id='userAddress2' placeholder='나머지 주소2'/>
                              <h5>샛별배송</h5>
                            </>
                          )
                        }
                        <h6>배송지에 따라 상품 정보가 달라질 수 있스니다.</h6>
                      </div>
                      {
                        state.isAddress2 && (
                          <button>재검색</button>
                        )
                      }
                    </div>
                  </li>
                  <li>
                    <div>
                      <label>성별</label>
                      <div className="center-box gender">
                        <label htmlFor="userMale"><input onChange={onChangeGender} type="radio" name='user_gender' id='userMale' value={'남자'} checked={state.성별.includes('남자')}/>남자</label>
                        <label htmlFor="userFemale"><input onChange={onChangeGender} type="radio" name='user_gender' id='userFemale' value={'여자'} checked={state.성별.includes('여자')}/>여자</label>
                        <label htmlFor="userNone"><input onChange={onChangeGender} type="radio" name='user_gender' id='userNone' value={'선택안함'} checked={state.성별.includes('선택안함')}/>선택안함</label>
                      </div>                      
                    </div>
                  </li>
                  <li>
                    <div>
                      <label>생년원일</label>
                      <div className="center-box birth">
                        <div className="birth-box">
                          <ul>
                            <li><input type="text" maxLength={4} name='user_birth_year' id='userBirthYear' placeholder='YYYY'/></li>
                            <li><i>/</i></li>
                            <li><input type="text" maxLength={2} name='user_birth_month' id='userBirthMonth' placeholder='MM' /></li>
                            <li><i>/</i></li>
                            <li><input type="text" maxLength={2} name='user_birth_date' id='userBirthDate' placeholder='DD' /></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <label>추가입력사항</label>
                      <div className="center-box chooga">
                        <label htmlFor="userChooga1"><input type="radio" name='user_chooga' id='userChooga1' value={'남자'}/>친구초대 추천인 아이디</label>
                        <label htmlFor="userChooga2`"><input type="radio" name='user_chooga' id='userChooga2' value={'여자'}/>참여 이벤트명</label>
                        {
                          state.isChooga1 &&
                          (
                          <>
                            <input type="text" name='user_chooga_id' id='userChoogaId' placeholder='추천인 아이디를 입력해 주세요.' />
                            <h6>가입 후 7일 내 첫 주문 배송완료 시, 친구초대 이벤트 적립금이 지급됩니다.</h6>
                          </>
                          )
                        }
                        {
                          state.isChooga2 &&
                          (
                            <>
                              <input type="text" name='user_chooga_event' id='userChoogaEvent' placeholder='참여 이벤트명을 입력해 주세요.' />
                              <h6>
                                추천인 아이디와 참여 이벤트명 중 하나만 선택 가능합니다.<br/>
                                가입 이후는 수정이 불가능 합니다.<br/>
                                대소문자 및 띄어쓰기에 유의해주세요.
                              </h6>
                            </>
                          )
                        }
                        
                      </div>
                      {
                        state.isChooga1 &&
                        (
                          <button>아이디 확인</button>
                        )
                      }
                    </div>
                  </li>
                  <li>
                    <hr className='hr'/>
                  </li>
                  <li className='service-box'>
                    <div>
                      <label>이용약관동의<i>*</i></label>
                      <div className="center-box service">
                        <ul>
                          <li>
                            <label htmlFor="userServiceAll"><input type="checkbox" name='user_service_all' id='userServiceAll' value={'전체 동의합니다.'}/>전체 동의합니다.</label>
                            <h5>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</h5>
                          </li>
                          <li>
                            <label htmlFor="userService1"><input type="checkbox" name='user_service_1' id='userService1' value={'이용약관 동의(필수)'}/>이용약관 동의</label><span>필수</span>
                          </li>
                          <li>
                            <label htmlFor="userService2"><input type="checkbox" name='user_service_2' id='userService2' value={'개인정보 수집∙이용 동의(필수)'}/>개인정보 수집∙이용 동의</label><span>필수</span>
                          </li>
                          <li>
                            <label htmlFor="userService3"><input type="checkbox" name='user_service_3' id='userService3' value={'개인정보 수집∙이용 동의(선택)'}/>개인정보 수집∙이용 동의</label><span>선택</span>
                          </li>
                          <li>
                            <label htmlFor="userService4"><input type="checkbox" name='user_service_4' id='userService4' value={'무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)'}/>무료배송, 할인쿠폰 등 혜택/정보 수신 동의</label><span>선택</span>
                          </li>
                          <li className='service56'>
                            <label htmlFor="userService5"><input type="checkbox" name='user_service_5' id='userService5' value={'SMS'}/>SMS</label>
                            <label htmlFor="userService6"><input type="checkbox" name='user_service_6' id='userService6' value={'이메일'}/>이메일</label>
                            <h6>동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</h6>
                          </li>
                          <li>
                            <label htmlFor="userService7"><input type="checkbox" name='user_service_7' id='userService7' value={'본인은 만 14세 이상입니다.(필수)'}/>본인은 만 14세 이상입니다.</label><span>필수</span>
                          </li>
                          <li>
                            <button type='submit'>가입하기</button>
                          </li>
                        </ul>
                      </div>                      
                    </div>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </section>
      </div>
      {
        state.isConfirmModal && (
          <div id="confirmModal">
        <div className="wrap">
          <div className="container">
            <div className="content">
              <div className="title-box">
                <h1>{state.confirmMsg}</h1>
              </div>
              <div className="button-box">
                <button onClick={onClickConfirmModalClose}>확인</button>
              </div>
            </div>
          </div>
        </div>
          </div>
        )
      }
    </>
  );
};

//id, pw, irum, email, hp, addr, gender, birth, chooga, services, gaib_date

SignUpComponent.defaultProps = {
  회원가입 : {
    //1-1.아이디
    아이디 : '',
    isIdError : false,
    isIdMsg : '',
    //1-2.아이디 중복확인 : 모달창
    isIdOk : false,
    
    //2. 비밀번호
    비밀번호 : '',
    isPw1Error : false,
    isPw1Msg : '',
    //3.비밀번호확인
    비밀번호확인 : '',
    isPw2Error : false,
    isPw2Msg : '',
    //4. 이름
    이름 : '',
    isNameError : false,
    isNameMsg : '',
    //5-1. 이메일
    이메일 : '',
    isEmailError : false,
    isEmailMsg : '',
    //5-2. 이메일 중복확인 : 모달창
    isEmailOk : false,

    isConfirmModal : false,
    confirmMsg : '형식에 맞게 입력해주세요.',
    //6. 휴대폰
    휴대폰 : '',
    isHpError : false,
    isHpMsg : '',
    isHpdisabled : true,  //휴대폰 인증번호 받기 버튼 사용 불가
    num : 0,
    발송인증번호 : '',   //생성한 인증번호
    
    입력인증번호 : '',  //사용자가 입력한 인증번호
    isHpdisabled2 : true,

    //다른번호인증
    isHp3 : true,
    

    주소1 : '',
    주소12 : '',
    isAddress1 : true,
    isAddress2 : false,
    성별 : '선택안함',
    생년 : '',
    생월 : '',
    생일 : '',
    isChooga1 : false,
    isChooga2 : false
  }
}

