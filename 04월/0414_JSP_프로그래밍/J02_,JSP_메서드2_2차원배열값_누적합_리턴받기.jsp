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
  <title>J02_,JSP_메서드2_2차원배열값_누적합_리턴받기</title>
</head>
<body>

  <%!
    static String rowSum(int[][] arr){
      String txt = "";
      txt += "<table>";
      txt += "<tr>" + "<td colspan='5'>2차원배열</td>" + "<td>누적합</td>" + "</tr>";
      for(int i=0; i<arr.length; i++){
        txt += "<tr>";
        int hap = 0;
        for(int j=0; j<arr[i].length; j++){
          hap += arr[i][j];
          txt +="<td>" + arr[i][j] + "</td>";
        }
        txt += "<td>" + hap + "</td>";
        txt += "</tr>";
      }
      txt += "</table>";
      return txt;
    }
  %>

  <%
    int[][] arr = {{1,2,3,4,5}, {6,7,8,9,10}, {11,12,13,14,15}, {16,17,18,19,20}, {21,22,23,24,25}};
    out.println(rowSum(arr));
  %>

  <style>
    table{
      width : 700px;
      margin : 100px auto;
      border-collapse: collapse;
    }
    table td{
      text-align: center;
      border : 1px solid #ccc;
      height : 50px;
    }
  </style>
  
</body>
</html>