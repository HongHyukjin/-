import java.util.Scanner;
public class J02_클래스_메서드_응용 {

  public void method1(int num){
    for(int i=0; i<num; i++){
      System.out.println("5월은 가정의 달입니다. 5월 29일은 대체공휴일입니다.");
    }
  }
  public static void main(String[] args) {
    // 문자열("5월은 가정의 달입니다. 5월 29일은 대체공휴일입니다.")을 출력할 횟수를 정수로 화면에서 입력
    // 그리고 메서드는 static도 없고
    // 리턴값도 없는 메서드를 생성하고 호출 실행하시오.
    Scanner sc = new Scanner(System.in);
    System.out.print("출력할 횟수를 입력하세요 : ");
    int num = sc.nextInt();

    J02_클래스_메서드_응용 obj = new J02_클래스_메서드_응용();
    obj.method1(num);
    sc.close();
  }
}
