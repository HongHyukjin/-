import java.util.Scanner;

public class J04_반복문_While_break {
    public static void main(String[] args) {
        // 무한반복문  while 문

        // 화면에서 정수 입력 받아서
        // 숫자 만큼 * 기호를 반복출력한다. for
        // 그리고 프로그램 종료는 0(Zero)을 입력받으면 
        // 프로그램 종료한다.
        // 무한반복은 값이 true이면 계속
        // 중간에 탈출 break 문 사용

        while(true){  // 무한반복
            Scanner sc = new Scanner(System.in);
            System.out.println("숫자를 입력하세요:");
            int num = sc.nextInt();
            for(int i=1; i<=num; i++){
                System.out.print("*");
            }
            System.out.println();
            // 프로그램 종료는 0을 입력 받는다.
            // break 문으로 탈출(강제종료)
            if(num==0){
                System.out.println("프로그램을 종료합니다.");
                System.out.println();
                break;
            }
        }

    }
}
