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
  <title>구구단 단수 응답폼</title>
  <style>
    table{
      width : 800px;
      margin : 100px auto;
      border-collapse: collapse;
    }
    table th,td{
      border : 1px solid #ccc;
      text-align: center;
      height : 50px;
    }
    table th{
      background: aqua;
    }
  </style>
</head>
<body>

  <%
    int sdan = Integer.parseInt(request.getParameter("sdan"));
    int edan = Integer.parseInt(request.getParameter("edan"));
    int[][] gugudan = new int[9][edan-sdan+1];
    int col = -1;
  %>
  
  <table>
    <thead>
      <tr>
        <%
          for(int i=sdan; i<=edan; i++){
            out.println("<th>" + i + "</th>");
          }
        %>
      </tr>
    </thead>
    <tbody>
      <tr>
        <%
          for(int i = 0; i < 9; i++){
            col = -1;
            for(int j = sdan; j <= edan; j++){
              col++;
              gugudan[i][col] = j * (i+1);
              out.println("<td>" + j + " × " + (i+1) + " = " + gugudan[i][col] + "</td>");
            }
            out.println("</tr>");
          }
        %>
      </tr>
    </tbody>
  </table>

</body>
</html>