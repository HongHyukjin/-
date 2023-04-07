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
  <title>수강신청</title>
  <style>
    form{
      width : 50%;
      margin : 0 auto;
    }
    form label{
      display: flex;
      justify-content: center;
      padding : 20px 0;
      width : 100%;
    }
    form label input[type=text],select{
      width : 200px;
      height : 40px;
      text-align: center;
      border-radius: 5px;
      border : 1px solid #ddd;
    }
    form label input[type=radio]{
      appearance: none;
      width : 20px;
      height : 20px;
      border-radius: 50%;
      border : 1px solid #f00;
    }
    form label input[type=radio]:checked{
      background: #f00;
    }
    form input[type=submit]{
      display: block;
      width : 100%;
      max-width: 200px;
      height : 50px;
      margin : 0 auto;
      background: #000;
      color : #fff;
      cursor: pointer;
      border-radius: 5px;
      border : 0;
    }
  </style>
  
</head>
<body>
  <form name="soogang_sinchung" id="soogangSinchung" method="POST" action="./수강신청결과.jsp">
    <label for=""><input type="text" name="user_number" id="userNumber" placeholder="학번을 입력하세요"></label>
    <label for=""><input type="text" name="user_name" id="userName" placeholder="이름을 입력하세요"></label>
    <label for="userGrade">
      <input type="radio" name="user_grade" id="userGrade" value="1학년"> 1학년
      <input type="radio" name="user_grade" id="userGrade" value="2학년"> 2학년
      <input type="radio" name="user_grade" id="userGrade" value="3학년"> 3학년
      <input type="radio" name="user_grade" id="userGrade" value="4학년"> 4학년
    </label>
    <label for="userObject">
      <select name="user_object" id="userObject">
        <option value="" selected>과목을 선택하세요</option>
        <option value="국어">국어</option>
        <option value="수학">수학</option>
        <option value="영어">영어</option>
        <option value="한국사">한국사</option>
        <option value="과학">과학</option>
      </select>
    </label>
    <input type="submit" value="선택완료">
    
  </form>
</body>
</html>