import React from 'react';

export default function SignUpComponent (props){

  const [state, setState] = React.useState(props.회원가입)

  const onChangeUserId = (e) => {
    const {value} = e.target;
    let isIdError = false;
    let isIdMsg = '';
    let 아이디 = '';

    const regExp1 = /[`~!@#$%^&*()\-_=+[{}\]\\|;:'",<.>/?]/g;
    const regExp2 = /.{6,16}/g;
    const regExp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;
    const regExp4 = /[A-Za-z]+[0-9]*/g;
    const regExp5 = /\s/g;

    아이디 = value.replace(regExp1, '');
    if(!regExp2.test(value) || regExp3.test(value) || !regExp4.test(value) || regExp5.test(value)){
      isIdError = true;
      isIdMsg = '6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합';
    }
    else{
      isIdError = false;
      isIdMsg = '';
    }

    setState({
      ...state,
      isIdError : isIdError,
      isIdMsg : isIdMsg,
      아이디 : 아이디
    })

  }

  const onChangeUserPw1 = (e) => {
    const {value} = e.target;
    let isPw1Error = false;
    let isPw1Msg = '';

    const regExp1 = /^.{10,16}$/g;
    const regExp2 = /([A-Za-z]+[0-9]+)+|([0-9]+[A-Za-z]+)+|([A-Za-z]+[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]+)+|([`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]+[A-Za-z]+)+|([0-9]+[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]+)+|([`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]+[0-9]+)+/g;
    const regExp3 = /\s/g;
    const regExp4 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;
    const regExp5 = /(\d)\1\1/g;
  
    if(!regExp1.test(value)){
      isPw1Error = true;
      isPw1Msg = '최소 10자 이상 입력';
    }
    else if(regExp5.test(value)){
      isPw1Error = true;
      isPw1Msg = '동일한 숫자 3개 이상 연속 사용 불가';
    }
    else if(!regExp2.test(value) || regExp3.test(value) || regExp4.test(value)){
      isPw1Error = true;
      isPw1Msg = '영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합'
    }
    else{
      isPw1Error = false;
      isPw1Msg = '';
    }

    setState({
      ...state,
      isPw1Error : isPw1Error,
      isPw1Msg : isPw1Msg,
      비밀번호 : value
    })
  }

  const onChangeUserPw2 = (e) => {
    const {value} = e.target;
    let isPw2Error = false;
    let isPw2Msg = '';

    if(value===''){
      isPw2Error = true;
      isPw2Msg = '비밀번호를 한번 더 입력해주세요.'
    }
    else if(value!==state.비밀번호){
      isPw2Error = true;
      isPw2Msg = '동일한 비밀번호를 입력'
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

    const regExp = /[`~!@#$%^&*()\-_=+[{}\]\\|;:'",<.>/?]/g;

    이름 = value.replace(regExp, '');
    if(이름 === ''){
      isNameError = true;
      isNameMsg = '이름을 입력해주세요';
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

  const onChangeGender = (e) => {
    setState({
      ...state,
      성별 : e.target.value
    })
  }

  const onChangeUserEmail = (e) => {
    const {value} = e.target;
    let isEmailError = false;
    let isEmailMsg = '';

    const regExp = /^([a-z0-9]+|[0-9a-z]+)+@[a-z]+\.[a-z]+(\.)?[a-z]*$/gi;
    if(!regExp.test(value)){
      isEmailError = true;
      isEmailMsg = '이메일 형식으로 입력해 주세요.'
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

  return (
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
                      <button>중복확인</button>
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
                      <p className={`error-msg${state.isPw1Error?' on':''}`}>
                        {
                          state.isPw1Msg
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
                      <p className={`error-msg${state.isPw2Error?' on':''}`}>
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
                      <p className={`error-msg${state.isNameError?' on':''}`}>
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
                      <button>중복확인</button>
                      <p className={`error-msg${state.isEmailError?' on':''}`}>
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
                        <input type="text" maxLength={11} name='user_hp' id='userHp' placeholder='숫자만 입력해주세요'/>
                      </div>
                      <button>인증번호 받기</button>
                    </div>
                  </li>
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
  );
};

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




    
    휴대폰 : '',
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

