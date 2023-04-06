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
  <title>반복문 구현하기</title>
</head>
<body>

  <h1>반복문 for 구현하기</h1>

  <h3>문자열 배열 생성하기</h3>
  <%
    String[] str_arr = {"JAVA", "JSP", "REACT", "NODE", "SASS", "PHP", "VUE", "JQUERY", "JAVASCRIPT", "TYPESCRIPT"};
  %>
  <h3>문자열 배열 출력하기 for문</h3>
  <%
    for(int i=0; i<str_arr.length; i++){
      out.println("<p style='background:#f0f0f0;'><em style='font-style: normal; color:#08a;'>" + str_arr[i] + "<br></em></p>");
    }
  %>

  <h3>문자열 배열 출력하기 while문</h3>
  <%
    int i = 0;
    while(i<str_arr.length){
      out.println("<div><i>" + str_arr[i] + "<br></i></div>");
      i++;
    }
  %>
  
</body>
</html>