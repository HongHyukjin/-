public class J01_데이터타입_리터럴_접두사_접미사 {
  public static void main(String[] args) {
    //변수의 타입
    //기본형 타입(Primitive Type) : 실제 값을 저장하는 메모리
    //Byte 별로 구분 타입
    //1Byte : Boolean, Byte
    //2Byte : char, short
    //4Byte : int, float
    //8Byte : long, double

    //논리 : Boolean
    //문자 : char
    //정수 : byte, short, int, long 부호(Sign)와 절대값(Absolute) 부호를 포함하지 않는 숫자
    //실수 : float, double => 부동소수점 표현식 : 수치의 정밀도가 높다


    //참조형 타입(Referrence Type) : 기본형을 제외한 나머지
    //참조형 타입 : 객체의 주소를 저장
    //String, System, 객체, 배열, 나열형

    //부호의 유무의 분류 => 자료표현 범위가 달라진다.

    //-2^(n-1) ~ 2^(n-1)-1
    //* n-1 => 의미는 부호비트 1비트를 제외한것이다.
    //부호가 있는 자료형 : byte, short, int, long, float, double

    //2^(n)-1
    //boolean => 1byte => 8bit => 2^(8)-1 => 256-1 => 255 최대수 시작은 0~255
    //-1의 의미 => 모든 수는 기본이 0부터 시작하기 때문에 10진수는 10-1 => 9 최대수
    //* n-1 => 의미는 부호비트 1비트를 제외한것이다.
    //부호가 없는 자료형 : boolean, char, 
    
    //자료형 변수이름 = 변수값(리터럴)
    //int cnt = 0;
    //변수이름 => 명명규칙 => 네이밍규칙
    //클래스 => 첫글자 대문자 중간연결단어 대문자 [파스칼 케이스]
    //예) ProjectKurly
    //변수, 메서드 => 첫글자 소문자이면서 중간연결단어 대문자[카멜케이스]
    //예) _ 와 $ 특수문자 사용 가능
    // a = 50; abc = 70; loveIs = 66; _int $long
    //상수 => 모두 대문자로 사용 단어와 단어사이 연결되는 단어는 언더바(팟홀) 사용 [팟홀케이스]
    //예) final double PI = 3.14; 

    //리터럴 => 변수에 대입되는 값
    int cnt = 0;
    char ch1 = 'A'; //반드시 싱글 따옴표 사용
    // char ch1 = 'AB';  //2글자는 오류
    char ch2 = 64;  //ASCII 코드값 65(A) ~
    char ch3 = '\u0041';  //유니코드(UNICODE) 값 \u0041(A)
    char ch4 = '\t';  //tab 일정한 사이간격 띄운다.
    byte by1 = 99;  ///byte 정수
    short sh1 = 17536; //short 정수 리터럴
    int bi = 0b10101;    //
    int oct = 037;  //octal 8진수 영문 Big O
    int hex = 0x1100;   //
    long lon = 38228348123L;  //LONG 숫자 맨뒤에 영문 L 소문자 l
    float flo = 1.41423f;  //float 숫자 맨뒤에 영문 F 소문자 f
    double dou = 3.141423d;  //double 숫자 맨뒤에 영문 D 소문자 d
    System.out.println("cnt " + cnt);
    System.out.println("ch1 " + ch1);
    System.out.println("ch2 " + ch2);
    System.out.println("ch3 " + ch3);
    System.out.println("ch4 " + ch4);
    System.out.println("by1 " + by1);
    System.out.println("sh1 " + sh1);
    System.out.println("bi " + bi);
    System.out.println("oct " + oct);
    System.out.println("hex " + hex);
    System.out.println("lon " + lon);
    System.out.println("flo " + flo);
    System.out.println("dou " + dou);
    



  }
}
