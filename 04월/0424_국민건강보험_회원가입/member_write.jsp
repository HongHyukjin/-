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
  String num = request.getParameter("num");
  String symbol1 = request.getParameter("symbol1");
  String symbol2 = request.getParameter("symbol2");
  String id = request.getParameter("id");
  String pw = request.getParameter("pw1");
  String pw_q = request.getParameter("pw_q");
  String pw_a = request.getParameter("pw_a");
  String hp = request.getParameter("hp");
  String manager_name = request.getParameter("manager_name");
  String email = request.getParameter("email");
  String message = request.getParameter("message");
%>

<%
  Class.forName("com.mysql.jdbc.Driver");
  Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/hyukjin", "root", "1234");
  String SQL = "INSERT INTO member2(num,symbol1,symbol2,id,pw,pw_q,pw_a,hp,manager_name,email,message) VALUES(?,?,?,?,?,?,?,?,?,?,?)";
  PreparedStatement ps = conn.prepareStatement(SQL);
  ps.setString(1,num);
  ps.setString(2,symbol1);
  ps.setString(3,symbol2);
  ps.setString(4,id);
  ps.setString(5,pw);
  ps.setString(6,pw_q);
  ps.setString(7,pw_a);
  ps.setString(8,hp);
  ps.setString(9,manager_name);
  ps.setString(10,email);
  ps.setString(11,message);
  ps.executeUpdate();
  ps.close();
  conn.close();
%>

<script>
  location.href="./member_view.jsp"; 
</script>