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
  String id = request.getParameter("id");
  String pw = request.getParameter("pw");
  String gender = request.getParameter("gender");
  String path = request.getParameter("path");
  String addr = request.getParameter("addr");
  String memo = request.getParameter("memo");
%>

<%
  Class.forName("com.mysql.jdbc.Driver");
  Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/hyukjin","root", "1234");
  String SQL = "INSERT INTO member(id,pw,gender,path,addr,memo) VALUES(?,?,?,?,?,?)";
  PreparedStatement ps = conn.prepareStatement(SQL);
  ps.setString(1, id);
  ps.setString(2, pw);
  ps.setString(3, gender);
  ps.setString(4, path);
  ps.setString(5, addr);
  ps.setString(6, memo);
  ps.executeUpdate();

  ps.close();
  conn.close();
  
%>

<script>
  location.href = "./view.jsp";
</script>