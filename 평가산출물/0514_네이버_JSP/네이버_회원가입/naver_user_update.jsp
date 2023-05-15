<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import="naver.*" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>네이버 회원가입폼</title>
    <link rel="stylesheet" href="./css/signup.css">
</head>
<body>
    <div id="wrap">
<%
    String loginId = (String)session.getAttribute("id");
    UserDAO userDAO = new UserDAO();
    UserDTO userDTO = userDAO.getJoin(loginId);
%>
        <div class="title">
            <a href="http://www.naver.com"></a>
        </div>
        <form name="sign_up" id="signUp" method="post" action="./naver_user_update_action.jsp">
            <label for="id">아이디</label>
            <div>
                <input type="text" name="id" id="id" value="<%=userDTO.getId()%>">
                <span>@naver.com</span>
            </div>
            <label for="pw1">비밀번호</label>
            <div>
                <input type="text" name="pw1" id="pw1" value="<%=userDTO.getPw1()%>">
            </div>
            <label for="pw2">비밀번호 재확인</label>
            <div>
                <input type="text" name="pw2" id="pw2" value="<%=userDTO.getPw1()%>">
                <!-- <img src="./img/m_icon_pw_step.png" alt=""> -->
            </div>
            <label for="name">이름</label>
            <div>
                <input type="text" name="name" id="name" value="<%=userDTO.getName()%>">
            </div>
            <label for="birth_year">생년월일</label>
            <span>
                <div class="birth">
                    <input class="year" type="text" name="birthYear" id="birthYear" placeholder="년(4자)" value="<%=userDTO.getBirthYear()%>">
                </div>
                <div class="birth">
                    <select class="month" name="birthMonth" id="birthMonth">
                        <option value="월">월</option>
                        <option value="1" <% if(userDTO.getBirthMonth().equals("1")){ %> selected="true" <%}%> >1</option>
                        <option value="2" <% if(userDTO.getBirthMonth().equals("2")){ %> selected="true" <%}%> >2</option>
                        <option value="3" <% if(userDTO.getBirthMonth().equals("3")){ %> selected="true" <%}%> >3</option>
                        <option value="4" <% if(userDTO.getBirthMonth().equals("4")){ %> selected="true" <%}%> >4</option>
                        <option value="5" <% if(userDTO.getBirthMonth().equals("5")){ %> selected="true" <%}%> >5</option>
                        <option value="6" <% if(userDTO.getBirthMonth().equals("6")){ %> selected="true" <%}%> >6</option>
                        <option value="7" <% if(userDTO.getBirthMonth().equals("7")){ %> selected="true" <%}%> >7</option>
                        <option value="8" <% if(userDTO.getBirthMonth().equals("8")){ %> selected="true" <%}%> >8</option>
                        <option value="9" <% if(userDTO.getBirthMonth().equals("9")){ %> selected="true" <%}%> >9</option>
                        <option value="10" <% if(userDTO.getBirthMonth().equals("10")){ %> selected="true" <%}%> >10</option>
                        <option value="11" <% if(userDTO.getBirthMonth().equals("11")){ %> selected="true" <%}%> >11</option>
                        <option value="12" <% if(userDTO.getBirthMonth().equals("12")){ %> selected="true" <%}%> >12</option>
                    </select>
                </div>
                <div class="birth">
                    <input class="day" type="text" name="birthDay" id="birthDay" placeholder="일" value="<%=userDTO.getBirthDay()%>">
                </div>
            </span>
            <label for="gender">성별</label>
            <div>
                <select name="gender" id="gender">
                    <option value="성별" >성별</option>
                    <option value="남자" <% if(userDTO.getGender().equals("남자")){ %> selected="true" <%}%> >남자</option>
                    <option value="여자" <% if(userDTO.getGender().equals("여자")){ %> selected="true" <%}%> >여자</option>
                    <option value="선택안함">선택안함</option>
                </select>
            </div>
            <label for="email">본인 확인 이메일<span>(선택)</span></label>
            <div>
                <input type="text" name="email" id="email" placeholder="선택입력" value="<%=userDTO.getEmail()%>">
            </div>
            <label for="hp">휴대전화</span></label>
            <div>
                <select name="nation" id="nation">
                    <option value="대한민국 +82" <% if(userDTO.getNation().equals("대한민국 +82")){ %> selected="true" <%}%> >대한민국 +82</option>
                    <option value="그리스 +30" <% if(userDTO.getNation().equals("그리스 +30")){ %> selected="true" <%}%> >그리스 +30</option>
                    <option value="나이지리아 +234" <% if(userDTO.getNation().equals("나이지리아 +234")){ %> selected="true" <%}%> >나이지리아 +234</option>
                    <option value="노르웨이 +47" <% if(userDTO.getNation().equals("노르웨이 +47")){ %> selected="true" <%}%> > >노르웨이 +47</option>
                    <option value="독일 +49" <% if(userDTO.getNation().equals("독일 +49")){ %> selected="true" <%}%> > >독일 +49</option>
                </select>
            </div>
            <label for="hp"></label>
            <div class="hp">
                    <input class="hp" type="text" name="hp" id="hp" placeholder="전화번호 입력" value="<%=userDTO.getHp()%>">
                    <button class="certification">인증번호 받기</button>
            </div>
            <button class="signup" type="submit">수정하기</button>
        </form>
    </div>
    
</body>
</html>