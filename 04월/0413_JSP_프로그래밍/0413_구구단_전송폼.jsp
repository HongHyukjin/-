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
  <title>구구단 단수 전송폼</title>
  <style>
    form{
      width : 500px;
      margin : 100px auto;
    }
    form label{
      width : 100%;
      padding : 30px 0;
    }
    form label input{
      width : 100%;
      padding : 30px 0;
      margin : 20px 0;
      text-align: center;
      border-radius: 8px;
      border : 1px solid #ccc;
      font-size: 16px;
    }
    form label input::placeholder{
      color : #000;
    }
    form label input[type='submit']{
      cursor: pointer;
    }
  </style>
</head>
<body>
  <form name="gugudan" id="gugudan" method="get" action="./0413_구구단_응답폼.jsp" onsubmit="return onSubmitForm()">
    <label for="sdan">
      <input type="text" name="sdan" id="sdan" placeholder="시작단을 입력해주세요!">
    </label>
    <label for="edan">
      <input type="text" name="edan" id="edan" placeholder="종료단을 입력해주세요!">
    </label>
    <label for="">
      <input type="submit" value="전송하기">
    </label>
  </form>
  <script>
    function onSubmitForm(){
      let sdan = document.getElementById('sdan').value;
      let edan = document.getElementById("edan").value;
      // alret(sdan);
      if(sdan < 2 || sdan > 9){
        alert("시작단은 2~9 사이의 숫자를 입력해주세요");
        return false;
      }
      if(edan < 2 || edan > 9){
        alert("종료단은 2~9 사이의 숫자를 입력해주세요");
        return false;
      }
      if(edan < sdan){
        alert("종료단은 시작단보다 작을수 없습니다!");
        return false;
      }
      return true;
    }
  </script>
</body>
</html>