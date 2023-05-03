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
<jsp:setProperty name="memberDTO" property="pw" />
<jsp:setProperty name="memberDTO" property="name" />
<jsp:setProperty name="memberDTO" property="birth_year" />
<jsp:setProperty name="memberDTO" property="birth_month" />
<jsp:setProperty name="memberDTO" property="birth_day" />
<jsp:setProperty name="memberDTO" property="gender" />
<jsp:setProperty name="memberDTO" property="email" />
<jsp:setProperty name="memberDTO" property="nation" />
<jsp:setProperty name="memberDTO" property="hp" />

<%
    if(
        memberDTO.getId()==null || 
        memberDTO.getPw()==null ||
        memberDTO.getName()==null ||
        memberDTO.getBirth_year()==null ||
        memberDTO.getBirth_month()==null ||
        memberDTO.getBirth_day()==null ||
        memberDTO.getGender()==null ||
        memberDTO.getEmail()==null ||
        memberDTO.getNation()==null ||
        memberDTO.getHp()==null
    ){
%>
<script>
    alert("모든 항목을 입력하세요!");
    history.back();
</script>
<%
    }
    else{
        MemberDAO memberDAO = new MemberDAO();
        int result = memberDAO.insert(memberDTO);
        if(result == -1){
%>
<script>
    alert("중복된 아이디입니다");
    history.back();
</script>
<%
        }
        else{
%>
<script>
    alert("회원가입이 완료되었습니다!");
    history.back();
</script>
<%
        }
    }
%>