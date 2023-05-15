
<%@ 
page 
language="java" 
contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"
%>

<%@ page import="naver.*" %>
<%@ page import="java.util.*" %>


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<link rel="stylesheet" href="./css/style.css">

</head>
<body>
<div id="wrap">
<section id="signup" class="main">
    <div class="container">
        <div class="title">
            <h2>메인 페이지</h2>
        </div>
        <%
            String loginId = null;
            if(session.getAttribute("id") != null){
                loginId = (String)session.getAttribute("id");
            }
            if(loginId == null){
        %>
        <div class="content">
            <ul>
                <li><a href="./naver_user_signin.jsp">로그인</a></li>
                <li><a href="./naver_user_signup.jsp">회원가입</a></li>
            </ul>
        </div>
        <%
            }
            else{
        %>
        <div class="content">
            <ul>
                <h2><%=loginId%>님 안녕하세요</h2>
                <li><a href="./naver_user_logout.jsp">로그아웃</a></li>
                <li><a href="./naver_user_update.jsp">개인정보수정</a></li>
                <li><a href="./naver_user_delete.jsp">회원탈퇴</a></li>
            </ul>
        </div>
        
    </div>
    <div class="get-join-list">
        <table>
            <caption>회원 LIST</caption>
            <tr>
                <th>아이디</th>
                <th>비밀번호</th>
                <th>이름</th>
                <th>생년월일</th>
                <th>성별</th>
                <th>이메일</th>
                <th>국가</th>
                <th>전화번호</th>
                <th>가입일</th>
            </tr>
            <%
                UserDAO userDAO = new UserDAO();
                List<UserDTO> list = userDAO.getJoinList();
                for(UserDTO item : list){
            %>
            <tr>
                <th><%= item.getId() %></th>
                <th><%= item.getPw1() %></th>
                <th><%= item.getName() %></th>
                <th><%= item.getBirthYear()+item.getBirthMonth()+item.getBirthDay()%></th>
                <th><%= item.getGender() %></th>
                <th><%= item.getEmail() %></th>
                <th><%= item.getNation() %></th>
                <th><%= item.getHp() %></th>
                <th><%= item.getCreate_date() %></th>
            </tr>
            <%
                }
            %>
        </table>
    </div>

    <%
            }
    %>
</section>
</div>
</body>
</html>