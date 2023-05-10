package bohum;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
 
/**
 * BohumDAO
 */
public class BohumDAO {
    private Connection conn;
    private PreparedStatement ps;
    private ResultSet rs;

    public BohumDAO(){
        try{
            String dbURL = "jdbc:mysql://localhost:3306/user";
            String dbID = "root";
            String dbPW = "1234";
            
            Class.forName("com.mysql.jdbc.Driver");

            conn = DriverManager.getConnection(dbURL,dbID,dbPW);



        }
        catch(Exception e){
            e.printStackTrace();
        }

    }

    public int insert(BohumDTO bohumDTO){
        String SQL = "INSERT INTO bohum VALUES(?,?,?,?,?,?,?,?,?,?,?,?)";

        try{
            ps=conn.prepareStatement(SQL);
            ps.setString(1,bohumDTO.getMenu1());
            ps.setString(2,bohumDTO.getMenu2());
            ps.setString(3,bohumDTO.getMenu3());
            ps.setString(4,bohumDTO.getMenu4());
            ps.setString(5,bohumDTO.getMenu5());
            ps.setString(6,bohumDTO.getMenu6());
            ps.setString(7,bohumDTO.getMenu7());
            ps.setString(8,bohumDTO.getMenu8());
            ps.setString(9,bohumDTO. getMenu9());
            ps.setString(10,bohumDTO.getMenu10());
            ps.setString(11,bohumDTO.getMenu11());
            ps.setString(12,bohumDTO.getMenu12());
            return ps.executeUpdate();

        }
        catch(Exception e){
            e.printStackTrace();
        }
        finally{
            try {
                if(rs !=null){rs.close();}
                if(ps !=null){ps.close();}
                if(conn !=null){conn.close();}
            } 
            catch (Exception e) {
             e.printStackTrace();
            }
        }
        return -1;
    }

    public int login(String menu1, String menu5){
        String SQL = "SELECT menu5 FROM bohum WHERE menu1 = ?";        

        try {
            ps =conn.prepareStatement(SQL);
            ps.setString(1, menu1);  
            rs=ps.executeQuery();
            if(rs.next()){
                if(rs.getString(1).equals(menu5)){
                    return 1;
                }
                else{
                    return 0;
                }
            }
            else{
                return -1;
            }
        }  
        catch (Exception e) {
            e.printStackTrace();
        }
        finally{
            try {
                if(rs !=null){rs.close();}
                if(ps !=null){ps.close();}
                if(conn !=null){conn.close();}
            } 
            catch (Exception e) {
             e.printStackTrace();
            }
        }
        return -2;
    }

    public int update(BohumDTO bohumDTO){
        String SQL = "UPDATE bohum SET menu2=?, menu3=?, menu4=?, menu5=?, menu6=?, menu7=?, menu8=?, menu9=?, menu10=?, menu11=?, menu12=? WHERE menu1=? ";

        try{
            ps=conn.prepareStatement(SQL);
            
            ps.setString(1, bohumDTO.getMenu2());
            ps.setString(2, bohumDTO.getMenu3());
            ps.setString(3, bohumDTO.getMenu4());
            ps.setString(4, bohumDTO.getMenu5());
            ps.setString(5, bohumDTO.getMenu6());
            ps.setString(6, bohumDTO.getMenu7());
            ps.setString(7, bohumDTO.getMenu8());
            ps.setString(8, bohumDTO.getMenu9());
            ps.setString(9, bohumDTO.getMenu10());
            ps.setString(10, bohumDTO.getMenu11());
            ps.setString(11, bohumDTO.getMenu12());
            ps.setString(12, bohumDTO.getMenu1());
            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();
        }
        finally{
            try {
                if(rs !=null){rs.close();}
                if(ps !=null){ps.close();}
                if(conn !=null){conn.close();}
            } 
            catch (Exception e) {
             e.printStackTrace();
            }
        }
        return -1;
    }

    public int delete(BohumDTO bohumDTO){
        String SQL = "DELETE FROM bohum WHERE menu1 = ? AND menu5 = ?";
        try {
            ps=conn.prepareStatement(SQL);
            ps.setString(1, bohumDTO.getMenu1());
            ps.setString(2, bohumDTO.getMenu5());
            return ps.executeUpdate();
        } 
        catch (Exception e) {
        e.printStackTrace();
        }
        finally{
            try {
                if(rs !=null){rs.close();}
                if(ps !=null){ps.close();}
                if(conn !=null){conn.close();}
            } 
            catch (Exception e) {
             e.printStackTrace();
            }
        }
        return -1;

    }

    public BohumDTO getJoin(String menu1){
        BohumDTO bohumDTO = new BohumDTO();

        String SQL = "SELECT * FROM bohum WHERE menu1 = ?";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, menu1);
            rs=ps.executeQuery();

            if(rs.next()){
                bohumDTO.setMenu1(menu1);
                bohumDTO.setMenu2(rs.getString("menu2"));
                bohumDTO.setMenu3(rs.getString("menu3"));
                bohumDTO.setMenu4(rs.getString("menu4"));
                bohumDTO.setMenu5(rs.getString("menu5"));
                bohumDTO.setMenu6(rs.getString("menu6"));
                bohumDTO.setMenu7(rs.getString("menu7"));
                bohumDTO.setMenu8(rs.getString("menu8"));
                bohumDTO.setMenu9(rs.getString("menu9"));
                bohumDTO.setMenu10(rs.getString("menu10"));
                bohumDTO.setMenu11(rs.getString("menu11"));
                bohumDTO.setMenu12(rs.getString("menu12"));
            }
        } 
        catch (Exception e) {
            e.printStackTrace();
        }
        finally{
            try {
                if(rs !=null){rs.close();}
                if(ps !=null){ps.close();}
                if(conn !=null){conn.close();}
            } 
            catch (Exception e) {
             e.printStackTrace();
            }
        }
        return bohumDTO;
    }

    public List<BohumDTO> getJoinlist(){
        BohumDTO bohumDTO;
        List<BohumDTO> list = new ArrayList<>();

        String SQL = "SELECT * FROM bohum";

        try {
            ps=conn.prepareStatement(SQL);
            rs=ps.executeQuery();
            while(rs.next()){
                bohumDTO = new BohumDTO();
                bohumDTO.setMenu1(rs.getString("menu1"));
                bohumDTO.setMenu2(rs.getString("menu2"));
                bohumDTO.setMenu3(rs.getString("menu3"));
                bohumDTO.setMenu4(rs.getString("menu4"));
                bohumDTO.setMenu5(rs.getString("menu5"));
                bohumDTO.setMenu6(rs.getString("menu6"));
                bohumDTO.setMenu7(rs.getString("menu7"));
                bohumDTO.setMenu8(rs.getString("menu8"));
                bohumDTO.setMenu9(rs.getString("menu9"));
                bohumDTO.setMenu10(rs.getString("menu10"));
                bohumDTO.setMenu11(rs.getString("menu11"));
                bohumDTO.setMenu12(rs.getString("menu12"));

                list.add(bohumDTO);
            }
        } 
        catch (Exception e) {
            e.printStackTrace();
        }
        finally{
            try {
                if(rs !=null){rs.close();}
                if(ps !=null){ps.close();}
                if(conn !=null){conn.close();}
            } 
            catch (Exception e) {
             e.printStackTrace();
            }
        }
        return list;

    }
    
}