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
  <title>Kurly</title>
  <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <div id="wrap">
        <main id='signUp'>
            <section id="section1">
                <div class="container">
                    <div class="gap">
                                <div class="title">
                                    <h2>회원가입</h2>

                                    <p><span><i>*</i>필수입력사항</span></p>
                                </div>
                                <div class="content">
                                    <form name='sign_up_form' id='signUpForm' method='post' action="./kurly_user_signup_action.jsp">
                                        <ul>
                                            <li>
                                                <div>
                                                    <label htmlFor="userId">아이디<i>*</i></label>
                                                    <div class="center-box">
                                                        <input 
                                                            type='text' 
                                                            maxLength={16} 
                                                            name='user_id' 
                                                            id='userId' 
                                                            placeholder='아이디를 입력해주세요' 
                                                        />
                                                    </div>
                                                    <button  
                                                        type='button'
                                                        onClick={onClickUserIdOk}
                                                    >중복확인</button>
                                                    <p class="error-msg"></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <label htmlFor="userPw1">비밀번호<i>*</i></label>
                                                    <div class="center-box">
                                                        <input 
                                                            type='password'  
                                                            maxLength={16} 
                                                            name='user_pw' 
                                                            id='userPw' 
                                                            placeholder='비밀번호를 입력해주세요' 
                                                        />
                                                    </div>
                                                    <p class="error-msg"></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <label htmlFor="userName">이름<i>*</i></label>
                                                    <div class="center-box">
                                                        <input 
                                                            type='text' 
                                                            name='user_name' 
                                                            id='userName' 
                                                            placeholder='이름을 입력해주세요' 
                                                        />
                                                    </div>
                                                    <p class="error-msg">이름 메시지 텍스트</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <label htmlFor="userEmail">이메일<i>*</i></label>
                                                    <div class="center-box">
                                                        <input 
                                                            type='email' 
                                                            name='user_email' 
                                                            id='userEmail' 
                                                            placeholder='이메일을 입력해주세요' 
                                                        />
                                                    </div>
                                                    <button  
                                                        type='button'
                                                        onClick={onClickUserEmailOk}
                                                    >중복확인</button>
                                                    <p class="error-msg"></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <label htmlFor="userHp">휴대폰<i>*</i></label>
                                                    <div class="center-box">
                                                        <input 
                                                            type='text'  
                                                            maxLength={11} 
                                                            name='user_hp' 
                                                            id='userHp' 
                                                            placeholder='숫자만 입력해주세요' 
                                                        />
                                                    </div>
                                                    <button class="hp-num-btn" type='button'>인증번호 받기</button>
                                                    <button class="hp-num-btn" type='button'>다른번호 인증</button>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <label htmlFor="userAddress1">주소<i>*</i></label>
                                                    <div class="center-box">
                                                        <input 
                                                            type='text' 
                                                            name='user_addr' 
                                                            id='userAddr' 
                                                            placeholder='주소 검색' 
                                                            />
                                                        <h5>샛별배송</h5>
                                                        
                                                        <h6>배송지에 따라 상품 정보가 달라질 수 있습니다.</h6>
                                                    </div>
                                                
                                                    <button 
                                                        class="addr-research-btn"
                                                        type='button'
                                                    >재검색</button>
                                                </div>
                                            </li>                                 
                                            <li>
                                                <div>
                                                    <label>성별</label>
                                                    <div class="center-box gender">
                                                        <label><input type='radio' name='user_gender' id='userMale' value='남자'/>남자</label>
                                                        <label><input type='radio' name='user_gender' id='userFemale' value='여자'/>여자</label>
                                                        <label><input type='radio' name='user_gender' id='userNone' value='선택안함'/>선택안함</label>
                                                    </div>                                            
                                                </div>
                                            </li>
                                            <li>
                                            <div>
                                                    <label>생년월일</label>
                                                    <div class="center-box birth">
                                                        <div class="birth-box">
                                                            <ul>
                                                                <li>
                                                                    <input 
                                                                        type="text" 
                                                                        maxLength={4} 
                                                                        name='user_birth_year' 
                                                                        id='userBirthYear' 
                                                                        placeholder='YYYY'
                                                                    /></li>
                                                                <li><i>/</i></li>
                                                                <li>
                                                                    <input 
                                                                        type="text" 
                                                                        maxLength={2} 
                                                                        name='user_birth_month' 
                                                                        id='userBirthMonth>' 
                                                                        placeholder='MM' 
                                                                    /></li>
                                                                <li><i>/</i></li>
                                                                <li>
                                                                    <input 
                                                                        type="text" 
                                                                        maxLength={2} 
                                                                        name='user_birth_date' 
                                                                        id='userBirthDate' 
                                                                        placeholder='DD' 
                                                                    /></li>
                                                            </ul>
                                                        </div>
                                                    </div>                                       
                                                </div>
                                            </li>    
                                            <li>
                                                <button type='submit'>가입하기</button>
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</body>
</html>