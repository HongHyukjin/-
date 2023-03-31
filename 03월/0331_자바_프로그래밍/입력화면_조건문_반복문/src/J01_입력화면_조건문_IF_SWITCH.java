import java.util.Scanner;

public class J01_입력화면_조건문_IF_SWITCH {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.println("메뉴선택 : 1. 떡볶이 2. 순대 3. 튀김");

    int menu = sc.nextInt();

    System.out.println("수량을 입력해주세요!");

    int cnt = sc.nextInt();

    int price = 0;

    //////////////////////IF ELSE문 구현//////////////////////////////////
    if(menu == 1){
      price = 8000;
      System.out.printf("떡볶이 %d인분을 선택했습니다! 잠시만 기다려주세요!", cnt);
      System.out.println();
      System.out.printf("가격은 %d원입니다.", price * cnt);
    }
    else if(menu == 2){
      price = 7000;
      System.out.printf("순대 %d인분을 선택했습니다! 잠시만 기다려주세요!", cnt);
      System.out.println();
      System.out.printf("가격은 %d원입니다.", price * cnt);
    }
    else if(menu == 3){
      price = 6000;
      System.out.printf("튀김 %d인분을 선택했습니다! 잠시만 기다려주세요!", cnt);
      System.out.println();
      System.out.printf("가격은 %d원입니다.", price * cnt);
    }
    else{
      System.out.println("메뉴에 없는 번호를 선택하셨습니다.");
    }

    //////////////////////스위치문 구현//////////////////////////////////
    // switch(menu){
    //   case 1 :
    //     price = 8000;
    //     System.out.printf("떡볶이 %d인분을 선택했습니다! 잠시만 기다려주세요!", cnt);
    //     System.out.println();
    //     System.out.printf("가격은 %d원입니다.", price * cnt);
    //     break;
    //   case 2:
    //     price = 7000;
    //     System.out.printf("순대 %d인분을 선택했습니다! 잠시만 기다려주세요!", cnt);
    //     System.out.println();
    //     System.out.printf("가격은 %d원입니다.", price * cnt);
    //     break;
    //   case 3:
    //     price = 6000;
    //     System.out.printf("튀김 %d인분을 선택했습니다! 잠시만 기다려주세요!", cnt);
    //     System.out.println();
    //     System.out.printf("가격은 %d원입니다.", price * cnt);
    //     break;
    //   default:
    //     System.out.println("메뉴에 없는 번호를 선택하셨습니다.");
    //     break;
    // }

  }
}
