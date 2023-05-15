<%
    response.setHeader("Access-Control-Allow-Origin", "*");
%>

<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import="naver.*" %>

<jsp:useBean id="userDTO" class="naver.UserDTO" scope="page" />
<jsp:setProperty property="id" name="userDTO"/>
<jsp:setProperty property="pw1" name="userDTO"/>
<jsp:setProperty property="pw2" name="userDTO"/>
<jsp:setProperty property="name" name="userDTO"/>
<jsp:setProperty property="birthYear" name="userDTO"/>
<jsp:setProperty property="birthMonth" name="userDTO"/>
<jsp:setProperty property="birthDay" name="userDTO"/>
<jsp:setProperty property="gender" name="userDTO"/>
<jsp:setProperty property="email" name="userDTO"/>
<jsp:setProperty property="nation" name="userDTO"/>
<jsp:setProperty property="hp" name="userDTO"/>

<%
    UserDAO userDAO = new UserDAO();
    int result = userDAO.signup(userDTO);
%>

{"result" : <%=result %>}