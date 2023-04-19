public class J01_객체_응용_배열 {
  public static void main(String[] args) {
    
    // 단일 객체 사용
    // 문제)
    // 와플 객체 만들고 생성자를 생성하되
    // 매개변수는 2개
    // 멤버변수는 구분(단골고객, 일반고객, 우수고객), 가격(5000, 10000, 15000)
    Waffle w1 = new Waffle();
    Waffle w2 = new Waffle("일반고객", 5000);
    Waffle w3 = new Waffle("단골고객", 10000);
    Waffle w4 = new Waffle("우수고객", 15000);

    // 객체 배열 선언 사용 그리고 호출하기
    Waffle[] warr = {w1, w2, w3, w4};
    for(int i=0; i<warr.length; i++){
      warr[i].showW();
    }

  }
}

class Waffle{
  String category = "기본";
  int price = 0;

  Waffle(){

  }

  Waffle(String category, int price){
    this.category = category;
    this.price = price;
  }

  void showW(){
    System.out.println("구분 : " + category + ", 가격 : " + price);
  }
}
