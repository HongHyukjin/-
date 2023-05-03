package member;
import java.sql.*;

public class MemberDAO {
    private Connection conn = null;
    private PreparedStatement ps = null;

    public MemberDAO(){
        try{
            String dbURL = "jdbc:mysql://localhost:3306/hyukjin";
            String dbID = "root";
            String dbPW = "1234";
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(dbURL, dbID, dbPW);
        }
        catch(Exception e){
            e.printStackTrace(); 
        }
    }

    public int insert(MemberDTO memberDTO){
        String SQL = "INSERT INTO member(id,pw,name,birth,gender,email,nation,hp) VALUES(?,?,?,?,?,?,?,?)";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, memberDTO.getId());
            ps.setString(2, memberDTO.getPw());
            ps.setString(3, memberDTO.getName());
            ps.setString(4, memberDTO.getBirth_year()+memberDTO.getBirth_month()+memberDTO.getBirth_day());
            ps.setString(5, memberDTO.getGender());
            ps.setString(6, memberDTO.getEmail());
            ps.setString(7, memberDTO.getNation());
            ps.setString(8, memberDTO.getHp());
            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();
        }

        return -1;
    }

    public int delete(MemberDTO memberDTO){
        String SQL = "DELETE FROM member WHERE id=?";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, memberDTO.getId());
            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();
        }

        return -1;
    }
}
