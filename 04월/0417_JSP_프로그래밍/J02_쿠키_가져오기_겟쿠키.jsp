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
  <h1>쿠키 가져오기(getCookie)</h1>
  <%

      // 쿠키 배열 처리
      // Cookie[] 쿠키 = 요청.겟쿠키스();
      Cookie[] cookies = request.getCookies();  //여러개의 쿠키 가져오기

      // 만약 쿠키가 한개도 없다면(null) 수행 안한다.
      // 쿠키가 한개라도 있다면 처리한다.(쿠키값이 널이 아니면)
      if(cookies != null){
        for(Cookie item : cookies){
          String cookieName = item.getName(); //쿠키 키이름 => 쿠키 이름
          String cookieValue = item.getValue(); //쿠키 키이름 => 쿠키 이름
          // 쿠키 이름(키) 검색
          out.println("쿠키 KEY " + cookieName );
          out.println("<br>");
          out.println("쿠키 VALUE " + cookieValue );
          out.println("<br>");
        }
      }

  %>
  
</body>
</html>