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
  <title>Document</title>
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>

  <div id="wrap">
    <div class="title">
      <h1>회원가입</h1>
    </div>
    <form action="member_insert_action.jsp">
      <ul>
        <li><input type="text" name="user_id" id="userId" placeholder="아이디 입력"></li>
        <li><input type="text" name="user_pw" id="userPw" placeholder="비밀번호 입력"></li>
        <li><input type="text" name="user_name" id="userName" placeholder="이름 입력"></li>
        <li><input type="text" name="user_hp" id="userHp" placeholder="전화번호 입력"></li>
        <li><input type="text" name="user_email" id="userEmail" placeholder="이메일 입력"></li>
      </ul>
      <button type="submit">가입</button>
    </form>
  </div>
  
</body>
</html>