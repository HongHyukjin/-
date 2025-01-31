
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
    <link rel="stylesheet" href="./public/css/style.css">

</head>
<body>
<div id="wrap">
    <section id="signup" class="main">
        <div class="container">
            <div class="title">
                <h2>메인 페이지</h2>
            </div>

            <%
                // 2. 회원가입 페이지에서 가입된 화면처리하기
                // 로그인 유지 회원아이디 변수에 넣어준다
                String loginId = null;
                if( session.getAttribute("user_id") != null ){ // 세션설정된 값 가져오기
                    loginId = (String)session.getAttribute("user_id");
                }

                if(loginId == null){
            %>

            <div class="content">
                <h3>접속하기</h3>
                <ul>
                    <li><a href="./kurly_user_signin.jsp">로그인</a></li>
                    <li><a href="./kurly_user_signup.jsp">회원가입</a></li>
                </ul>
            </div>

            <%
                }
                else{
            %>

            <div class="content">
                <h3>회원관리</h3>
                <h4>회원[<%=loginId%>]님</h4>
                <ul>
                    <li><a href="./kurly_user_update.jsp">개인정보수정</a></li>
                    <li><a href="./kurly_user_delete.jsp">회원탈퇴</a></li>
                    <li><a href="./kurly_user_logout.jsp">로그아웃</a></li>
                </ul>
            </div>

            <%
                }
            %>
            
        </div>
    </section>
</div>
</body>
</html>