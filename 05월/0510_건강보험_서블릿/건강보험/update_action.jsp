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
%>
    <script>
        alert('입력이 안 된 항목이 있습니다. \n 확인하고 다시 시도해주세요. ');
        history.go(-1);
    </script>
<%
        
    }
    
    else{
        BohumDAO bohumDAO = new BohumDAO();
        int result = bohumDAO.update(bohumDTO);
        if(result== -1){
%>
                <script>
                    alert('잘못된 아이디이거나 중복된 아이디 입니다 \n확인하고 다시 시도해주세요.');    
                    history.go(-1);
                </script>
    <%                
            }
            else{
    %>
                
                <script>    
                    alert('수정이완료되었습니다.');
                  window.location.href='./main.jsp';
                </script>

    <%
            }
        }

        
    %>


