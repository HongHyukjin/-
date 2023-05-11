import React from 'react';

export default function SignupComponent () {
  return (
    <>
        <div className="title">
            <a href="http://www.naver.com"></a>
        </div>
        <form name="sign_up" id="signUp" method="post" action="./naver_user_signup_action.jsp">
            <label for="id">아이디</label>
            <div>
                <input type="text" name="id" id="id"/>
                <span>@naver.com</span>
            </div>
            <label for="pw1">비밀번호</label>
            <div>
                <input type="text" name="pw1" id="pw1"/>
            </div>
            <label for="pw2">비밀번호 재확인</label>
            <div>
                <input type="text" name="pw2" id="pw2" />
            </div>
            <label for="name">이름</label>
            <div>
                <input type="text" name="name" id="name" />
            </div>
            <label for="birth_year">생년월일</label>
            <span>
                <div className="birth">
                    <input className="year" type="text" name="birthYear" id="birthYear" placeholder="년(4자)" />
                </div>
                <div className="birth">
                    <select className="month" name="birthMonth" id="birthMonth">
                        <option value="월">월</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <div className="birth">
                    <input className="day" type="text" name="birthDay" id="birthDay" placeholder="일" />
                </div>
            </span>
            <label for="gender">성별</label>
            <div>
                <select name="gender" id="gender">
                    <option value="성별">성별</option>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                    <option value="선택안함">선택안함</option>
                </select>
            </div>
            <label for="email">본인 확인 이메일<span>(선택)</span></label>
            <div>
                <input type="text" name="email" id="email" placeholder="선택입력" />
            </div>
            <label for="hp">휴대전화</label>
            <div>
                <select name="nation" id="nation">
                    <option value="대한민국 +82">대한민국 +82</option>
                    <option value="그리스 +30">그리스 +30</option>
                    <option value="나이지리아 +234">나이지리아 +234</option>
                    <option value="노르웨이 +47">노르웨이 +47</option>
                    <option value="독일 +49">독일 +49</option>
                </select>
            </div>
            <label for="hp"></label>
            <div className="hp">
                    <input className="hp" type="text" name="hp" id="hp" placeholder="전화번호 입력" />
                    <button className="certification">인증번호 받기</button>
            </div>
            <button className="signup" type="submit">가입하기</button>
        </form>
    </>
  );
};

