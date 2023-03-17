import React from 'react';
import axios from 'axios';

export default function SignUpComponent (props){

  const [state, setState] = React.useState(props.회원가입)

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
    let errorMsg = '';

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
      errorMsg = '6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합';
    }
    else{
      isIdError = false;
      errorMsg = '';
    }

    setState({
        ...state,
        아이디 : 아이디,
        isIdError : isIdError,
        errorMsg : errorMsg
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
      alert('6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합')
    }
    else{
      //아이디 중복검사 실시
      //가져오는 방법은 REST API를 사용한다 AJAX Or AXIOS JSON 데이터처리에 가장 좋은 패키지
      //서버에서 DB에 저당된 데이터를 가져온다
      //서버사이드 스크립트 언어가 MYSQL SQL 명령문을 이용 가져온다.
      //그리고 비교한다. 입력된 아이디랑
      // axios({}).then(()=>{}).catch(()=>{});
      // 정보요청 Request
      axios({
        url: 'http://gurwlszx.dothome.co.kr/signup_db/select.php',
        method:'GET',
      })
      .then((res)=>{

        console.log(res)
        console.log(res.data)

        //맵함수 이용 화살표함수 중괄호 빼고 사용하면
        //비교결과 true, false 배열로 곧바로 리턴 값
        const result = res.data.map((item) => item.아이디===value);
        if(result.includes(true)){
          alert('사용불가능한 아이디입니다.')
        }
        else{
          alert('사용가능한 아이디입니다.')
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
                      <button onClick={onClickUserIdOk}>중복확인</button>
                      <p className={`errorMsg ${state.isIdError?' on':''}`}>
                        {
                          state.errorMsg
                        }
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <label htmlFor="userPw">비밀번호<i>*</i></label>
                      <div className="center-box">
                        <input type="password" maxLength={16} name='user_pw' id='userPw' placeholder='비밀번호를 입력해주세요'/>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <label htmlFor="userPwOk">비밀번호확인<i>*</i></label>
                      <div className="center-box">
                        <input type="password" maxLength={16} name='user_pwok' id='userPwOk' placeholder='비밀번호를 한번 더 입력해주세요'/>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <label htmlFor="userName">이름<i>*</i></label>
                      <div className="center-box">
                        <input type="text" name='user_name' id='userName' placeholder='이름을 입력해주세요'/>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <label htmlFor="userEmail">이메일<i>*</i></label>
                      <div className="center-box">
                        <input type="email" maxLength={16} name='user_email' id='userEmail' placeholder='예: marketkurly@kurly.com'/>
                      </div>
                      <button>중복확인</button>
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
