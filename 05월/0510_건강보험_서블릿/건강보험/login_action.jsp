<%@
    page
    language = "java"
    contentType = "text/html; charset=UTF-8"
    pageEncoding = "UTF-8"
%>

<%@ page import = "bohum.BohumDAO"%>

<% request.setCharacterEncoding("UTF-8"); %>

<jsp:useBean id="bohumDTO" class="bohum.BohumDTO"/>
<jsp:setProperty name="bohumDTO" property="menu1"/>
<jsp:setProperty name="bohumDTO" property="menu5"/>
<%
    if(
        bohumDTO.getMenu1()==null ||
        bohumDTO.getMenu5()==null 
    ){
%>
        <script>
            alert("빈값은 허용하지 않습니다.")
            history.go(-1);
        </script>

<%        
    }
    else{
        BohumDAO bohumDAO = new BohumDAO();
        int result = bohumDAO.login(bohumDTO.getMenu1(), bohumDTO.getMenu5());
%>
    <% 
        if(result==1){ 
        session.setAttribute("menu1",bohumDTO.getMenu1());
    %>

    <script>
        alert("로그인 되었습니다.")
        
        location.href = './main.jsp';
    </script>
<%
        }
        else if(result==0){
%>
            <script>
                alert("비밀번호를 다시 확인해주세요.")
                history.go(-1);
            </script>    
<%
        }
        else if(result==-1){
%>
            <script>
                alert("아이디를 다시 확인해주세요.")
                history.go(-1);
            </script>
<%
        }  
        else{
%>
            <script>
                alert("아이디가 없습니다. 회원가입해주세요")
                window.location.href="./insert.jsp";
            </script>
<%
        }     
    }
%>
