package kurly;
import java.sql.*;
public class UserDAO {
  private Connection conn;
  private PreparedStatement ps;
  private ResultSet rs;

  public UserDAO(){
    try{
      String URL = "jdbc:mysql://localhost:3306/user";
      String ID = "root";
      String PW = "1234";
      Class.forName("com.mysql.jdbc.Driver");
      conn = DriverManager.getConnection(URL, ID, PW);
    }
    catch(Exception e){
      e.printStackTrace();
    }
  }

  //1. 회원가입 signup
  public int signup(UserDTO userDTO){ 
    try{
      String SQL = "INSERT INTO kurly_table(user_id,user_pw,user_name,user_email,user_hp,user_addr,user_gender,user_birth) VALUES(?,?,?,?,?,?,?,?)";
      ps = conn.prepareStatement(SQL);
      ps.setString(1, userDTO.getUser_id());
      ps.setString(2, userDTO.getUser_pw());  
      ps.setString(3, userDTO.getUser_name()); 
      ps.setString(4, userDTO.getUser_email());
      ps.setString(5, userDTO.getUser_hp());
      ps.setString(6, userDTO.getUser_addr());
      ps.setString(7, userDTO.getUser_gender());
      ps.setString(8, userDTO.getUser_birth_year()+userDTO.getUser_birth_month()+userDTO.getUser_birth_date());
      return ps.executeUpdate();
    } 
    catch(Exception e){
      e.printStackTrace();
    }
    return -1;
  }

  //2. 회원로그인 signin
  public int signin(String user_id, String user_pw){
    try{
      String SQL = "SELECT user_pw FROM kurly_table WHERE user_id=?";
      ps = conn.prepareStatement(SQL);
      ps.setString(1, user_id);
      rs = ps.executeQuery();
      
      if(rs.next()){
        if(rs.getString(1).equals(user_pw)){
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
    catch(Exception e){
      e.printStackTrace();
    }
    return -2;
  }

  //3. 회원정보수정 update
  public int update(UserDTO userDTO){
    try{
      String SQL = "UPDATE kurly_table SET user_pw=?,user_name=?,user_email=?,user_hp=?,user_addr=?,user_gender=?,user_birth=? WHERE user_id=?";
      ps = conn.prepareStatement(SQL);
      ps.setString(1, userDTO.getUser_pw());
      ps.setString(2, userDTO.getUser_name());
      ps.setString(3, userDTO.getUser_email());
      ps.setString(4, userDTO.getUser_hp());
      ps.setString(5, userDTO.getUser_addr());
      ps.setString(6, userDTO.getUser_gender());
      ps.setString(7, userDTO.getUser_birth_year()+userDTO.getUser_birth_month()+userDTO.getUser_birth_date());
      ps.setString(8, userDTO.getUser_id());
      return ps.executeUpdate();
    } 
    catch(Exception e){
      e.printStackTrace();
    }
    return -1;
  }

  //4. 회원탈퇴처리(회원정보삭제) delete
  public int delete(UserDTO userDTO){
      try{
        String SQL = "DELETE FROM kurly_table WHERE user_id=? AND user_pw=?";
        ps = conn.prepareStatement(SQL);
        ps.setString(1, userDTO.getUser_id());
        ps.setString(2, userDTO.getUser_pw());
        return ps.executeUpdate();
      } 
      catch(Exception e){
        e.printStackTrace();
      }
    return -1;
  }

}
