package kurly;
import kurly.member.Signup;

public class Gaib {
  public static void main(String[] args) {
    Signup newSignup = new Signup();
    newSignup.setId("gurwlszx");
    newSignup.setPw("0503okju!!");
    newSignup.setName("홍혁진");
    newSignup.setEmail("gurwlszx@naver.com");
    newSignup.setHp("01096629052");
    newSignup.setAddr("연신내");
    newSignup.setGender("남자");
    System.out.println("아이디 : " + newSignup.getId());
    System.out.println("비밀번호 : " + newSignup.getPw());
    System.out.println("이름 : " + newSignup.getName());
    System.out.println("이메일 : " + newSignup.getEmail());
    System.out.println("전화번호 : " + newSignup.getHp());
    System.out.println("주소 : " + newSignup.getAddr());
    System.out.println("성별 : " + newSignup.getGender());
  }
}
