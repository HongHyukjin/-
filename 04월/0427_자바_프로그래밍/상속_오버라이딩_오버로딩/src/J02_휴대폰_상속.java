/*
 * 부모클래스 : Phone
 * 필드 : 이름, 통신사, 가격
 * 
 * 자식클래스1 : Phone1
 * 필드 : 서비스시간
 * 
 * 자식클래스2 : Phone2
 * 필드 : 서비스시간
 */
public class J02_휴대폰_상속 {
  public static void main(String[] args) {
    Phone p = new Phone();
    p.setData("이름", "통신사", 10);
    p.showData();
    Phone1 p1 = new Phone1();
    p1.setData("이름1", "통신사1", 20, 200);
    p1.showPhone1();
    Phone2 p2 = new Phone2();
    p2.setData("이름2", "통신사2", 30, 300);
    p2.showPhone2();
  }
}

class Phone{
  private String name;
  private String telecom;
  private int price;

  public void setData(String name, String telecom, int price){
    this.name = name;
    this.telecom = telecom;
    this.price = price;
  }

  public void showData(){
    System.out.println("이름 : " + name);
    System.out.println("통신사 : " + telecom);
    System.out.println("가격 : " + price);
  }
}

class Phone1 extends Phone{
  private int time;

  public void setData(String name, String telecom, int price, int time){
    setData(name, telecom, price);
    this.time = time;
  }

  public void showPhone1(){
    System.out.println("=============================");
    showData();
    System.out.println("서비스시간 : " + time);
  }
}

class Phone2 extends Phone{
  private int time;

  public void setData(String name, String telecom, int price, int time){
    setData(name, telecom, price);
    this.time = time;
  }

  public void showPhone2(){
    System.out.println("=============================");
    showData();
    System.out.println("서비스시간 : " + time);
  }
}
