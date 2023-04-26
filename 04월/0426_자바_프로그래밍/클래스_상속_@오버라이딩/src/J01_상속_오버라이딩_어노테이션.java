/*
 * J01_상속_오버라이딩_어노테이션
 * # @오버라이딩(Overriding)
 * @ 어노테이션 : 메서드 바로 윗줄에 어노테이션 표기 @ 사인(기호) 사용
 * 부모클래스에서 상속받은 같은 이름의 메서드를 변경(재정의) 하는 것.
 * 메서드 덮어쓰기(오버라이드)
 * 
 * 부모 클래스의 메서드 이름, 매개변수, 리턴타입이 같아야한다.
 * 부모클래스의 메서드보다 접근 제어자의 범위가 좁아질 수 없다.
 * 
 * # 오버로딩 & 오버라이딩
 * - 오버로딩(Overloading) : 이름은 같고 매개변수가 다른 새로운 메서드를 정의한다.
 * - 오버라이딩(Overriding) : "상속받은" 같은 이름의 메서드를 변경(재정의)한다.
 */
public class J01_상속_오버라이딩_어노테이션 {
   public static void main(String[] args) {
    Musician mus = new Musician();
    Pianist pia = new Pianist();
    Singer sig = new Singer();

    mus.showJob();
    mus.work();
    System.out.println("===========================================");
    pia.showJob();
    pia.showJob("재즈");
    pia.showJob_super();
    pia.work();
    System.out.println("===========================================");
    sig.showJob();
    sig.work();
    
   }
}

// 부모 클래스 
class Musician{
  public void showJob(){
    System.out.println();
    System.out.println("부모클래스 위치 직업은 뮤지션입니다.");
    System.out.println();
  }
  void work(){
    System.out.println();
    System.out.println("부모클래스 위치 무대에서 공연합니다.");
    System.out.println();
  }
}

// 자식 클래스 
class Pianist extends Musician{
  public void showJob(){
    System.out.println();
    System.out.println("자식클래스 위치 직업은 피아니스트입니다.");
    System.out.println();
  }
  public void showJob(String gok){
    System.out.println();
    System.out.println("자식클래스 위치 저는 " + gok + "을 연주하는 피아니스트입니다.");
    System.out.println();
  }
  // 부모클래스의 같은 이름의 메서드 호출 실행
  public void showJob_super(){
    System.out.println();
    super.showJob();  // 덮어쓰기된 부모 메서드 사용
    System.out.println();
  }
  
  // 부모클래스의 work 메서드를 오버라이딩
  // 같은 패키지 내에서 사용하도록 재정의
  // 오버라이딩할 메서드의 접근 제한자 범위는 좁아질 수 없다.
  void work(){
    System.out.println();
    System.out.println("자식클래스 위치 무대에서 피아노를 공연합니다.");
    System.out.println();
  }
}

class Singer extends Musician{

  @Override
  public void showJob(){
    super.showJob();
  }

  public void showJob(String song){
    System.out.println("저는 " + song + " 을 노래합니다.");
  }

  @Override
  void work(){
    super.work();
  }
}