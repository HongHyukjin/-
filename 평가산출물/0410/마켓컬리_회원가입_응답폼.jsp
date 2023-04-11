<%@
  page
  language="java"
  contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"
%>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>마켓컬리 회원가입 응답폼</title>
  <style>
    table{
      width : 1000px;
      margin : 100px auto;
      border-collapse: collapse;
    }
    table th,td{
      border : 1px solid #ccc;
      text-align: center;
    }
  </style>
</head>
<body>

  <%
    String user_id = request.getParameter("user_id");
    String user_pw1 = request.getParameter("user_pw1");
    String user_pw2 = request.getParameter("user_pw2");
    String user_name = request.getParameter("user_name");
    String user_email = request.getParameter("user_email");
    String user_hp = request.getParameter("user_hp");
    String user_addr = request.getParameter("user_addr");
    String user_gender = request.getParameter("user_gender");
    String user_addinput = request.getParameter("user_addinput");
    String[] user_agree = request.getParameterValues("user_agree");
  %>
  
  <table>
    <thead>
      <tr>
        <th>아이디</th>
        <th>비밀번호</th>
        <th>비밀번호확인</th>
        <th>이름</th>
        <th>이메일</th>
        <th>휴대폰</th>
        <th>주소</th>
        <th>성별</th>
        <th>추가입력사항</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><%=user_id%></td>
        <td><%=user_pw1%></td>
        <td><%=user_pw2%></td>
        <td><%=user_name%></td>
        <td><%=user_email%></td>
        <td><%=user_hp%></td>
        <td><%=user_addr%></td>
        <td><%=user_gender%></td>
        <td><%=user_addinput%></td>
      </tr>
      <tr>
        <th>이용약관동의</th>
      </tr>
      <tr>
        <%
          for(int i=0; i < user_agree.length; i++){
            out.println("<td>" + user_agree[i] + "</td>");
          }
        %>
      </tr>
    </tbody>
  </table>

</body>
</html>