package gaib;
import java.sql.*;
public class GaibDAO {
  private Connection conn = null;
  private Statement stmt = null;
  private PreparedStatement ps = null;
  private ResultSet rs = null;

  public GaibDAO(){
    try{
      String dbURL = "jdbc:mysql://localhost:3306/user";
      String dbID = "root";
      String dbPW = "1234";
      Class.forName("com.mysql.jdbc.Driver");
      conn = DriverManager.getConnection(dbURL, dbID, dbPW);
    }
    catch(Exception e){
      e.printStackTrace();
    }
  }

  public int signup(GaibDTO gaibDTO){
    try{
      String SQL = "INSERT INTO gaib_table(user_id,user_pw,user_name,user_hp,user_email,user_addr) VALUES(?,?,?,?,?,?)";
      ps = conn.prepareStatement(SQL);
      ps.setString(1, gaibDTO.getUser_id());
      ps.setString(2, gaibDTO.getUser_pw());
      ps.setString(3, gaibDTO.getUser_name());
      ps.setString(4, gaibDTO.getUser_hp());
      ps.setString(5, gaibDTO.getUser_email());
      ps.setString(6, gaibDTO.getUser_addr());
      return ps.executeUpdate();
    }
    catch(Exception e){
      e.printStackTrace();
    }
    return -1;
  }

  public int signin(GaibDTO gaibDTO){
    try{
      String SQL = "SELECT * FROM gaib_table";
      stmt = conn.createStatement();
      rs = stmt.executeQuery(SQL); 
      rs.last();
      int size = rs.getRow();
      return size;
    }
    catch(Exception e){
      e.printStackTrace();
    }
    return -1;
  }

  public int update(GaibDTO gaibDTO){
    try{
      String SQL = "UPDATE gaib_table SET user_pw=?,user_name=?,user_hp=?,user_email=?,user_addr=? WHERE user_id=?";
      ps = conn.prepareStatement(SQL);
      ps.setString(1, gaibDTO.getUser_pw());
      ps.setString(2, gaibDTO.getUser_name());
      ps.setString(3, gaibDTO.getUser_hp()); 
      ps.setString(4, gaibDTO.getUser_email());
      ps.setString(5, gaibDTO.getUser_addr());
      ps.setString(6, gaibDTO.getUser_id());
      return ps.executeUpdate();
    }
    catch(Exception e){
      e.printStackTrace();
    }
    return -1;
  }

  public int delete(GaibDTO gaibDTO){
    try{
      String SQL = "DELETE FROM gaib_talbe WHERE user_id=?";
      ps = conn.prepareStatement(SQL);
      ps.setString(1, gaibDTO.getUser_id());
      return ps.executeUpdate();
    }
    catch(Exception e){
      e.printStackTrace();
    }
    return -1;
  }
}
