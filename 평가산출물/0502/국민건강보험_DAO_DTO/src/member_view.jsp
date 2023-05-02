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

<%
  Class.forName("com.mysql.jdbc.Driver");
  Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/hyukjin", "root", "1234");
  String SQL = "SELECT * FROM member2";
  Statement stmt = conn.createStatement();
  ResultSet rs = stmt.executeQuery(SQL);
%>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>회원 리스트</title>
  <link rel="stylesheet" href="./css/view.css">
</head>
<body>

  <div id="wrap">
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>사업장관리번호</th>
          <th>사업장기호</th>
          <th>단위사업장기호</th>
          <th>아이디</th>
          <th>비밀번호</th>
          <th>비밀번호 분실 질문</th>
          <th>비밀번호 질문 답변</th>
          <th>전화번호</th>
          <th>업무담당자명</th>
          <th>이메일</th>
          <th>소식지 수신여부</th>
          <th>가입 날짜</th>
        </tr>
      </thead>
      <tbody>
        <%
          while(rs.next()){
        %>

            <tr>
              <td><%=rs.getString("idx")%></td>
              <td><%=rs.getString("num")%></td>
              <td><%=rs.getString("symbol1")%></td>
              <td><%=rs.getString("symbol2")%></td>
              <td><%=rs.getString("id")%></td>
              <td><%=rs.getString("pw")%></td>
              <td><%=rs.getString("pw_q")%></td>
              <td><%=rs.getString("pw_a")%></td>
              <td><%=rs.getString("hp")%></td>
              <td><%=rs.getString("manager_name")%></td>
              <td><%=rs.getString("email")%></td>
              <td><%=rs.getString("message")%></td>
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