import java.util.Scanner;

public class J05_입력화면_조건문_할인율 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    // 문제1)
    // 정가를 입력받아서
    // 할인율 정하라
    // 조견표
    // 정가 500,000 이상 할인율 20%
    // 정가 100,000 이상 할인율 10%
    // 정가 50,000 이상 할인율 5%
    // 정가 10,000 이상 할인율 1%

    long price = 0;
    int sale_per = 0;
    long sell_price = 0;
    

    System.out.print("정가를 입력 : ");
    price = sc.nextInt();

    if(price > 500000){
      sale_per = 20;
    }
    else if(price > 100000){
      sale_per = 10;
    }
    else if(price > 50000){
      sale_per = 5;
    }
    else if(price > 10000){
      sale_per = 1;                            
    }

    sell_price = price * (100 - sale_per) / 100;
    System.out.printf("할인율은 %d, 판매가는 %d원입니다.", sale_per, sell_price);

  }
}
