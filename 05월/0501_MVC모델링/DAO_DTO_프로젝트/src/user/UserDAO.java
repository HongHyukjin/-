package user;
import java.sql.*;
/**
 * UserDAO
 */
public class UserDAO {
  // 접근객체 Connection 커넥션
  // 사용자 데이터베이스 url/이름 : user
  // 사용자 데이터베이스아이디 : root
  // 사용자 데이터베이스비밀번호 : 1234
  private Connection conn;

  public UserDAO(){
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

  // 데이터 입력 메서드 만들기
  public int insert(UserDTO userDTO){
    String SQL = "INSERT INTO user_table(user_id, user_pw, user_name, user_hp, user_email) VALUES(?,?,?,?,?)";
    try{
      PreparedStatement ps = conn.prepareStatement(SQL);
      ps.setString(1, userDTO.getUser_id());
      ps.setString(2, userDTO.getUser_pw());
      ps.setString(3, userDTO.getUser_name());
      ps.setString(4, userDTO.getUser_hp());
      ps.setString(5, userDTO.getUser_email());
      return ps.executeUpdate();
    }
    catch(Exception e){
      e.printStackTrace();
    }

    return -1;
  }

  // public static void main(String[] args) {
  //   UserDAO userDAO = new UserDAO();
  //   UserDTO userDTO = new UserDTO();
  //   userDTO.setUser_id("gurwlszx");
  //   userDTO.setUser_pw("12345678");
  //   userDTO.setUser_name("홍혁진");
  //   userDTO.setUser_hp("01096629052");
  //   userDTO.setUser_email("gurwlszx@naver.com");
  //   System.out.println(userDAO.insert(userDTO));
  // }
  
}