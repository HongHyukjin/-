package member;
import java.sql.*;

public class MemberDAO {
  private Connection conn = null;
  private PreparedStatement ps = null;
  public MemberDAO(){
    try{
      String DBURL = "jdbc:mysql://localhost:3306/user";
      String DBID = "root";
      String DBPW = "1234";
      Class.forName("com.mysql.jdbc.Driver");
      conn = DriverManager.getConnection(DBURL, DBID, DBPW);
      System.out.println("데이터베이스 연결 성공!");
    }
    catch(Exception e){
      e.printStackTrace();
    }
    
  }

  // 입력(가입) 메서드
  public int insert(MemberDTO memberDTO){
    String SQL = "INSERT INTO member_table() VALUES(?,?,?,?,?)";
    try{
      ps = conn.prepareStatement(SQL);
      ps.setString(1, memberDTO.getUser_id());
      ps.setString(2, memberDTO.getUser_pw());
      ps.setString(3, memberDTO.getUser_name());
      ps.setString(4, memberDTO.getUser_hp());
      ps.setString(5, memberDTO.getUser_email());
      return ps.executeUpdate();
    }
    catch(Exception e){
      e.printStackTrace();
    }
    return -1;
  }

  public int update(MemberDTO memberDTO){
    String SQL = "UPDATE member_table SET user_pw = ? WHERE user_id = ?";
    try{
      ps = conn.prepareStatement(SQL);
      ps.setString(1, memberDTO.getUser_pw());
      ps.setString(2, memberDTO.getUser_id());
      return ps.executeUpdate();
    }
    catch(Exception e){
      e.printStackTrace();
    }
    return -1;
  }

}
