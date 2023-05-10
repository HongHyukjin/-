
<%@ 
    page 
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import="kurly.UserDAO" %>
<%@ page import="kurly.UserDTO" %>
<%@ page import="java.util.*" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./public/css/style.css">

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
                <caption>회원 LIST 목록</caption>
                <tr>
                    <th>아이디</th>
                    <th>비밀번호</th>
                    <th>이름</th>
                    <th>이메일</th>
                    <th>전화번호</th>
                    <th>주소</th>
                    <th>성별</th>
                    <th>생년월일</th>
                    <th>가입일</th>
                </tr>
<%
        UserDAO userDAO = new UserDAO();
        List<UserDTO> list = userDAO.getJoinList();
        if(list.size() == 0){
            out.println("<script>alert('조회내역이 없습니다!')</script>");
        }
        for(UserDTO dto : list){
%>
                <tr>
                    <td><%=dto.getUser_id() %></td>
                    <td><%=dto.getUser_pw() %></td>
                    <td><%=dto.getUser_name() %></td>
                    <td><%=dto.getUser_email() %></td>
                    <td><%=dto.getUser_hp() %></td>
                    <td><%=dto.getUser_addr() %></td>
                    <td><%=dto.getUser_gender() %></td>
                    <td><%=dto.getUser_birth() %></td>
                    <td><%=dto.getGaib_date() %></td>
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