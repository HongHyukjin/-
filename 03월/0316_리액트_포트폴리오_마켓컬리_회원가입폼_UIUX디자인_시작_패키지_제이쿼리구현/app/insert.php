<?
  //1. Database 데이터베이스　접근권한
  // gurwlszx.dothome.co.kr/signup_db/insert.php
  // http://gurwlszx.dothome.co.kr/signup_db/insert.php
  //signup_db
  $db_server      = 'localhost';
  $db_user_name   = 'gurwlszx';
  $db_password    = 'okju0503!!';
  $db_name        = 'gurwlszx';

  $conn = mysqli_connect($db_server, $db_user_name, $db_password, $db_name);
  mysqli_set_charset($conn, 'utf8');

  if(!$conn){
    die('데이터베이스 접근실패!');
  }
  else{
    echo('데이터베이스 접근성공!');
  }

  //필드명(Field===item===attribute===column)
  // id, pw, name, email, hp, addr, gender, birth, chooga, service, gaib_date

  $sql = "INSERT INTO signup_table(id, pw, irum, email, hp, addr, gender, birth, chooga, services, gaib_date) 
            VALUES
            ('gurwls1', '1234', '홍혁진', 'gurwlszx@naver.com', '01096629052', '은평구', '남성', '19970503', '마켓컬리 일일세일', '이용약관동의필수,개인정보 수집∙이용 동의필수','20230316'),
            ('gurwls2', '1234', '홍혁진', 'gurwlszx@naver.com', '01096629052', '은평구', '남성', '19970503', '마켓컬리 일일세일', '이용약관동의필수,개인정보 수집∙이용 동의필수','20230316'),
            ('gurwls3', '1234', '홍혁진', 'gurwlszx@naver.com', '01096629052', '은평구', '남성', '19970503', '마켓컬리 일일세일', '이용약관동의필수,개인정보 수집∙이용 동의필수','20230316'),
            ('gurwls4', '1234', '홍혁진', 'gurwlszx@naver.com', '01096629052', '은평구', '남성', '19970503', '마켓컬리 일일세일', '이용약관동의필수,개인정보 수집∙이용 동의필수','20230316'),
            ('gurwls5', '1234', '홍혁진', 'gurwlszx@naver.com', '01096629052', '은평구', '남성', '19970503', '마켓컬리 일일세일', '이용약관동의필수,개인정보 수집∙이용 동의필수','20230316')";
  
  $result = mysqli_query($conn, $sql);

  if(!$result){
    echo('데이터베이스 테이블에 회원정보 저장실패');
  }
  else{
    echo('데이터베이스 테이블에 회원정보 저장성공');
  }

?>
