import java.util.Scanner;
public class J01_2차원배열_선언_난수_열누적합 {
  public static void main(String[] args) {
    
    // 10 ~ 100 미만의 정수의 난수를 생성 그리고
    // 배열(열) 값으로 저장 그리고 누적합을 구한다.
    // 예시)
    // 10 16(26) 78(104) ... 누적합

    int[][] arr;    //배열 선언만하고
    Scanner sc = new Scanner(System.in);
    System.out.print("행의 길이 입력 : ");
    int row = sc.nextInt();
    System.out.print("열의 길이 입력 : ");
    int col = sc.nextInt();
    int cnt = 0;

    arr = new int[row][col];  // 그리고 배열 생성한다.
    
    for(int i=0; i<row; i++){
      for(int j=0; j<col; j++){
        arr[i][j] = ++cnt;  // 그리고 배열 값을 저장한다.
        System.out.printf("%4d", arr[i][j]);
      }
      System.out.println();
    }


  }
}
