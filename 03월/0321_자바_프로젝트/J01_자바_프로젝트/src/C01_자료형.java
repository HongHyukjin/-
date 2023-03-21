public class C01_자료형 {
  public static void main(String[] args) {
    //자료형 => 데이터 타입(Data Type)
  //int => 정수형
  //string => 문자형
  //100% 타입설정
  //자바 기본타입 : int, long, float, double, char, string, boolean, byte, short
  //변수 _cnt $cnt 특수문자 2개 사용
  //1. 정수 자료형
  //예) 타입설정 변수이름 =(대입연산자) 0(변수 값)
  //예) 타입설정 cnt = 0
  //타입의 정의는 변수에 들어오는(대입하는) 변수값의 타입을 설정한것.
  //예) int cnt = 123;  //cnt 변수에 정수형 값을 대입한다.
  //예) long cnt2 = 1231423415;  //cnt2 변수에 정수형 값을 대입한다.

  //2. 실수 자료형
  //예) float num = 33.3333;  //num 변수에 실수형 값을 대입한다.
  //예) double num2 = 33.214123123333;  //num2 변수에 실수형 값을 대입한다.

  //3. 문자 자료형
  // ''싱글 쿼트(따옴표) 사용
  //예) char grade = 'A';

  //4. 문자열 자료형
  // ""더블 쿼트(따옴표) 사용
  //예) string str = "I Love You!";

  //5.논리 자료형
  // 참(true)/거짓(false) 데이터를 저장하는 자료형
  //예) boolean isGender1 = false;
  //예) boolean isGender2 = true;

  //정수 자료형
  int numInt = 300;
  int numLong = 300000000;
  System.out.println("numInt " + numInt);
  System.out.println("numLong " + numLong);


  //실수 자료형
  float numFloat = 1.41F;
  double numDouble = 1.414213;
  System.out.println("numFloat " + numFloat);
  System.out.println("numDouble " + numDouble);

  //문자 자료형
  char a = 'A';
  char b = '대';
  char c = 65;  //A = 65, B = 66, c = 67 ASCII 코드값
  char d = 97;  //a = 97, b = 98  ....
  char e = 98;

  System.out.println("char a " + a);
  System.out.println("char b " + b);
  System.out.println("char c " + c);
  System.out.println("char d " + d);
  System.out.println("char e " + e);



  }
}
