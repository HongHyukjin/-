import java.util.Scanner;
public class J01_구구단_단_시작번호_화면입력_WHILE문_2차원배열저장_출력 {
  public static void main(String[] args) {
    // 문제1) 2차원배열에 구구단을 저장 출력
    // 1. 화면에서 구구단 단을 입력받는다.
    // 2. 단 2~9단까지 입력제한조건(시작단, 끝단)
    // 3. 행수는 1~9까지 기본 반복 수행
    // 4. 2차원 배열에 저장
    // 5. 출력 실행 2 × 1 = 2
    // 예) 구구단 시작단 입력 2
    // 예) 구구단 종료단 입력 7
    /// 2*1=2 3*1=3 ... 7*1=7
    /// 2*9=18 3*9=27 ... 7*9=63

    Scanner sc = new Scanner(System.in);
    int[][] arr;
    int start = 0;
    int end = 0;

    while(true){
      System.out.print("구구단의 시작단을 입력해주세요 : ");
      start = sc.nextInt();
      if(start < 2 || start > 9){
        System.out.println("2~9 사이의 숫자를 입력해주세요!");
        continue;
      }
      while(true){
        System.out.print("구구단의 종료단을 입력해주세요 : ");
        end = sc.nextInt();
        if(end < 2 || end > 9){
          System.out.println("2~9 사이의 숫자를 입력해주세요!");
        }
        else if(end < start){
          System.out.println("끝단은 시작단보다 작을 수 없습니다!");
        }
        else{
          break;
        }
      }
  
      arr = new int[end+1][9];

      for(int i=0; i<9; i++){
        for(int j=start; j<=end; j++){
          arr[j][i] = j * (i+1);
          System.out.printf("%2d × %2d = %2d  ", j, i+1, arr[j][i]);
        }
        System.out.println();
      }
    }
  }
  
}