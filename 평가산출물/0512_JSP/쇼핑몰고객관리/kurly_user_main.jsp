
<%@ 
    page 
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import="java.util.*" %>
<%@ page import="kurly.*" %>


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
<%
    UserDAO userDAO = new UserDAO();
    List<UserDTO> list = userDAO.getJoinList();
%>
    <section id="signup" class="main">
        <div class="container">
            <div class="title">
                <h2>메인 페이지</h2>
            </div>
            <%
                String loginId = null;
                if(session.getAttribute("user_id") != null){
                    loginId = (String)session.getAttribute("user_id");
                }
                if(loginId == null){
            %>
            <div class="content">
                <ul>
                    <li><a href="./kurly_user_signin.jsp">로그인</a></li>
                    <li><a href="./kurly_user_signup.jsp">회원가입</a></li>
                </ul>
            </div>
            <%
                }
                else{
            %>
            <div class="content">
                <ul>
                    <h2><%=loginId%>님 안녕하세요</h2>
                    <li><a href="./kurly_user_logout.jsp">로그아웃</a></li>
                    <li><a href="./kurly_user_update.jsp">개인정보수정</a></li>
                    <li><a href="./kurly_user_delete.jsp">회원탈퇴</a></li>
                </ul>
            </div>

        </div>
        <div class="get-join-list">
            <table>
                <tr>
                    <th>아이디</th>
                    <th>비밀번호</th>
                    <th>이름</th>
                    <th>이메일</th>
                    <th>전화번호</th>
                    <th>주소</th>
                    <th>성별</th>
                    <th>생년</th>
                    <th>생월</th>
                    <th>생일</th>
                    <th>추가사항</th>
                    <th>전체 동의</th>
                    <th>동의 1</th>
                    <th>동의 2</th>
                    <th>동의 3</th>
                    <th>동의 4</th>
                    <th>동의 5</th>
                    <th>동의 6</th>
                    <th>동의 7</th>
                </tr>
                <tr>
<%
    for(UserDTO item : list){
%>
                    <td><%= item.getUser_id() %></td>
                    <td><%= item.getUser_pw() %></td>
                    <td><%= item.getUser_name() %></td>
                    <td><%= item.getUser_email() %></td>
                    <td><%= item.getUser_hp() %></td>
                    <td><%= item.getUser_addr() %></td>
                    <td><%= item.getUser_gender() %></td>
                    <td><%= item.getUser_birth_year() %></td>
                    <td><%= item.getUser_birth_month() %></td>
                    <td><%= item.getUser_birth_date() %></td>
                    <td><%= item.getUser_chooga() %></td>
                    <td><%= item.getUser_service_all() %></td>
                    <td><%= item.getUser_service_1() %></td>
                    <td><%= item.getUser_service_2() %></td>
                    <td><%= item.getUser_service_3() %></td>
                    <td><%= item.getUser_service_4() %></td>
                    <td><%= item.getUser_service_5() %></td>
                    <td><%= item.getUser_service_6() %></td>
                    <td><%= item.getUser_service_7() %></td>
<%
    }
%>
                </tr>
            </table>
        </div>
<%
    }
%>
    </section>
</div>
</body>
</html>