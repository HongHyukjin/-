/**
 * J01_화면입력_혼자하기
 */
import java.util.Scanner;
public class J01_화면입력_혼자하기 {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String txt = sc.nextLine();
    System.out.println(txt);

    int num = sc.nextInt();
    System.out.println(num);

    double num_d = sc.nextDouble();
    System.out.println(num_d);

    char ch = sc.next().charAt(1);
    System.out.println(ch);
  }
}