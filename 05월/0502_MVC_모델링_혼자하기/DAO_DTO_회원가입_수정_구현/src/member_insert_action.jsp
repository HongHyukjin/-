<%@
  page
  language="java"
  contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"
%>

<%@ page import="member.*" %>
<%@ page import="java.io.PrintWriter" %>

<% request.setCharacterEncoding("UTF-8"); %>

<jsp:useBean id="memberDTO" class="member.MemberDTO" scope="page" />
<jsp:setProperty name="memberDTO" property="user_id" />
<jsp:setProperty name="memberDTO" property="user_pw" />
<jsp:setProperty name="memberDTO" property="user_name" />
<jsp:setProperty name="memberDTO" property="user_hp" />
<jsp:setProperty name="memberDTO" property="user_email" />


<%
  PrintWriter script = response.getWriter();
  if(memberDTO.getUser_id() == null || memberDTO.getUser_pw() == null || memberDTO.getUser_name() == null || memberDTO.getUser_hp() == null || memberDTO.getUser_email() == null ){
    script.println("<script>alert('모든 값 입력하세요!')");
    script.println("history.go(-1);</script>");
  }
  else{
    MemberDAO memberDAO = new MemberDAO();
    int result = memberDAO.insert(memberDTO);
    if(result == -1){
%>
      <script>
        alert('잘못되거나 중복된 아이디입니다.\n확인하고 다시 시도해주세요');
        history.go(-1);
      </script>
<%
    }
    else{
%>
      <script>
        alert('회원가입 축하드립니다.\n 감사합니다.');
        window.location.href = './index.jsp';
      </script>
<%
    }
  }
%>
  
