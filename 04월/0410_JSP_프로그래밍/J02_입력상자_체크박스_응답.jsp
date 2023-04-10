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
  <title>관심있는 언어과목 체크박스 응답페이지</title>
</head>
<body>
  
  <!-- 배열로 요청받기
  출력은 배열을 이용 출력
  반복문 -->

  <%
    String name = request.getParameter("user_name");
    String[] language = request.getParameterValues("chk"); //여러개 값받는다.
  %>

  <ul>
    <li><%=name%></li>
    <%
      for(int i=0; i<language.length; i++){
        out.println("<li>" + language[i] + "</li>");
      }
    %>
  </ul>

  <style>
    *{
      margin : 0; padding : 0; vertical-align: middle; box-sizing: border-box;
    }
    ul{
      width : 100%;
      margin : 100px 0;
    }
    ul li{
      width : 100%;
      text-align: center;
      font-size: 30px;
      padding : 10px 0;
    }
  </style>

</body>
</html>