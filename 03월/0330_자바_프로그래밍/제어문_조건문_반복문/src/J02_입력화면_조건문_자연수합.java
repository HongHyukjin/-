import java.util.Scanner;

public class J02_입력화면_조건문_자연수합 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("첫번째 수를 입력 : ");
    int num1 = sc.nextInt();
    System.out.print("두번째 수를 입력 : ");
    int num2 = sc.nextInt();
    int hap = num1 + num2;
    int sub = Math.abs(num1 - num2);

    System.out.printf("두 수의 합은 %d입니다.\n", hap);
    System.out.printf("두 수의 차는 %d입니다.\n", sub);

    sc.close();
    
  }
}
