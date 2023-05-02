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
  if(memberDTO.getUser_id() == null || memberDTO.getUser_pw() == null || memberDTO.getUser_name() == null || memberDTO.getUser_hp() == null || memberDTO.getUser_email() == null){
%>

    <script>
        alert('입력이 안된 항목이 있습니다..\n확인하고 다시 시도해주세요');
        history.go(-1);
    </script>
<%
  }
  else{
    MemberDAO memberDAO = new MemberDAO();
    int result = memberDAO.update(memberDTO);
    if(result <= 0){
%>
      <script>
        alert('수정할 회원정보가 없습니다.\n확인하고 다시 시도해주세요');
        history.go(-1);
      </script>
<%
    }
    else{
%>
      <script>
        alert('수정이 완료되었습니다.');
        window.location.href = './index.jsp';
      </script>
<%
    }
  }
%>
  
