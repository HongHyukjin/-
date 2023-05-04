<%@
  page
  language="java"
  contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"
%>

<%@ page import="gaib.GaibDAO" %>
<%@ page import="java.io.PrintWriter" %>

<% request.setCharacterEncoding("UTF-8"); %>

<jsp:useBean id="gaibDTO" class="gaib.GaibDTO" scope="page" />
<jsp:setProperty name="gaibDTO" property="user_id" />
<jsp:setProperty name="gaibDTO" property="user_pw" />
<jsp:setProperty name="gaibDTO" property="user_name" />
<jsp:setProperty name="gaibDTO" property="user_hp" />
<jsp:setProperty name="gaibDTO" property="user_email" />
<jsp:setProperty name="gaibDTO" property="user_addr" />

<%
  if(gaibDTO.getUser_id()==null || gaibDTO.getUser_pw()==null || gaibDTO.getUser_name()==null || gaibDTO.getUser_hp()==null || gaibDTO.getUser_email()==null || gaibDTO.getUser_addr()==null){
%>
  <script>
    alert("빈 항목을 모두 입력해주세요!");
    history.back();
  </script>
<%
  }
  else{
    GaibDAO gaibDAO = new GaibDAO();
    int result = gaibDAO.signup(gaibDTO);
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
    alert("가입이 완료되었습니다!");
    history.back();
  </script>
<%
    }
  }
%>