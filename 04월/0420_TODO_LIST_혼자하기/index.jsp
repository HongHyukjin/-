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
  <title>TODO LIST</title>
  <link rel="stylesheet" href="./css/style.css">

</head>
<body>
  
  <div id="wrap">
    <form name="todo_list_form" id="todo_list_form" method="post" action="./todo_list_write.jsp">
      <table>
        <tr>
          <th>TODO LIST</th>
        </tr>
        <td>
          <input type="text" name="todo" id="todo" placeholder="TODO LIST">
        </td>
      </table>
      <button type="submit">저장</button>
    </form>
  </div>

</body>
</html>