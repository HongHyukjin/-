import java.util.Scanner;

public class J01_화폐단위구하기 {
  public static void main(String[] args) {
    // 금액 187000
    // 50000원권
    // 10000원권
    //  5000원권
    // 문제) 위 금액을 각 지폐원단위로 매수를 구하시오.
    // 1. 입력설계(Input)
    long money = 187000;
    long cnt1 = 0, cnt2 = 0, cnt3 = 0, cnt4 = 0;

    Scanner sc = new Scanner(System.in);

    System.out.println("금액을 입력하세요");
    money = sc.nextLong();
    

    // 3. 처리설계
    while(money > 0){
      if(money >= 50000){
        money -= 50000;
        cnt1++;
      }
      else if(money >= 10000){
        money -= 10000;
        cnt2++;
      }
      else if(money >= 5000){
        money -= 5000;
        cnt3++;
      }
      else{
        money -= 1000;
        cnt4++;
      }
    }

    // 2. 출력설계(Output)
    System.out.printf("50000원권 %d, 10000원권 %d, 5000원권 %d, 1000원권 %d", cnt1, cnt2, cnt3, cnt4, money);

  }
  
}