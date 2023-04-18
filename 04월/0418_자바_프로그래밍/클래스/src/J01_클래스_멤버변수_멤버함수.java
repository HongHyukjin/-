public class J01_클래스_멤버변수_멤버함수 {
  public static void main(String[] args) {
    멤버회원 new멤버회원 = new 멤버회원();

    new멤버회원.이름 = "이순신";
    new멤버회원.나이 = 27;
    new멤버회원.시력 = 1.5;
    new멤버회원.취미 = "보드";
    new멤버회원.주소 = "한산도";

    //멤버함수 호출 실행
    new멤버회원.show_method();
  }
}
