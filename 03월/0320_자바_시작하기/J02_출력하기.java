/**
 * J02_출력하기
 */
public class J02_출력하기 {

  public static void main(String[] args) {
    System.out.println("자바 출력문입니다. 라인피드 줄바꿈");
    System.out.println("자바" + "JDK 프로그램");
    System.out.println(30);
    System.out.println(255.5);
    System.out.println(150+130);
    System.out.println(12.98+35.33);
    System.out.println("250 + 130 = "+ (250+130));
    System.out.println("250 + 130 = "+ (250*130));
    System.out.println("250 + 130 = "+ (250/130));
    System.out.println("250 + 130 = "+ (250-130));

    //줄바꿈 없는 프린트 출력 Escape New Line 사용
    System.out.print("문자열 안에 \n");
    System.out.print("줄바꿈 넣기 \n");
    System.out.print("새로운 줄 \n에서 줄바꿈");

    //%d 사용 숫자 출력
    System.out.printf("\n정수 : %d", 3300);
    System.out.printf("\n정수 : %d", 3300);

    //시스템 줄바꿈 메소드 사용하기
    System.out.println("메서드를 이용 줄바꿈하기 " + System.lineSeparator() + "다음줄 내용");



  }
}