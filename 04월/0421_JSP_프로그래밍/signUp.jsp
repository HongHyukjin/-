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
  <title>SignUp Form</title>
  <link rel="stylesheet" href="./css/signUp.css">
</head>
<body>
  
  <div id="wrap">
    <h1>회원가입</h1>
    <form name="sign_up" id="singUp" method="post" action="./dbInsert.jsp">
      <label for="id">
        아이디
        <input type="text" name="id" id="id">
      </label>
      <label for="pw">
        비밀번호
        <input type="text" name="pw" id="pw">
      </label>
      <label for="gender" class="gender">
        성별
        <div>
          <input class="radio1" type="radio" name="gender" id="gender" value="남자">남자
          <input class="radio2" type="radio" name="gender" id="gender" value="여자">여자
        </div>
      </label>
      <label for="path">
        가입경로
        <select name="path" id="path">
          <option value="웹검색">웹검색</option>
          <option value="친구추천">친구추천</option>
          <option value="유튜브">유튜브</option>
        </select>
      </label>
      <label for="addr">
        주소지
        <input type="text" name="addr" id="addr">
      </label>
      <label for="memo">
        메모
        <input type="text" name="memo" id="memo">
      </label>
      <button type="submit">가입</button>
    </form>
  </div>

</body>
</html>
