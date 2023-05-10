<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>


<% // 폼 전송 받은 한글 깨짐현상 셋팅 인코딩
    request.setCharacterEncoding("UTF-8");
%>

<%@ page import = "bohum.BohumDAO" %>
<%@ page import = "bohum.BohumDTO" %>
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
            String loginId = null;
            if(session.getAttribute("menu1")!=null){
                loginId=(String)session.getAttribute("menu1");
            }
        %>

        <%
            BohumDAO bohumDAO = new BohumDAO();
            BohumDTO bohumDTO = bohumDAO.getJoin(loginId);
        %>
        <section id="section">
            <div class="container">
                <div class="gap">
                    <div class="title">
                        <h2>회원가입정보수정</h2>
                    </div>
                    <div class="content">
                        <div class="row1">
                            <ul>
                                <li><em>01</em> 약관동의</li>
                                <li><img src="./img/arrow-progress-on-2.png" alt=""><em>02</em> 수정정보입력</li>
                                <li><img src="./img/arrow-progress-on.png" alt=""><em>03</em> 수정완료</li>
                            </ul>
                        </div>
                        <div class="row2">
                            <p>
                                개인(직장가입자)이 아닌 <strong>사업장업무를 위한 회원가입</strong>입니다.
                                사업장관리번호 및 단위 사업장 기호가 다른 경우에는 각각 회원가입을 하셔야 합니다
                                예) 건설현장 사업장마다 사업장관리번호가 각각 적용되오니 회원가입도 각각 하셔야 해당 업무를 이용하실 수 있습니다.
                            </p>
                        </div>
                        <div class="row3">
                            <p><i><img src="./img/ico-compulsory.png" alt=""></i>표는 필수 입력 사항이며, [동일아이디검색] 및 [가입여부확인] 버튼을
                                반드시 눌러주세요.</p>
                            <form name="bohum_form" id="bohumForm" method="POST" action="update_action.jsp">
                                <label for="menu1">
                                    <span>아이디<i><img src="./img/ico-compulsory.png" alt=""></i></span>
                                    <input type="text" name="menu1" id="menu1" placeholder="영문+숫자 6~10자 이내" required value="<%=loginId%>">
                                    <button type="button">아이디 중복검색</button>
                                    
                                </label>
                                <label for="menu2">
                                    <span>사업장관리번호<i><img src="./img/ico-compulsory.png" alt=""></i></span>
                                    <input type="text" name="menu2" id="menu2" required value="<%=bohumDTO.getMenu2()%>"  >
                                    <button type="button"class="btn1">사업장관리번호 확인</button>
                                    <button type="button" class="btn2">사업장관리번호 확인방법</button>
                                </label>
                                <label for="menu3">
                                    <span>사업장기호<i><img src="./img/ico-compulsory.png" alt=""></i></span>
                                    <input type="text" name="menu3" id="menu3" placeholder="사업장관리번호확인 버튼을 클릭하여 검증하시면 자동입력 됩니다." required value="<%=bohumDTO.getMenu3()%>">
                                </label>
                                <label for="menu4" class="menu4">
                                    <span>단위사업장기호<i><img src="./img/ico-compulsory.png" alt=""></i></span>  
                                    <button type="button">단위사업장검색</button>                                  
                                    <input type="text" name="menu4" id="menu4" required value="<%=bohumDTO.getMenu4()%>">
                                    
                                    <button type="button">가입여부 확인하기(실명확인)</button>
                                </label>
                                
                                <label for="menu5">
                                    <span>비밀번호<i><img src="./img/ico-compulsory.png" alt=""></i></span>
                                    <input type="text" name="menu5" id="menu5" placeholder="영문+ 숫자+특수문자(!@#$) 각 1자 이상 포함하여 9~12자 이내" required value="<%=bohumDTO.getMenu5()%>">
                                </label>
                                <label for="menu6">
                                    <span>비밀번호확인<i><img src="./img/ico-compulsory.png" alt=""></i></span>
                                    <input type="text" name="menu6" id="menu6" placeholder="영문+ 숫자+특수문자(!@#$) 각 1자 이상 포함하여 9~12자 이내" required value="<%=bohumDTO.getMenu6()%>">
                                </label>
                                <label for="menu7">
                                    <span>비밀번호 분실 시 확인 질문<i><img src="./img/ico-compulsory.png" alt=""></i></span>
                                    <select name="menu7" id="menu7">
                                        <option value="질문선택" <% if(bohumDTO.getMenu7().equals("질문선택")) {%> selected="selected" <%}%> >질문선택</option>
                                        <option value="사람인가요?" <% if(bohumDTO.getMenu7().equals("사람인가요?")) {%> selected="selected" <%}%>>사람인가요?</option>
                                        <option value="이상형" <% if(bohumDTO.getMenu7().equals("이상형")) {%> selected="selected" <%}%>>이상형</option>
                                    </select>
                                </label>
                                <label for="menu8">
                                    <span>비밀번호 분실 시 확인 답변<i><img src="./img/ico-compulsory.png" alt=""></i></span>
                                    <input type="text" name="menu8" id="menu8" placeholder="조회 답변은 띄어쓰기 포함 10자 이내" required value="<%=bohumDTO.getMenu8()%>">
                                </label>
                                <label for="menu9">
                                    <span>전화번호<i><img src="./img/ico-compulsory.png" alt=""></i></span>
                                    <input type="text" name="menu9" id="menu9" placeholder="“-(하이픈)” 없이 입력 (예 : 01012345678)" required value="<%=bohumDTO.getMenu9()%>">
                                </label>
                                <label for="menu10">
                                    <span>업무담당자명<i><img src="./img/ico-compulsory.png" alt=""></i></span>
                                    <input type="text" name="menu10" id="menu10" placeholder="사업장의 소속된 직장 가입자 직원 또는 대표자" required value="<%=bohumDTO.getMenu10()%>">
                                </label>
                                <label for="menu11" class="menu11">
                                    <span>이메일<i><img src="./img/ico-compulsory.png" alt=""></i></span>
                                    <input type="text" name="menu11" id="menu11" 
                                        required value="<%=bohumDTO.getMenu11()%>">
                                    <select name="email" id="email">
                                        <option value="직접입력">직접입력</option>
                                        <option value="hanmail">hanmail</option>
                                        <option value="naver">naver</option>
                                        <option value="gmail">gmail</option>
                                    </select>
                                </label>
                                <div class="menu12">
                                    <span>소식지 수신여부<i><img src="./img/ico-compulsory.png" alt=""></i></span>
                                    <label for="okno">
                                        <input type="radio" name="menu12" id="ok" value="받음" required <% if(bohumDTO.getMenu12().equals("받음")) {%> checked="checked" <%}%> >받음
                                    </label>
                                    <label for="">
                                        <input type="radio" name="menu12" id="no" value="안받음" required <% if(bohumDTO.getMenu12().equals("안받음")) {%> checked="checked" <%}%> >안받음(공단의 다양한 소식을 무료로 만나보세요)
                                    </label>
                                </div>
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