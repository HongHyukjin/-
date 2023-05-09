<%@
  page
  language="java"
  contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"
%>

<%@ page import="member.MemberDAO" %>
<%@ page import="java.io.PrintWriter" %>

<% request.setCharacterEncoding("UTF-8"); %>

<jsp:useBean id="memberDTO" class="member.MemberDTO" scope="page" />
<jsp:setProperty name="memberDTO" property="*" />

<%
  if(
    memberDTO.getNum()==null ||
    memberDTO.getSymbol1()==null ||
    memberDTO.getSymbol2()==null ||
    memberDTO.getId()==null ||
    memberDTO.getPw()==null ||
    memberDTO.getPw_q()==null ||
    memberDTO.getPw_a()==null ||
    memberDTO.getHp()==null ||
    memberDTO.getManager_name()==null ||
    memberDTO.getEmail()==null ||
    memberDTO.getMessage()==null
  ){
%>
    <script>
      alert("빈 항목을 모두 입력하세요!");
      history.back();
    </script>
<%
  }
  else{
    MemberDAO memberDAO = new MemberDAO();
    int result = memberDAO.insert(memberDTO);
    if(result == -1){
%>
    <script>
      alert("사업장 관리번호가 중복되었습니다. \n 확인해주세요!");
      history.back();
    </script>
<%
    }
    else{
%>
    <script>
      alert("등록되었습니다.!");
      window.location.href="./index.jsp";
    </script>
<%     
    }
  }
%>
