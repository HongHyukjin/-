import java.util.Scanner;

public class J04_반복문_시작_종료값_연산 {
  public static void main(String[] args) {
    // 시작 정수 입력
    // 종료 정수 입력

    // 문제1) 시작 ~ 종료 누적합 구하기
    int s = 0;
    int e = 0;
    int sum = 0;

    Scanner sc = new Scanner(System.in);
    System.out.print("시작숫자를 입력 : ");
    s = sc.nextInt();
    System.out.print("종료숫자를 입력 : ");
    e = sc.nextInt();

    for(int i=s; i<=e; i++){
      sum += i;
    }
    System.out.printf("%d부터 %d까지의 누적합은 %d입니다.\n", s, e, sum );
 

    // 문제2) 시작 ~ 종료 4의배수 합 구하기
    sum = 0;
    for(int i=s; i<=e; i++){
      if(i%4 == 0){
        sum += i;
      }
    }
    System.out.printf("%d부터 %d까지의 4의배수 누적합은 %d입니다.", s, e, sum );

    sc.close();
  }
}
