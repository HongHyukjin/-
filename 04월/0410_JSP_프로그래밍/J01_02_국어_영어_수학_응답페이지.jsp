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
  <title>성적 출력폼</title>
</head>
<body>
  
  <%
    int user_kor = Integer.parseInt(request.getParameter("user_kor"));
    int user_eng = Integer.parseInt(request.getParameter("user_eng"));
    int user_math = Integer.parseInt(request.getParameter("user_math"));
    int tot = user_kor + user_eng + user_math;
    float avg = tot / 3;
  %>

  <table style="border-collapse:collapse;border:1px solid #ccc; width:500px; margin:0 auto;">
    <thead style="border:1px solid #ccc; height:50px;">
      <tr>
        <th>국어</th>
        <th>영어</th>
        <th>수학</th>
        <th>총점</th>
        <th>평균</th>
      </tr>
    </thead>
    <tbody style="height:50px;">
      <tr>
        <th><%=user_kor%></th>
        <th><%=user_eng%></th>
        <th><%=user_math%></th>
        <th><%=tot%></th>
        <th><%=String.format("%3.2f", avg)%></th>
      </tr>
    </tbody>
  </table>

</body>
</html>