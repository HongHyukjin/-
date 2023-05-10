package naver;
import java.sql.*;
import java.util.*;

public class UserDAO {
  private Connection conn;
  private PreparedStatement ps;
  private ResultSet rs;

  public UserDAO(){
    try{    
      // 변수설정
      String URL = "jdbc:mysql://localhost:3306/hyukjin";
      String ID  = "root";
      String PW  = "1234";

      // 1. 데이테베이스 드라이버(JDBC)
      Class.forName("com.mysql.jdbc.Driver");
      System.out.println("JDBC Driver 로드성공!");

      // 2. 데이테베이스 컨넥션 인증&인가(URL, ID, PW))
      conn = DriverManager.getConnection(URL, ID, PW);
      System.out.println("데이터베이스 Connection 연결성공!");
    }
    catch(Exception e){
        e.printStackTrace();
    }
  }

  public int signup(UserDTO userDTO){
    String SQL = "INSERT INTO naver_table(id,pw,name,birth,gender,email,nation,hp) VALUES(?,?,?,?,?,?,?,?)";
    try{
      ps = conn.prepareStatement(SQL);
      ps.setString(1, userDTO.getId());
      ps.setString(2, userDTO.getPw1());
      ps.setString(3, userDTO.getName());
      ps.setString(4, userDTO.getBirthYear()+userDTO.getBirthMonth()+userDTO.getBirthDay());
      ps.setString(5, userDTO.getGender());
      ps.setString(6, userDTO.getEmail());
      ps.setString(7, userDTO.getNation());
      ps.setString(8, userDTO.getHp());
      return ps.executeUpdate();
    }
    catch(Exception e){
      e.printStackTrace();
    }
    return -1;
  }

  public int signin(UserDTO userDTO){
    String SQL = "SELECT * FROM naver_table WHERE id=? AND pw=?";
    try{
      ps = conn.prepareStatement(SQL);
      ps.setString(1, userDTO.getId());
      ps.setString(2, userDTO.getPw1()); 
      rs = ps.executeQuery();
      if(rs.next()){
        return 1;
      }
      else{
        return -1;
      }
    }
    catch(Exception e){
      e.printStackTrace();
    }
    return -1;
  }

  public int update(UserDTO userDTO){
    String SQL = "UPDATE naver_table SET pw=?,name=?,birth=?,gender=?,email=?,nation=?,hp=? WHERE id=?";
    try{
      ps = conn.prepareStatement(SQL);
      ps.setString(1, userDTO.getPw1());
      ps.setString(2, userDTO.getName());
      ps.setString(3, userDTO.getBirthYear()+userDTO.getBirthMonth()+userDTO.getBirthDay());
      ps.setString(4, userDTO.getGender());
      ps.setString(5, userDTO.getEmail());
      ps.setString(6, userDTO.getNation());
      ps.setString(7, userDTO.getHp());
      ps.setString(8, userDTO.getId());
      return ps.executeUpdate();
    }
    catch(Exception e){
      e.printStackTrace();
    }
    return -1;
  }

  public UserDTO getJoin(String id){
    UserDTO userDTO = new UserDTO();
    String SQL = "SELECT * FROM naver_table WHERE id=?";
    try{
      ps = conn.prepareStatement(SQL);
      ps.setString(1, id);
      rs = ps.executeQuery();
      if(rs.next()){
        userDTO.setId(id);
        userDTO.setPw1(rs.getString("pw"));
        userDTO.setName(rs.getString("name"));
        userDTO.setBirthYear(rs.getString("birth").substring(0,4));
        userDTO.setBirthMonth(rs.getString("birth").substring(4,5));
        userDTO.setBirthDay(rs.getString("birth").substring(5,6));
        userDTO.setGender(rs.getString("gender"));
        userDTO.setEmail(rs.getString("email"));
        userDTO.setNation(rs.getString("nation"));
        userDTO.setHp(rs.getString("hp"));
        userDTO.setCreate_date(rs.getString("create_date"));
      }
    }
    catch(Exception e){
      e.printStackTrace();
    }
    return userDTO;
  }

  public int delete(UserDTO userDTO){
    String SQL = "DELETE FROM naver_table WHERE id=? AND pw=?";
    try{
      ps = conn.prepareStatement(SQL);
      ps.setString(1, userDTO.getId());
      ps.setString(2, userDTO.getPw1());
      return ps.executeUpdate();
    }
    catch(Exception e){
      e.printStackTrace();
    }

    return -1;
  }

  public List<UserDTO> getJoinList(){
    UserDTO userDTO = null;
    List<UserDTO> list = new ArrayList<>();
    String SQL = "SELECT * FROM naver_table";
    try{
        ps = conn.prepareStatement(SQL);
        rs = ps.executeQuery(); 
        while(rs.next()){
            userDTO = new UserDTO();
            userDTO.setId(rs.getString("id"));
            userDTO.setPw1(rs.getString("pw"));
            userDTO.setName(rs.getString("name"));
            userDTO.setBirthYear(rs.getString("birth").substring(0,4));
            userDTO.setBirthMonth(rs.getString("birth").substring(4,5));
            userDTO.setBirthDay(rs.getString("birth").substring(5,6));
            userDTO.setGender(rs.getString("gender"));
            userDTO.setEmail(rs.getString("email")); 
            userDTO.setNation(rs.getString("nation")); 
            userDTO.setHp(rs.getString("hp"));
            userDTO.setCreate_date(rs.getString("create_date"));
            list.add(userDTO);
        }
    }
    catch(Exception e){
        e.printStackTrace();
    }
    finally{
        try{
            if(rs != null){rs.close();}
            if(ps != null){ps.close();}
            if(conn != null){conn.close();}
        }
        catch(Exception e){

        }
    }

    return list;
}

}
