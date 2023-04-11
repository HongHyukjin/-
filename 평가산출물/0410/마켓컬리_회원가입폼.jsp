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
  <title>마켓컬리 회원가입폼</title>
</head>
<body>

  <style>
    *{margin : 0; padding : 0; vertical-align: middle; box-sizing: border-box;}
    #wrap{
      width : 640px;
      margin : 100px auto;
    }
    #wrap .title{
      width : 100%;
      text-align: center;
      border-bottom: 2px solid #000;
    }
    #wrap .title h1{
      font-size: 28px;
      line-height: 35px;
      margin : 50px 0;
    }
    #wrap .title p{
      text-align: right;
      font-size: 12px;
      color : #333;
    }
    #wrap .content{
      width : 100%;
    }
    #wrap .content form ul li{
      position: relative;
      width : 100%;
      padding : 10px 20px;
      margin : 20px 0;
      list-style: none;
      font-size: 14px;
      font-weight: 600;
    }
    #wrap .content form ul .agree{
      height : 180px;
    }

    #wrap .content form ul li label input[type='text']{
      position: absolute;
      top : 0;
      left : 170px;
      width : 333px;
      height : 45px;
      padding : 0 11px 0 15px;
      border-radius: 5px;
      border : 1px solid #ddd;
    }
    #wrap .content form ul li input[type='text']::placeholder{
      font-size: 16px;
      color : #333;
    }
    #wrap .content form ul li div {
      width : 333px;
      position: absolute;
      top : 0;
      left : 170px;
      display: flex;
    }
    #wrap .content form ul li div .gender{
      width : 66px;
    }
    #wrap .content form ul li div .addinput{
      display: block;
      width : 171px;
      text-align: center;
    }
    #wrap .content form ul li .useragree{
      width : 481px;
      display: flex;
      flex-flow: row wrap;
    }
    #wrap .content form ul li .useragree label{
      display: block;
      width : 100%;
    }
    
  </style>
  
  <div id="wrap">
    <div class="title">
      <h1>회원가입</h1>
      <p>* 필수입력사항</p>
    </div>
    <div class="content">
      <form name="sign_up" id="signUp" method="get" action="./마켓컬리_회원가입_응답폼.jsp">
        <ul>
          <li>
            아이디*
            <label for="userName">
              <input type="text" name="user_id" id="userId" placeholder="아이디를 입력해주세요">
            </label>
          </li>
          <li>
            비밀번호*
            <label for="userPw1">
              <input type="text" name="user_pw1" id="userPw1" placeholder="비밀번호를 입력해주세요">
            </label>
          </li>
          <li>
            비밀번호확인*
            <label for="userPw2">
              <input type="text" name="user_pw2" id="userPw2" placeholder="비밀번호를 한번 더 입력해주세요">
            </label>
          </li>
          <li>
            이름
            <label for="userName">
              <input type="text" name="user_name" id="userName" placeholder="이름을 입력해 주세요">
            </label>
          </li>
          <li>
            이메일*
            <label for="userEmail">
              <input type="text" name="user_email" id="userEmail" placeholder="예: marketkurly@kurly.com">
            </label>
          </li>
          <li>
            휴대폰
            <label for="userHp">
              <input type="text" name="user_hp" id="userHp" placeholder="숫자만 입력해주세요.">
            </label>
          </li>
          <li>
            주소
            <label for="userAddr">
              <input type="text" name="user_addr" id="userAddr" placeholder="주소 검색">
            </label>
          </li>
          <li>
            성별
            <div>
              <label for="userGender1">
                <input class="gender" type="radio" name="user_gender" id="userGender1" value="남자">남자
                <input class="gender" type="radio" name="user_gender" id="userGender2" value="여자">여자
                <input class="gender" type="radio" name="user_gender" id="userGender3" value="선택안함" checked="true">선택안함
              </label>
            </div>
          </li>
          <li>
            추가입력 사항
            <div>
              <label for="userAddinput1" class="addinput">
                <input type="radio" name="user_addinput" id="userAddinput1" value="친구초대 추천인 아이디">친구초대 추천인 아이디
              </label>
              <label for="userAddinput2" class="addinput">
                <input type="radio" name="user_addinput" id="userAddinput2" value="참여이벤트명">참여이벤트명
              </label>
            </div>
          </li>
          <li class="agree">
            이용약관동의
            <div class="useragree">
              <label for="userAgreeAll">
                <input type="checkbox" name="user_agreeAll" id="userAgreeAll" value="전체 동의합니다.">
                전체 동의합니다.
              </label>
              <p>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>
              <label for="userAgree1">
                <input type="checkbox" name="user_agree" id="userAgree1" value="이용약관동의(필수)">
                이용약관동의(필수)
              </label>
              <label for="userAgree2">
                <input type="checkbox" name="user_agree" id="userAgree2" value="개인정보 수집∙이용 동의(필수)">
                개인정보 수집∙이용 동의(필수)
              </label>
              <label for="userAgree3">
                <input type="checkbox" name="user_agree" id="userAgree3" value="개인정보 수집∙이용 동의(선택)">
                개인정보 수집∙이용 동의(선택)
              </label>
              <label for="userAgree4">
                <input type="checkbox" name="user_agree" id="userAgree4" value="무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)">
                무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)
              </label>
              <label for="userAgree5">
                <input type="checkbox" name="user_agree" id="userAgree5" value="SMS">
                SMS
              </label>
              <label for="userAgree6">
                <input type="checkbox" name="user_agree" id="userAgree6" value="이메일">
                이메일
              </label>
              <label for="userAgree7">
                <input type="checkbox" name="user_agree" id="userAgree7" value="본인은 만 14세 이상입니다.(필수)">
                본인은 만 14세 이상입니다.(필수)
              </label>
            </div>
          </li>
          <input type="submit" value="가입하기">
        </ul>
      </form>
    </div>
  </div>

</body>
</html>