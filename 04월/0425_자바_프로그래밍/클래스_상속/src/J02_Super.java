/*
 * # 클래스 한페이지 내에 생성
 * super
 * : 별 5개
 * : 자식클래스가 부모클래스의 생성자를 호출할 때 사용하는 이름이 슈퍼 super() 이다.
 * : 자식클래스를 만들면 자동으로 부모 클래스의 생성자도 호출되어 사용된다.
 * # 자식 클래스에서 부모 생성자 호출하기
 * 자식 클래스(매개변수...){
 *    super(매개값...)
 * }
 * ※ super는 매개변수 값의 개수와 타입이 일치하는 부모 생성자를 호출한다.
 * # 클래스는 다중상속을 지원하지 않는다.
 */

public class J02_Super {
  public static void main(String[] args) {
    Actor newActor = new Actor();
    // System.out.println("==============================");
    // System.out.println();

    // Actor newActor2 = new Actor("아바타");
    // newActor2.showData();
    // System.out.println();
    // System.out.println("==============================");

    // Actor newActor3 = new Actor("액션", "장클로드반담", 45);
    // newActor3.showData();
  }
}


// 사람을 주제로 설정하고 상속하고 super()를 호출한다.
class Human{
  String name;
  int age;

  Human(){
    System.out.println("부모클래스 위치의 일반 사람입니다.");
  }
  public Human(String name, int age){
    this.name = name;
    this.age = age;
    System.out.println("부모클래스 위치 나는 일반 사람으로 이름 : " + this.name + "입니다.");
    System.out.println("부모클래스 위치 나는 일반 사람으로 나이 : " + this.age + "입니다.");
  }
}
class Actor extends Human{
  private String movie;

  public Actor(){
    // super(); // 표기안해도 있는걸로 간주된다.
    // 슈퍼는 자식클래스가 부모클래스의 생성자를 호출할 때 사용하는 키워드입니다.
    // 부모생성자() super()
    // 부모생성자(매개변수1)
    // 부모생성자(매개변수1, 매개변수2)
    // 부모생성자(매개변수1, 매개변수2, 매개변수3)
    // 부모생성자(매개변수1, 매개변수2, 매개변수3, ...)
    // 첫줄에서만 사용 가능하다.
    // super()는 부모의 기본 생성자를 호출하는 메서드입니다.
    // super()는 생략되어도 자동으로 포함되고 있다.
    System.out.println("나는 영화배우입니다.");
  }

  public Actor(String movie){
    this.movie = movie;
  }

  public Actor(String movie, String name, int age){
    super(name, age); // 부모생성자(매개변수사용) 호출 super()
    this.movie = movie;
    System.out.println();
    System.out.println("부모클래스 다음 내용 출력 합니다. =================================");
  }

  public void showData(){
    System.out.println("부모클래스 멤버변수 2개 자식클래스 멤버변수 1개 출력");
    System.out.println("부모클래스 사람 이름 : " + this.name);
    System.out.println("부모클래스 사람 나이 : " + this.age);
    System.out.println("자식클래스 영화배우 내용 : " + this.movie);
  }
}
