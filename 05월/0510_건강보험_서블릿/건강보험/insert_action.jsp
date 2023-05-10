<%@
    page
    language="java" 
    contentType ="text/html; charset=UTF-8"
    pageEncoding = "UTF-8"
%>

<%@ page import = "bohum.BohumDAO"%>
<%@ page import = "java.io.PrintWriter"%>
<% 
    request.setCharacterEncoding("UTF-8");
%>


<jsp:useBean id="bohumDTO" class="bohum.BohumDTO" scope="page"/>
<jsp:setProperty name="bohumDTO" property="menu1"/>
<jsp:setProperty name="bohumDTO" property="menu2"/>
<jsp:setProperty name="bohumDTO" property="menu3"/>
<jsp:setProperty name="bohumDTO" property="menu4"/>
<jsp:setProperty name="bohumDTO" property="menu5"/>
<jsp:setProperty name="bohumDTO" property="menu6"/>
<jsp:setProperty name="bohumDTO" property="menu7"/>
<jsp:setProperty name="bohumDTO" property="menu8"/>
<jsp:setProperty name="bohumDTO" property="menu9"/>
<jsp:setProperty name="bohumDTO" property="menu10"/>
<jsp:setProperty name="bohumDTO" property="menu11"/>
<jsp:setProperty name="bohumDTO" property="menu12"/>


<%
if(bohumDTO.getMenu1() == null || bohumDTO.getMenu2() == null || bohumDTO.getMenu3() == null || bohumDTO.getMenu4() == null || bohumDTO.getMenu5() == null || bohumDTO.getMenu6() == null || bohumDTO.getMenu7() == null || bohumDTO.getMenu8() == null || bohumDTO.getMenu9() == null || bohumDTO.getMenu10() == null || bohumDTO.getMenu11() == null || bohumDTO.getMenu12() == null ){

    PrintWriter script = response.getWriter();
    script.println(" <script> ") ;
    script.println("alert('빈값이 있는 항목이 있습니다 .\\n확인하고 다시 시도해주세요.')");
    script.println("history.back()");
    script.println(" </script> ");
        
    }
    
    else{
        BohumDAO bohumDAO = new BohumDAO();
        int result = bohumDAO.insert(bohumDTO);
        if(result==-1){
        
    %>
                <script>
                    alert('아이디와 비밀번호를 다시 확인해 주세요');    
                    history.go(-1);
                </script>
    <%                
            }
            else{
            session.setAttribute("menu1",bohumDTO.getMenu1());
    %>
                
                <script>
                  alert('회원가입을 축하드립니다.');
                  window.location.href='./main.jsp';
                </script>

    <%
            }
        }

        
    %>


