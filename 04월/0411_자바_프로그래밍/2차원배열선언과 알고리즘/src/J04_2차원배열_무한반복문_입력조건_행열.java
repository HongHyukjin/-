import java.util.Scanner;

public class J04_2차원배열_무한반복문_입력조건_행열 {
  public static void main(String[] args) {
    // 1. 2차원 배열 선언하기
    // 2. 행수(1~10), 열수(1~10) 입력 받아서 2차원배열 생성하기
    // 3. 행수와 열수 제한조건 맞으면 다음으로 넘어가서 실행
    //    아니면 계속 행수 열수 입력 요구

    // 알고리즘 : 무한반복문( while(true){}), 조건문 if(줄수 < 1 || 줄수 > 10)
    int[][] arr;
    int row = 0;
    int col = 0;
    Scanner sc = new Scanner(System.in);

    while(true){
      System.out.print("1~10 사이의 행수를 입력 : ");
      row = sc.nextInt();
      if(row >= 1 && row <= 10){
        while(true){
          System.out.print("1~10 사이의 열수를 입력 : ");
          col = sc.nextInt();
          if(col >= 1 && col <= 10){
            System.out.println("배열 출력");
            arr = new int[row][col];
            for(int i=0; i<row; i++){
              for(int j=0; j<col; j++){
                arr[i][j] = (int)(Math.random() * 26 + 65);
                System.out.printf("%3c ", arr[i][j]);
              }
              System.out.println();
            }
            break;
          }
          else{
            System.out.println("범위 내에 열수를 입력해주세요");
          }
        }
        break;
      }
      else{
        System.out.println("범위 내에 행수를 입력해주세요");
      }
    }

  }
}
