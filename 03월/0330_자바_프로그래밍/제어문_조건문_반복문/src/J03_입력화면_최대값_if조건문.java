import java.util.Scanner;

public class J03_입력화면_최대값_if조건문 {
  public static void main(String[] args) {

    // 자연수 3개를 입력받아서
    // 최대값을 구하시오.
    // 최소값을 구하시오.
    Scanner sc = new Scanner(System.in);
    int num1, num2, num3;
    System.out.print("첫번째 수 입력 : ");
    num1 = sc.nextInt();
    System.out.print("두번째 수 입력 : ");
    num2 = sc.nextInt();
    System.out.print("세번째 수 입력 : ");
    num3 = sc.nextInt();

    int max = 0, min = 0;

    if(num1 > num2){
      if(num1 > num3){
        max = num1;
      }
      else{
        max = num3;
      }
    }
    else{
      if(num2 > num3){
        max = num2;
      }
      else{
        max = num3;
      }
    }

    if(num1 < num2){
      if(num1 < num3){
        min = num1;
      }
      else{
        min = num3;
      }
    }
    else{
      if(num2 < num3){
        min = num2;
      }
      else{
        min = num3;
      }
    }

    System.out.printf("가장 큰수는 %d, 가장 작은수는 %d입니다.", max, min);

  }
}
