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

<%
    if(
        userDTO.getId()==null ||
        userDTO.getPw1()==null
    ){
%>

<script>
    alert("빈 항목을 확인하세요!");
    location.href="./naver_user_main.jsp";
</script>

<%
    }
    UserDAO userDAO = new UserDAO();
    int result = userDAO.delete(userDTO);
    if(result <= 0){
%>
<script>
    alert("아이디와 비밀번호를 확인해주세요!");
    history.back();
</script>
<%
    }
    else{
        session.invalidate();
%>
<script>
    alert("회원탈퇴 되었습니다!");
    location.href="./naver_user_main.jsp";
</script>
<%
    }
%>