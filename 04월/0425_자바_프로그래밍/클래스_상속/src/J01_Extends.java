/*
 * # 상속
 * 기존의 클래스를 재사용해서 새로운 클래스를 만드는것
 * 부모 클래스를 자식 클래스가 필드, 메서드.. 등을 내려받는 것을 상속(Extends)이라 한다.
 * 이때 멤버 (필드(멤버변수)와 메서드(멤버함수)) 상속받는다. 
 * 단, 생성자는 제외한다.
 * 
 * 부모클래스 == 슈퍼클래스 == 상위클래스
 * 자식클래스 == 서브클래스 == 하위클래스
 * 
 * # 상속의 특징
 * 자식클래스는 부모클래스의 필드와 메서드를 물려받기
 * 때문에 중복되는 코드를 작성할 필요가 없다.
 * 클래스의 재활용함으로서 유연성과 다형성을 추구할 수 있다.
 * 
 */

public class J01_Extends {
  public static void main(String[] args) {

    IcecreamWaffle iceWaffle = new IcecreamWaffle();

    iceWaffle.msgShow();

    iceWaffle.setData("바닐라와플", 5000);
    iceWaffle.getData();
    
    iceWaffle.setData("아이스크림 와플", 7000, "초코");
    iceWaffle.getDataChild();

    iceWaffle.setData("딸기 와플", 9000, "바나나");
    iceWaffle.getData();
    

  }
  
}

// 부모 클래스와 자식 클래스를 만들어서 상속의 기본 개념을 이해하자
// 부모 클래스
class Waffle{
  String name;
  int price;

  Waffle(){
    System.out.println("부모클래스의 기본 생성자입니다.");
  }

  void setData(String name, int price){
    this.name = name;
    this.price = price;
  }

  // 출력 메서드
  void getData(){
    System.out.println("부모클래스의 와플이름 : " + this.name);
    System.out.println("부모클래스의 와플가격 : " + this.price);
  }

}
// 자식 클래스
class IcecreamWaffle extends Waffle{
  String source;

  void msgShow(){
    System.out.println("자식 클래스입니다.");
  }

  void setData(String name, int price, String source){
    setData(name, price);
    this.source = source;
  }

  void getDataChild(){
    getData();  // 부모 클래스 name, price
    System.out.println("자식클래스의 와플 소스 : " + this.source);
  }

  void getData(){
    super.getData();
    System.out.println("자식클래스의 와플 소스 : " + this.source);
  }
}