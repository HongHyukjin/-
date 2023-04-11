import java.util.Scanner;
public class J03_2차원배열_선언_화면입력값_행열생성_난수_알파벳대문자출력 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int[][] arr;
    
    System.out.print("행 입력 : ");
    int row = sc.nextInt();
    System.out.print("열 입력 : ");
    int col = sc.nextInt();
    arr = new int[row][col];

    for(int i=0; i<row; i++){
      for(int j=0; j<col; j++){
        arr[i][j] = (int)(Math.random()*26+65);
      }
    }

    System.out.println();

    for(int i=0; i<row; i++){
      for(int j=0; j<col; j++){
        System.out.print(arr[i][j] + " ");
      }
      System.out.println();
    }

    System.out.println();

    for(int i=0; i<row; i++){
      for(int j=0; j<col; j++){
        arr[i][j] = (int)(Math.random()*26+65);
        System.out.print((char)(arr[i][j]) + " ");
      }
      System.out.println();
    }

    System.out.println();

    for(int i=0; i<row; i++){
      for(int j=0; j<col; j++){
        arr[i][j] = (int)(Math.random()*26+97);
        System.out.print((char)(arr[i][j]) + " ");
      }
      System.out.println();
    }

    System.out.println();

    for(int i=0; i<row; i++){
      for(int j=0; j<col; j++){
        arr[i][j] = (int)(Math.random()*10+48);
        System.out.print((char)(arr[i][j]) + " ");
      }
      System.out.println();
    }


  }
}
