import java.util.Scanner;
public class J03_약수_화면입력_메서드 {

  public static void method(int num){
    int cnt = 1;
    System.out.println(num + "의 약수");
    while(cnt <= num){
      if(num % cnt == 0){
        System.out.print(cnt + " ");
      }
      cnt ++;
    }
  }
  public static void main(String[] args) {
    // 정수를 화면입력 받아서
    // 약수를 구하시오
    // 단 리턴문 없는 메서드를 호출 실행한다.
    Scanner sc = new Scanner(System.in);
    System.out.print("정수를 입력하세요 : ");
    int num = sc.nextInt();
    method(num);

    sc.close();
  }
}