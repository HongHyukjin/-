<%@
  page
  language="java"
  contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"
%>

<%@
  page
  import="java.sql.*"
%>

<%
  request.setCharacterEncoding("UTF-8");
%>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TODO LIST 목록보기</title>
  <link rel="stylesheet" href="./css/view.css">
</head>
<body>

  <%
    Class.forName("com.mysql.jdbc.Driver");
    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/user", "root", "1234");
    Statement stmt = conn.createStatement();
    ResultSet rs = stmt.executeQuery("SELECT * FROM todo_list");
  %>

  <div id="wrap">
    <table>
      <thead>
        <tr>
          <th>글 번호</th>
          <th>할일 목록</th>
          <th>날짜</th>
        </tr>
      </thead>
      <tbody>
        <%
          while(rs.next()){
        %>
          <tr>
            <td><%=rs.getString("idx")%></td>
            <td><%=rs.getString("todo_list")%></td>
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