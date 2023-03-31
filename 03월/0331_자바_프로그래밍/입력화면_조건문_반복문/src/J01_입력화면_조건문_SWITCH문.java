import java.util.Scanner;
import java.text.DecimalFormat;

public class J01_입력화면_조건문_SWITCH문 {
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
    switch(menu){
      case 1 :
      // case "떡볶이":
        price = 8000;
        menuStr = "떡볶이";
        pan = price * soo;
        break;
      case 2:
        price = 7000;
        menuStr = "순대";
        pan = price * soo;
        break;
      case 3:
        price = 6000;
        menuStr = "튀김";
        pan = price * soo;
        break;
      default:
        System.out.println("잘못된 번호를 입력했습니다.");
    }

    //출력 설계
    // 세자리 마다 콤마형식 : 데시멀 포멧형식
    // 외부 클래스를 가져오면 반드시 생성자를 생성하여 사용한다.

    DecimalFormat df = new DecimalFormat("#,###"); //#,##0   "#,##0" 인용부호는 반드시 스트링이므로 더블쿼트를 사용

    System.out.printf("선택한 메뉴는 %s입니다!\n", menuStr);
    System.out.printf("결제 금액은 %s입니다.", df.format(pan));


  }
}
