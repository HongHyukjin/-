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
  <title>행,열 전송폼</title>

  <style>
    form{
      width : 500px;
      margin : 100px auto;
    }
    form label{
      display: block;
      width : 100%;
      padding : 20px 0;
    }
    form input{
      padding : 20px 0;
      width : 100%;
      border : 1px solid #ddd;
      border-radius: 5px;
      text-align: center;
    }
    form input[type='submit']{
      cursor: pointer;
      background: #000;
      color : #fff;
      font-size: 15px;
    }
  </style>

</head>
<body>
  
  <form name="row_col" id="rowCol" method="get" action="./0411_과제_응답폼.jsp" onsubmit="return onSubmitForm()">
    <label for="row">
      <input type="text" name="row" id="row" placeholder="행의 크기를 입력(1~10)" required autofocus>
    </label>
    <label for="col">
      <input type="text" name="col" id="col" placeholder="열의 크기를 입력(1~10)" required autofocus>
    </label>
    <label for="">
      <input type="submit" value="전송하기">  
    </label>
  </form>

  <script>
    function onSubmitForm(){
      let row = document.getElementById('row').value;
      let col = document.getElementById('col').value;
      if(row < 1 || row > 10){
        alert('행의 크기를 다시 입력해주세요');
        return false;
      }
      if(col < 1 || col > 10){
        alert('열의 크기를 다시 입력해주세요')
        return false;
      }
      return true;
    }
  </script>

</body>
</html>