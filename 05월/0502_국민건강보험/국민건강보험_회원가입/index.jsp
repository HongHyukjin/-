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
        #wrap{
            width : 100%;
            position: relative;
            display: flex;
            justify-content: center;
        }
        #wrap .title{
            width : 100%;
            position: absolute;
            top : 0;
            left : 0;
            z-index: 2;
            text-align: center;
        }
        #wrap .title h1{
            width : 100%;
            font-size: 50px;
            padding: 100px 0 0 0;
            color : #fff;
        }
        #wrap img{
            width : 700px;
            position: relative;
            z-index: 1;
        }
    </style>
</head>
<body>
    <div id="wrap">
        <div class="title">
            <h1>축하요~</h1>
        </div>
        <img src="./img/dog.jpg" alt="">
    </div>
</body>
</html>