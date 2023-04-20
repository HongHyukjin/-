package 객체지향_클래스_오버로딩;

public class J01_클래스_객체_배열처리 {
  public static void main(String[] args) {
    // 폰기종   |   통신사    |   서비스시간
    // 객체배열[]
    // 아이폰         LG            120
    // 갤럭시         KT            80
    // 모토로라       SKT           100

    Phone[] parr = new Phone[7];
    parr[0] = new Phone();
    parr[1] = new Phone("아이폰");
    parr[2] = new Phone("갤럭시");
    parr[3] = new Phone("갤럭시", "KT");
    parr[4] = new Phone("아이폰", "LG", 120);
    parr[5] = new Phone("갤럭시", "KT", 80);
    parr[6] = new Phone("모토로라", "SKT", 100);

    for(int i=0; i<parr.length; i++){
      parr[i].showTelecom();
    }
  }
}

// 문제)
// 클래스(객체) 이름 : Phone
// Phone 클래스 내부 필드
// 클래스(객체) 배열[3] 반복처리
// 결과출력
class Phone{
  String name = "기본";
  String telecom ="기본";
  int service = 0;

  public Phone(){

  }

  public Phone(String name){
    this.name = name;
  }

  public Phone(String name, String telecom){
    this.name = name;
    this.telecom = telecom;
  }

  public Phone(String name, String telecom, int service){
    this.name = name;
    this.telecom = telecom;
    this.service = service;
  }

  public void showTelecom(){
    System.out.println("폰기종 : " + name + ", 통신사 : " + telecom + ", 서비스시간 : " + service);
  }
}