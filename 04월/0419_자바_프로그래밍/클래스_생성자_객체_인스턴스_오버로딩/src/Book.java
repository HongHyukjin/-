/*
 * 1. 생성자 이름은 반드시 클래스 이름과 같아야 한다.
 * 2. 생성자는 리턴값이 없다.
 * 3. 생성자는 void 또한 없다.
 * 4. 생성자는 몇가지만 제외하면 메서드와 다르지 않다.
 * 5. 생성자는 메서드처럼 클래스내에 선언되고, 오버로딩이 가능하다.
 * 6. 하나의 클래스에 여러개의 생성자가 존재할 수 있다.
 * 7. 기본 생성자가 자동으로 생성될 수 있다.
 *    클래스에 생성자가 하나도 정의되어 있지 않다면 
 *    컴파일러가 자동으로 기본 생성자를 생성시켜서 컴파일해준다.
 *    Book(){}
 */


public class Book {

  String title;
  String author;

  public Book(String t){
    title = t;
    author = "작자미상";
    // title = "춘항젼";
    // author = "작자미상";
  }

  public Book(String t, String a){
    title = t;
    author = a;
    // title = "어린왕자";
    // author = "생텍쥐페리";
  }

  public static void main(String[] args) {
    Book book1 = new Book("춘항전");
    Book book2 = new Book("어린왕자", "생텍쥐페리");

    System.out.println(book1.title);
    System.out.println(book1.author);
    System.out.println(book2.title);
    System.out.println(book2.author);

    Waffle2 w2 = new Waffle2("바닐라", 2000);
    w2.showW2();
    // 생성자 w2를 이용해서
    // Waffle2() 내부에서 호출 실행할 메서드를 만들어준다.
    Waffle3 w3 = new Waffle3();
    w3.showW3();
    Waffle3 w33 = new Waffle3("허니와플");
    w33.showW3();
    Waffle3 w333 = new Waffle3("바닐라와플", 20000);
    w333.showW3();

    
  }
}

class Waffle2 {
  String name;
  int price;

  Waffle2(){

  }

  // 매개변수 2개인 생성자를 선언했으므로 기본 생성자는 만들어지지 않는다.
  Waffle2(String irum, int money){
    // 생성자의 매개변수 값으로 멤버변수를 초기화
    // this로 객체의 멤버변수에 접근할 수 있다.
    this.name = irum;
    this.price = money;
  }

  void showW2(){
    System.out.println("이름 = " + name + ", 가격 = " + price);
  }

}

class Waffle3{
  String name;
  int price;

  Waffle3(){

  }

  // 생성자 오버로딩
  Waffle3(String name){
    this.name = name;
  }

  Waffle3(String n, int p){
    this.name = n;
    this.price = p;
  }

  void showW3(){
    System.out.println("이름 = " + name + ", 가격 = " + price);
  }

}