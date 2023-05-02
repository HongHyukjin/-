<%@
  page
  language="java"
  contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"
%>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>회원가입 페이지</title>
  <link rel="stylesheet" href="./css/signup.css">

</head>
<body>
  
  <div id="wrap">
    <div class="container">
      <div class="gap">
        <div class="title">
          <h1>회원가입</h1>
          <div class="top_box">
            <ul>
              <li><strong>01</strong><span>약관동의</span></li>
              <li><strong>02</strong><span>가입정보입력</span></li>
              <li><strong>03</strong><span>가입완료</span></li>
            </ul>
          </div>
          <div class="bottom-box">
            <p>개인(직장가입자)이 아닌 
            <span>사업장업무를 위한 회원가입</span>
            입니다. <br>
            사업장관리번호 및 단위 사업장 기호가 다른 경우에는 각각 회원가입을 하셔야 합니다<br>
            예) 건설현장 사업장마다 사업장관리번호가 각각 적용되오니 회원가입도 각각 하셔야 해당 업무를 이용하실 수 있습니다.
            </p>
          </div>
        </div>
        <div class="content">
          <p>표는 필수 입력 사항이며, [동일아이디검색] 및 [가입여부확인] 버튼을 반드시 눌러주세요.</p>
          <form name="sign_up" id="signUp" method="post" action="member_write.jsp">
            <ul>
              <li>
                <label for="">사업장 관리번호</label>
                <div>
                  <input class="wid1" type="text" name="num" id="num">
                  <button>사업장 관리번호 확인</button>
                </div>
              </li>
              <li>
                <label for="">사업장기호</label>
                <div>
                  <input class="wid2" type="text" name="symbol1" id="symbol1" placeholder="사업장관리번호확인 버튼을 클릭하여 검증하시면 자동입력 됩니다.">
                </div>
              </li>
              <li>
                <label for="">단위사업장 기호</label>
                <div>
                  <button>단위사업장 검색</button>
                  <input class="wid3" type="text" name="symbol2" id="symbol2">
                  <button>가입여부 확인하기(실명확인)</button>
                </div>
              </li>
              <li>
                <label for="">아이디</label>
                <div>
                  <input class="wid1" type="text" name="id" id="id" placeholder="영문+숫자 6~10자 이내 아이디 입력">
                  <button>아이디 중복 검색</button>
                </div>
              </li>
              <li>
                <label for="">비밀번호</label>
                <div>
                  <input class="wid4" type="text" name="pw1" id="pw1" placeholder="영문+숫자+특수문자(!@#$) 각 1자 이상 포함하여 9~12자 이내 비밀번호 입력">
                </div>
              </li>
              <li>
                <label for="">비밀번호확인</label>
                <div>
                  <input class="wid4" type="text" name="pw2" id="pw2" placeholder="영문+숫자+특수문자(!@#$) 각 1자 이상 포함하여 9~12자 이내 비밀번호 입력">
                </div>
              </li>
              <li>
                <label for="">비밀번호 분실 시 확인 질문</label>
                <div>
                  <select name="pw_q" id="pw_q">
                    <option value="질문을 선택하세요">질문을 선택하세요</option>
                    <option value="나의 아버지 성함은?">나의 아버지 성함은?</option>
                    <option value="나의 그리운 고향은?">나의 그리운 고향은?</option>
                    <option value="나의 첫째아이 이름은?">나의 첫째아이 이름은?</option>
                    <option value="나의 초등학교 이름은?">나의 초등학교 이름은?</option>
                    <option value="나의 보물 제1호는?">나의 보물 제1호는?</option>
                    <option value="기억에 남는 추억의 장소는?">기억에 남는 추억의 장소는?</option>
                    <option value="나의 인생 좌우명은?">나의 인생 좌우명은?</option>
                    <option value="내가 좋아하는 캐릭터는?">내가 좋아하는 캐릭터는?</option>
                    <option value="추억하고 싶은 날짜가 있다면?">추억하고 싶은 날짜가 있다면?</option>
                    <option value="인상 깊게 읽은 책 이름은?">인상 깊게 읽은 책 이름은?</option>
                    <option value="내가 가장 존경하는 인물은?">내가 가장 존경하는 인물은?</option>
                    <option value="가장 기억에 남는 선생님 성함은?">가장 기억에 남는 선생님 성함은?</option>
                    <option value="내가 받았던 선물 중 기억에 남는 선물은?">내가 받았던 선물 중 기억에 남는 선물은?</option>
                    <option value="직접입력">직접입력</option>
                  </select>
                </div>
              </li>
              <li>
                <label for="">비밀번호 분실 시 확인 답변</label>
                <div>
                  <input class="wid4" type="text" name="pw_a" id="pw_a" placeholder="조회 답변은 띄어쓰기 포함 10자 이내">
                </div>
              </li>
              <li>
                <label for="">전화번호</label>
                <div>
                  <input class="wid5" type="text" name="hp" id="hp" placeholder="“-(하이픈)” 없이 입력 (예 : 01012345678) 전화번호 입력">
                </div>
              </li>
              <li>
                <label for="">업무 담당자명</label>
                <div>
                  <input class="wid4" type="text" name="manager_name" id="manager_name" placeholder="“사업장의 소속된 직장 가입자 직원 또는 대표자 업무담당자명 입력">
                </div>
              </li>
              <li>
                <label for="">이메일</label>
                <div>
                  <input class="wid4" type="text" name="email" id="email" placeholder="직접 입력">
                </div>
              </li>
              <li>
                <label for="">소식지 수신여부</label>
                <div>
                  <label for=""><input type="radio" name="message" id="message" value="받음">받음</label>
                  <label for=""><input type="radio" name="message" id="message" value="안받음 (공단의 다양한 소식을 무료로 만나보세요)">안받음 (공단의 다양한 소식을 무료로 만나보세요)</label>
                </div>
              </li>
              <div class="btn">
                <button class="submit" type="submit">확인</button>
                <button class="none">취소</button>
              </div>
            </ul>
          </form>
        </div>
      </div>
    </div>
  </div>

</body>
</html>