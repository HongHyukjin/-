public class J02_메서드_리턴여부_메서드 {
  public static void main(String[] args) {
    Method1();
    Method2("이순신");
  }

  // 1. 기본 메서드 : 리턴값이 없는 메서드
  // 2. 기본 메서드 : 매개변수 없는 메서드
  public static void Method1(){
    System.out.println("여기는 기본 메서드입니다.");
  }

  public static void Method2(String name) {
    System.out.println("리턴값이 없는 메서드, 매개변수 있는 메서드" + name);
  }

}
