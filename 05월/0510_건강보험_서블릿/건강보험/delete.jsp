<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>


<% // 폼 전송 받은 한글 깨짐현상 셋팅 인코딩
    request.setCharacterEncoding("UTF-8");
%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>
    <div id="wrap">
        <%
            String loginId=null;
            if(session.getAttribute("menu1")!=null){
                loginId =(String) session.getAttribute("menu1");
            }
        %>
        <section id="section">
            <div class="container">
                <div class="gap">
                    <div class="title">
                        <h2>회원탈퇴</h2>
                    </div>
                    <div class="content">                        
                        <div class="row3">
                            <form name="bohum_form" id="bohumForm" method="POST" action="delete_action.jsp">
                                <label for="menu1">
                                    <span>아이디<i><img src="./img/ico-compulsory.png" alt=""></i></span>
                                    <input type="text" name="menu1" id="menu1" placeholder="영문+숫자 6~10자 이내" required value="<%=loginId%>">
                                    <button type="button">아이디 중복검색</button>
                                    
                                </label>
                                
                                <label for="menu5">
                                    <span>비밀번호<i><img src="./img/ico-compulsory.png" alt=""></i></span>
                                    <input type="text" name="menu5" id="menu5" placeholder="영문+ 숫자+특수문자(!@#$) 각 1자 이상 포함하여 9~12자 이내" required>
                                </label>
                                <div class="btn-box">
                                    <em><button type="submit" class="btn3">확인</button></em>
                                    <button type="button">취소</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</body>

</html>