import java.util.Scanner;

public class J01_입력화면_조건문_홀짝검사 {
  public static void main(String[] args) {
    // 문제1)
    // 자연수 입력 받아서
    // 짝수(even)인지 홀수(odd)인지 판단하는 조건문
    // % mod 나머지 mode 최빈수

    Scanner sc = new Scanner(System.in);

    System.out.print("자연수를 입력 : ");
    int num = sc.nextInt();

    if(num % 2 == 0){
      System.out.printf("입력값 : %d 짝수입니다.", num);
    }
    else{
      System.out.printf("입력값 : %d 홀수입니다.", num);
    }

  }
}
