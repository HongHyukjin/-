import java.util.Scanner;
public class J04_소수 {
  public static boolean prime(int num){
    boolean result = true;
    int cnt = 2;
    while(cnt < num){
      if(num % cnt == 0){
        result = false;
      }
      cnt ++;
    }
    return result;
  }
  public static void main(String[] args) {
    // num 미만의 소수를 출력
    Scanner sc = new Scanner(System.in);
    System.out.print("정수를 입력하세요 : ");
    int num = sc.nextInt();
    System.out.print(num + " 미만의 소수 : ");
    for(int i=2; i<=num; i++){
      if(prime(i) == true){
        System.out.print(i + " ");
      }
    }
    
    sc.close();
  }
}
