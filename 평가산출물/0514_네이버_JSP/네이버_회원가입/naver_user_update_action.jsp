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
    if(
        userDTO.getId()==null ||
        userDTO.getPw1()==null ||
        userDTO.getPw2()==null ||
        userDTO.getName()==null ||
        userDTO.getBirthYear()==null ||
        userDTO.getBirthMonth()==null ||
        userDTO.getBirthDay()==null ||
        userDTO.getGender()==null ||
        userDTO.getEmail()==null ||
        userDTO.getNation()==null ||
        userDTO.getHp()==null
    ){
%>

<script>
    alert("빈 항목을 확인하세요!");
    location.href="./naver_user_main.jsp";
</script>

<%
    }
    UserDAO userDAO = new UserDAO();
    int result = userDAO.update(userDTO);
    if(result == -1){
%>
<script>
    alert("중복된 아이디입니다!");
    history.back();
</script>
<%
    }
    else{
%>
<script>
    alert("개인정보가 수정되었습니다.!");
    location.href="./naver_user_main.jsp";
</script>
<%
    }
%>