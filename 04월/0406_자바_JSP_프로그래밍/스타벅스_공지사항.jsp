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
  <title>스타벅스 공지사항</title>
</head>
<style>
  ul{
    width:100%; 
    max-width:1100px; 
    margin:0 auto;
  }
  ul li{
    width:100%;
    height : 63px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
  }
  ul li a{
    padding:10px 20px;
    font-size: 16px;
    color : #666;
  }
  ul li a:nth-child(2){
    width : 750px;
  }
  ul li a:nth-child(4){
    width : 80px;
  }
</style>
<body>

  <%
    int[] arr1 = {425, 424, 423, 422, 421, 420, 419, 418, 417, 416};
    String[] arr2 = {"시스템 개선 및 서비스 점검 안내",
                     "시스템 개선 및 서비스 점검 안내",
                     "탄소중립포인트 인센티브 지급 기준 안내",
                     "스타벅스 코리아 사칭 홈페이지 및 이메일 주의 안내",
                     "Summer 시즌 사이렌 오더 음료 기본 설정 변경 안내",
                     "시스템 개선 및 서비스 점검 안내",
                     "탄소중립실천포인트제 도입 안내",
                     "영상정보처리기기 운영방침 / 위치정보 이용약관 / 개인정보처리방침 이용약관 개정 안내",
                     "시스템 개선 및 서비스 점검 안내",
                     "설 연휴 스타벅스 딜리버스 운영 안내"
                    };
    String[] arr3 = {"2023-04-04",
                     "2023-03-27",
                     "2023-03-23",
                     "2023-03-20",
                     "2023-03-17",
                     "2023-02-17",
                     "2023-02-02",
                     "2023-02-02",
                     "2023-01-27",
                     "2023-01-20"
                    };
    int[] arr4 = {1480, 1721, 26001, 3705, 21038, 3377, 20654, 2135, 1879, 9036};
  %>

  <h1 style="text-align: center;">스타벅스 공지사항 출력하기</h1>
  <%
      out.println("<ul>");
      for(int i=0; i<10; i++){
        out.println("<li><a>" + arr1[i] + "</a><a> " + arr2[i] + "</a><a> " + arr3[i] + "</a><a> " + arr4[i] + "</a></li>");
      }
      out.println("</ul>");
  %> 


</body>
</html>