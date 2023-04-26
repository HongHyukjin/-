<%@
  page
  language="java"
  contentType="text/html; chareset=UTF-8"
  pageEncoding="UTF-8"
%>

<%@
  page
  import="dto_beans.beansDto"
%>

<%
  beansDto newSungjukBeans = new beansDto();
  newSungjukBeans.setName("홍혁진");
  newSungjukBeans.setKor(100);
  newSungjukBeans.setMat(90);
  newSungjukBeans.setEng(80);
%>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>성적표</title>
  <style>
    body{
      text-align: center;
    }
  </style>
</head>
<body>

  <h1>자바빈즈 DTO 가져오기 게터 getter 함수</h1>
  <h2><%= newSungjukBeans.getName() %></h2>
  <h2><%= newSungjukBeans.getKor() %></h2>
  <h2><%= newSungjukBeans.getMat() %></h2>
  <h2><%= newSungjukBeans.getEng() %></h2>
  
</body>
</html>