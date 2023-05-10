<%@
    page
    language = "java"
    contentType = "text/html; charset=UTF-8"
    pageEncoding = "UTF-8"
%>
<%@ page import = "bohum.BohumDAO" %>
<%@ page import = "bohum.BohumDTO" %>
<%@ page import = "java.util.*" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>건강보험공단</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <div id="wrap">
        <section id="signup" class="main">
            <div class="container">
                <div class="title">
                    <h2>건강보험공단</h2>
                </div>
                    <%
                        String loginId = null;
                        if(session.getAttribute("menu1") !=null){
                            loginId = (String) session.getAttribute("menu1");
                        }
                        if(loginId==null){
                    %>


                <div class="content">
                    <h3>접속하기</h3>
                    <ul>
                        <li><a href="./login.jsp">로그인</a></li>
                        <li><a href="./insert.jsp">회원가입</a></li>
                    </ul>
                </div>
                <%
                    }
                    else{
                %>
                <div class="content">
                    <div class="content">
                        <h3>회원관리</h3>
                        <h4>회원[<%= loginId%>]님</h4>
                        <ul>
                            <li><a href="./update.jsp">개인정보수정</a></li>
                            <li><a href="./delete.jsp">회원탈퇴</a></li>
                            <li><a href="./logout.jsp">로그아웃</a></li>                        
                        </ul>
                    </div>
                </div>
                
            </div>

            <div class="get-join-list">
                <table>
                    <caption>회원목록</caption>
                    <tr>
                        <th>아이디</th>
                        <th>사업장관리번호</th>
                        <th>사업장기호</th>
                        <th>단위사업장기호</th>
                        <th>비밀번호</th>
                        <th>비밀번호확인</th>
                        <th>비밀번호 분실 시 확인 질문</th>
                        <th>비밀번호 분실 시 확인 답변</th>
                        <th>전화번호</th>
                        <th>업무담당자명</th>
                        <th>이메일</th>
                        <th>소식지 수신여부</th>
                    </tr>
            <%
                BohumDAO bohumDAO = new BohumDAO();
                List<BohumDTO> list = new ArrayList<>();
                list = bohumDAO.getJoinlist();

                if(list.size()==0){
                    out.println("<script>alert('없음');</script>");
                }
                else{
                    for(BohumDTO item : list){
            %>
                    <tr>
                        <td><%= item.getMenu1()%></td>
                        <td><%= item.getMenu2()%></td>
                        <td><%= item.getMenu3()%></td>
                        <td><%= item.getMenu4()%></td>
                        <td><%= item.getMenu5()%></td>
                        <td><%= item.getMenu6()%></td>
                        <td><%= item.getMenu7()%></td>
                        <td><%= item.getMenu8()%></td>
                        <td><%= item.getMenu9()%></td>
                        <td><%= item.getMenu10()%></td>
                        <td><%= item.getMenu11()%></td>
                        <td><%= item.getMenu12()%></td>
                    </tr>
            <%
                    }
                }
            %>  
              </table>
              <%
                }
              %>
            </div>
        </section>
    </div>
</body>
</html>