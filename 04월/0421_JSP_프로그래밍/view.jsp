<%@
  page
  language="java"
  contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"
%>

<% request.setCharacterEncoding("UTF-8"); %>

<%@
  page
  import="java.sql.*"
%>

<%
  Class.forName("com.mysql.jdbc.Driver");
  Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/hyukjin","root", "1234");
  String SQL = "SELECT * FROM member";
  Statement stmt = conn.createStatement();
  ResultSet rs = stmt.executeQuery(SQL);


%>



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>View Form</title>
  <link rel="stylesheet" href="./css/view.css">
</head>
<body>
  
  <div id="wrap">
    <table>
      <caption>회원목록</caption>
      <thead>
        <tr>
          <th>번호</th>
          <th>아이디</th>
          <th>비밀번호</th>
          <th>성별</th>
          <th>가입경로</th>
          <th>주소지</th>
          <th>메모</th>
          <th>생성날짜</th>
        </tr>
      </thead>
      <tbody>
        <%
        while(rs.next()){
        %>
          <tr>
            <td><%=rs.getString("idx")%></td>
            <td><%=rs.getString("id")%></td>
            <td><%=rs.getString("pw")%></td>
            <td><%=rs.getString("gender")%></td>
            <td><%=rs.getString("path")%></td>
            <td><%=rs.getString("addr")%></td>
            <td><%=rs.getString("memo")%></td>
            <td><%=rs.getDate("create_date")%></td>
          </tr>
        <%
          }
        %>
      </tbody>
    </table>
  </div>

</body>
</html>