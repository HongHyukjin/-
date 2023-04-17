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
  <title>쿠키설정</title>
  <style>
    body{
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>쿠키 설정 하기</h1>
  <%
      // 1. 쿠키 설정(생성)하기
      // Cookie newCookie = new Cookie("키(key)", "값(value)");
      Cookie newCookie = new Cookie("HHJ_cookie1", "첫번째쿠키값입니다");
      response.addCookie(newCookie);  // 쿠키 추가

      Cookie newCookie2 = new Cookie("HHJ_cookie2", "두번째쿠키값입니다");
      newCookie2.setPath("/");  //path=/
      response.addCookie(newCookie2); // 쿠키 추가

      Cookie newCookie3 = new Cookie("HHJ_cookie3", "세번째쿠키값입니다");
      newCookie3.setPath("/");
      response.addCookie(newCookie3);

      Cookie newCookie4 = new Cookie("HHJ_cookie4", "네번째쿠키값입니다");
      newCookie4.setPath("/");
      //newCookie4.setMaxage()     // 만료일(Expires Maxage) 60초 * 60분 * 24시간
      // newCookie4.setMaxage()     // 만료일(Expires Maxage) 60초 * 60분 * 24시간 
      // newCookie4.setMaxage()     // 만료일(Expires Maxage) 60초 * 60분 * 1시간
      // newCookie4.setMaxage()     // 만료일(Expires Maxage) 60초 * 60분 * 2시간
      // newCookie4.setMaxage()     // 만료일(Expires Maxage) 60초 * 60분 * 3시간
      // newCookie4.setMaxage()     // 만료일(Expires Maxage) 60초 * 60분 * 10시간
      // newCookie4.setMaxage()     // 만료일(Expires Maxage) 60초 * 60분 * 24시간 * 2
      // newCookie4.setMaxage()     // 만료일(Expires Maxage) 60초 * 60분 * 24시간 * 3
      // newCookie4.setMaxage()     // 만료일(Expires Maxage) 60초 * 60분 * 24시간 * 7
      // newCookie4.setMaxage()     // 만료일(Expires Maxage) 60초 * 60분 * 24시간 * 10
      // newCookie4.setMaxage()     // 만료일(Expires Maxage) 60초 * 60분 * 24시간 * 30
      // newCookie4.setMaxAge(60*60*24);
      newCookie4.setMaxAge(60*60*1);
      response.addCookie(newCookie4);


  %>
  
</body>
</html>