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
  <style>
    *{
      margin : 0;
      padding : 0;
      vertical-align: middle;
      box-sizing: border-box;
    }
    #wrap{
      width : 100%;
      padding : 0;
      position: relative;
    }
    #wrap .title{

      width : 100%;
      position: relative;
      z-index: 2;
    }
    #wrap .title h1{
      /* color : #000;
      background: #fff; */
    }
    #wrap img{
      /* display: block; */
      z-index: 1;
      position: absolute;
      top : 0;
      left : 0;
      width : 700px;
      height : auto;
    }
  </style>
</head>
<body>

  <div id="wrap">
    <div class="title">
      <h1>아아아아</h1>
    </div>
    <img src="../img/KakaoTalk_20230502_135320833.png" alt="">
  </div>
  
</body>
</html>