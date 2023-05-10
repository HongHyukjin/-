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
        int result = bohumDAO.delete(bohumDTO);
%>
    <% if(result>=1){ %>
    <script>
        alert("회원탈퇴가 완료 되었습니다.")
        window.location.href="./main.jsp";
    </script>
<%
        session.invalidate();
        }
        else if(result==0){
%>
            <script>
                alert("비밀번호를 다시 확인해주세요.");
                history.go(-1);
            </script>    
<%
        }
        else {
%>
            <script>
                alert("아이디를 다시 확인해주세요.");
                history.go(-1);
            </script>
<%        
    }
}
%>
