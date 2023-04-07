<%@
  page
  language="java"
  contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"
%>

<% request.setCharacterEncoding("UTF-8");%>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>수강신청 결과</title>
  <style>
    table{
      width : 50%;
      margin : 0 auto;
      border-collapse: collapse;
    }
    table th{
      background: #ccc;
    }
    table th,td{
      text-align: center;
      border : 1px solid #999;
      height : 50px;
    }
    table td{
      color : #00f;
    }
  </style>
</head>
<body>
  
  <%
    String user_number = request.getParameter("user_number");
    String user_name = request.getParameter("user_name");
    String user_grade = request.getParameter("user_grade");
    String user_object = request.getParameter("user_object");
  %>

  <table>
    <thead>
      <th>학번</th>
      <th>이름</th>
      <th>학년</th>
      <th>선택과목</th>
    </thead>
    <tbody>
      <tr>
        <td><%=user_number%></td>
        <td><%=user_name%></td>
        <td><%=user_grade%></td>
        <td><%=user_object%></td>
      </tr>
    </tbody>
  </table>

</body>
</html>