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
  <title>쿠키 가져오기</title>
  <style>
    body{
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>쿠키 가져오기 for</h1>
  <%

    // 쿠키 가져오기 생성자 생성
    Cookie[] cookies = request.getCookies();
    for(int i = 0; i < cookies.length; i++){
      if(cookies[i].getName().equals("HHJ_cookie3"))
        out.println(cookies[i].getName() + " " + cookies[i].getValue() + "<br>");
    }

  %>
  
</body>
</html>