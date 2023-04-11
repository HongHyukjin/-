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
  <title>행, 열 응답폼</title>

  <style>
    table{
      width : 500px;
      margin : 100px auto;
      border-collapse: collapse;
    }
    table td{
      border : 1px solid #ccc;
      height : 50px;
      text-align: center;
    }
  </style>

</head>
<body>
  <%
    int row = Integer.parseInt(request.getParameter("row"));
    int col = Integer.parseInt(request.getParameter("col"));
    int[][] arr = new int[row][col];
  %>

  <table>
    <tbody>
      <%
        for(int i = 0; i < row; i++){
          out.println("<tr>");
          for(int j = 0; j < col; j++){
            arr[i][j] = (int)(Math.random()*26+65);
            out.println("<td>" + (char)arr[i][j] + "</td>");
          }
          out.println("</tr>");
        }
      %>
    </tbody>
  </table>


</body>
</html>