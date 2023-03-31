import java.util.Scanner;

public class J01_입력화면_조건문_IF문 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int menu = 0;
    int soo = 0;
    int price = 0;
    int pan = price * soo;
    String menuStr = "";

    // Input(입력) 설계
    System.out.println("메뉴선택 : 1. 떡볶이 2. 순대 3. 튀김");
    menu = sc.nextInt();
    System.out.println("수량을 입력해주세요!");
    soo = sc.nextInt();

    // 조건 설계
    if(menu == 1){
      price = 8000;
      pan = price * soo;
      menuStr = "떡볶이";
    }
    else if(menu == 2){
      price = 7000;
      pan = price * soo;
      menuStr = "순대";
    }
    else if(menu == 3){
      price = 6000;
      pan = price * soo;  
      menuStr = "튀김";
    }
    else{
      System.out.println("메뉴에 없는 번호입니다.");
      return;
    }

    //출력 설계
    System.out.printf("선택한 메뉴는 %s입니다!\n", menuStr);
    System.out.printf("%d %d", soo, price);
    System.out.printf("결제 금액은 %d입니다.", pan);


  }
}
