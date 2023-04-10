
public class J03_2차원배열_랜덤_숫자 {
  public static void main(String[] args) {
    // 임의 숫자(Random Number)를 증가시켜서 정수로 저장
    // Math.random() => 0보다 크고 1보다 작은 임의의 실수가 출력
    // arr[i][j] = (int)(Math.random() * 10 + 1); //11 19 1 2
    // 5행 5열

    int[][] arr = new int[5][5];

    System.out.println();
    for(int i=0; i<arr.length; i++){
      for(int j=0; j<arr[i].length; j++){
        arr[i][j] = (int)(Math.random() * 10 + 1);
        System.out.printf("%4d ", arr[i][j]);
      }
      System.out.println();
    }

  }
}
