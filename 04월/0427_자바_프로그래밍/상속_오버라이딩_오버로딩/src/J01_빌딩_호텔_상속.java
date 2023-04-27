/*
 * J01_빌딩_호텔_상속
 * 문제)
 * 주어진 빌딩 클래스를 상속하여
 * 다음 클래스들을 구현하고 객체를 실행
 * 필드 값은 메서드로 초기화하고,
 * 자식 클래스의 setData() 메서드는 
 * 부모클래스의 메서드를 오버로딩하여 구현해보자
 * 
 * 1. 부모클래스 : Building
 * 2. 자식클래스 : Hotel
 *      - 필드 : 이름, 가격, VIP룸 수
 * 3. 자식클래스 : Apart
 *      - 필드 : 이름, 가격, 층수
 * 
 * 예)
 * 이름 : 신라호텔
 * 가격 : 10
 * vip룸 수 : 20
 * 
 * 이름 : 자이
 * 가격 : 20
 * 층수 : 40
 */

public class J01_빌딩_호텔_상속 {
  public static void main(String[] args) {
    Building building = new Building();
    building.setData("그린", 30);
    building.show();
    Hotel hotel = new Hotel();
    hotel.setData("신라호텔", 10, 20);
    hotel.show();
    Apart apart = new Apart();
    apart.setData("자이", 20, 40);
    apart.show();
  }
}

class Building{
  private String name;
  private int price;

  public void setData(String name, int price){
    this.name = name;
    this.price = price;
  }
  public void show(){
    System.out.println("이름 : " + name);
    System.out.println("가격 : " + price);
  }
}

class Hotel extends Building{
  private int vip;

  public void setData(String name, int price, int vip){
    setData(name, price);
    this.vip = vip;
  }
  @Override
  public void show(){
    System.out.println("==========================");
    super.show();
    System.out.println("Vip룸 수 : " + vip);
  }
}

class Apart extends Building{
  private int floor;

  public void setData(String name, int price, int floor){
    setData(name, price);
    this.floor = floor;
  }
  public void show(){
    System.out.println("==========================");
    super.show();
    System.out.println("층수 : " + floor);
  }
}