public class J02_2차원배열값증가와출력 {
  public static void main(String[] args) {
    // 2차원 배열 생성과 값 증가 출력
    // 문제1)
    // 1. 2차원 5행 5열 배열 생성
    // 2. 2차원 배열에 행열에 1씩 증가하는 값을 넣어 출력
    // 3. 증가변수는 정수형 cnt
    int[][] arr = new int[5][5];
    int cnt = 0;
    
    System.out.println();
    for(int i=0; i<arr.length; i++){
      for(int j=0; j<arr[i].length; j++){
        arr[i][j] = ++cnt;
        System.out.printf("%2d ", arr[i][j]);
      }
      System.out.println();
    }
    System.out.println();

    // 내림차순 출력
    int[][] arr2 = new int[5][5];
    for(int i=0; i<arr2.length; i++){
      for(int j=0; j<arr2[i].length; j++){
        arr2[i][j] = cnt--;
        System.out.printf("%2d ", arr2[i][j]);
      }
      System.out.println();
    }
    System.out.println();



  }
}
