<%@
  page
  language="java"
  contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"
%>

<%@ page import="user.UserDAO" %>
<%@ page import="user.UserDTO" %>
<%@ page import="java.io.PrintWriter" %>
<%
  request.setCharacterEncoding("UTF-8");
%>

<jsp:useBean id="userDTO" class="user.UserDTO" scope="page"/>
<jsp:setProperty name="userDTO" property="user_id"/>
<jsp:setProperty name="userDTO" property="user_pw"/>
<jsp:setProperty name="userDTO" property="user_name"/>
<jsp:setProperty name="userDTO" property="user_hp"/>
<jsp:setProperty name="userDTO" property="user_email"/>

<%
  PrintWriter script = response.getWriter();
  if(userDTO.getUser_id() == null || userDTO.getUser_pw() == null || userDTO.getUser_name() == null || userDTO.getUser_hp() == null || userDTO.getUser_email() == null){
    script.println("<script>");
    script.println("alert('입력값이 비어있는 항목이 있습니다.\\n 다시 입력하고 시도해주세요')");
    script.println("history.go(-1)");
    script.println("</script>");
  }
  else{
    UserDAO userDAO = new UserDAO();
    // insert() 메서드 실행
    int result = userDAO.insert(userDTO);
    if(result == -1){
      PrintWriter script2 = response.getWriter();
      script2.println("<script>");
      script2.println("alert('중복된 아이디입니다.\\n 다시 입력하고 시도해주세요')");
      script2.println("history.go(-1)");
      script2.println("</script>");
    }
  }
%>