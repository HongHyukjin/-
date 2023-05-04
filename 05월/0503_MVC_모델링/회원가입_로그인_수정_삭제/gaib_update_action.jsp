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
    int result = gaibDAO.update(gaibDTO);
    if(result <= 0){
%>
  <script>
    alert("수정할 아이디가 없습니다!");
    history.back();
  </script>
<%
    }
    else{
%>
  <script>
    alert("수정이 완료되었습니다!");
    history.back();
  </script>
<%
    }
  }
%>