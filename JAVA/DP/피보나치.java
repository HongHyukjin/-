package DP;
import java.util.Scanner;
public class 피보나치 {

  static int fiboFn1(int num){
    int[] result = new int[num+1];
    result[0] = 0;
    result[1] = 1;
    
    for(int i=2; i<=num; i++){
      result[i] = result[i-2] + result[i-1];
    }
    
    return result[num];
  }

  static int fiboFn2(int num){
    if(num == 0 || num == 1){
      return num;
    }

    return fiboFn2(num-2) + fiboFn2(num-1);
  }

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("정수 입력 : ");
    int num = sc.nextInt();
    System.out.printf("fiboFn1(%d) = %d", num, fiboFn1(num));
    System.out.println();
    System.out.printf("fiboFn2(%d) = %d", num, fiboFn2(num));
    sc.close();
  }
}

