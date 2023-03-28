public class J04_관계연산자_비교연산자 {
  public static void main(String[] args) {
    //관계연산자(비교연산자)
    // > 크다
    // >= 크거나 같다(이상)
    // <  작다
    // <= 작거나 같다(이하)
    // == 같다
    // != 같지않다(서로 다르다)
    // boolean 부울린(부울)은 true(1), false(0) 논리값을 나타낸다.

    int n = 10;
    boolean b1 = n > 5;     // 변수 n은 5보다 크다.
    System.out.println("b1 = n > 5 : " + b1);   //10은 5보다 크다 참이다.
    //Result => b1 = n > 5 : true

    //문제 1)
    // m 정수형 변수에 8을 대입
    // a 정수형 변수에 20을 대입
    // b2는 boolean으로 자료형선언
    // 비교연산 구현하시오
    // n은 a보다 작거나 같다 조건식
    // 비교연산 구현하고 출력하시오.
    n = 8;
    int a = 20;
    boolean b2 = n <= a;
    System.out.println("b2 = n <= a : " + b2);

    //b3 결과 변수
    //m 변수 = 15
    //n 변수 = 14
    //b3 비교연산 => 같다
    //b4 비교연산 => 같지 않다
    boolean b3;
    boolean b4;
    int m = 15;
    n = 14;
    b3 = (m == n);
    b4 = (m != n);
    System.out.println("비교 연산");
    System.out.println("n = " + n);
    System.out.println("m = " + m);
    System.out.println("b3 = (m == n) : " + (m == n));
    System.out.println("b4 = (m != n) : " + (m != n));

    //문제2)
    //변수 정수형 x = 90
    //변수 정수형 y = 70
    //변수 부울형 p1 크다
    //변수 부울형 p2 작다
    //변수 부울형 p3 크거나 같다
    //변수 부울형 p4 작거나 같다
    //변수 부울형 p5 같다
    //변수 부울형 p6 같지않다
    //구현 출력
    int x = 90;
    int y = 70;
    boolean p1,p2,p3,p4,p5,p6;
    p1 = x > y;
    p2 = x < y;
    p3 = x >= y;
    p4 = x <= y;
    p5 = x == y;
    p6 = x != y;

    System.out.println("문제2)////////////");
    System.out.println("x : " + x);
    System.out.println("y : " + y);
    System.out.println("x > y : " + p1);
    System.out.println("x < y : " + p2);
    System.out.println("x >= y : " + p3);
    System.out.println("x <= y : " + p4);
    System.out.println("x == y : " + p5);
    System.out.println("x != y : " + p6);


    
  }
}
