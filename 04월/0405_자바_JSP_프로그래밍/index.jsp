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
  <title>마켓컬리</title>

  <style>
    *{
      margin : 0;
      padding : 0;
      vertical-align: middle;
      box-sizing: border-box;
    }
    ul{
      list-style: none;
    }
    #wrap{width : 100%;}
    #wrap #header{
      width : 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height : 100px;
      background: #333;
    }
    #wrap #header a{
      margin : 0 10px;
      color : #fff; 
      font-size : 16px;
      font-weight: 500;
      text-decoration: none;
    }
    #wrap #header a:hover{
      text-decoration: underline;
    }
    #wrap #main{width : 100%;}
    #wrap #main section{
      display: flex;
      align-items: center;
      justify-content: center;
      color : #fff;
      font-size: 100px;
      text-transform: uppercase;
    }
    #wrap #main #section1{
      width : 100%;
      height: 100vh;
      background: #cc9;
    }
    #wrap #main #section2{
      width : 100%;
      height: 100vh;
      background: #c9c;
    }
    #wrap #main #section3{
      width : 100%;
      height: 100vh;
      background: #9c9;
    }
    #wrap #main #section4{
      width : 100%;
      height: 100vh;
      background: #99c;
    }
    #wrap #main #section5{
      width : 100%;
      height: 100vh;
      background: #c9c;
    }

    #wrap #footer{
      width : 100%;
      height: 300px;
      background: #444;
    }
  </style>
</head>
<body>

  <div id="wrap">
    <script>
      ((parameter)=>{
        console.log(parameter);
        console.log(parameter.currentEntry.url.split("=")[1]);
        console.log(parameter.currentEntry.url.indexOf("="));
        let start = parameter.currentEntry.url.indexOf("=") + 1;
        console.log(parameter.currentEntry.url.substr(start));
      })(window.navigation);
    </script>
    <%
      String selectPage = request.getParameter("pageChange");

      if(selectPage == null){
        selectPage = "./main.jsp";
      }
    %>

    <jsp:include page="./header.jsp" flush="false"/>
    <jsp:include page="<%=selectPage%>" flush="false"/>
    <jsp:include page="./footer.jsp" flush="false"/>\
  </div>

</body>
</html>