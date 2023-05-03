<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import="member.MemberDAO" %>

<% request.setCharacterEncoding("UTF-8"); %>

<jsp:useBean id="memberDTO" class="member.MemberDTO" scope="page"/>
<jsp:setProperty name="memberDTO" property="id" />


<%
    if(
        memberDTO.getId()==null
    ){
%>
<script>
    alert("아이디를 입력하세요!");
    history.back();
</script>
<%
    }
    else{
        MemberDAO memberDAO = new MemberDAO();
        int result = memberDAO.delete(memberDTO);
        if(result == -1){
%>
<script>
    alert("존재하지 않는 아이디입니다!");
    history.back();
</script>
<%
        }
        else{
%>
<script>
    alert("회원탈퇴가 완료되었습니다!");
    history.back();
</script>
<%
        }
    }
%>