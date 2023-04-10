public class J01_2차원배열 {
  public static void main(String[] args) {
    // 1. 1차원배열 3개 생성과 2차원 배열 생성하기
    int[] numbers1 = {5, 10, 15, 20, 25};
    int[] numbers2 = {10, 20, 30, 40, 50};
    int[] numbers3 = {20, 40, 60, 80, 100};

    // 2. 2차원배열 생성하기
    int[][] arr1 = {
      {5, 10, 15, 20, 25},
      {10, 20, 30, 40, 50},
      {20, 40, 60, 80, 100}
    };

    // 배열의 길이(행 개수)
    System.out.println();
    System.out.println("2차원배열의 행개수 : " + arr1.length);
    System.out.println();

    // 배열의 길이(열 개수)
    System.out.println("2차원배열의 열개수 : " + arr1[0].length);
    System.out.println();

    // 배열 출력
    System.out.println();
    for(int i=0; i<arr1.length; i++){
      for(int j=0; j<arr1[i].length; j++){
        System.out.print(arr1[i][j] + " ");
      }
      System.out.println();
    }

    // 3. 1차원배열 2차원배열로 병합하기
    int[][] arr2 = {numbers1, numbers2, numbers3};

    System.out.println();
    for(int i=0; i<arr2.length; i++){
      for(int j=0; j<arr2[i].length; j++){
        System.out.print(arr2[i][j] + " ");
      }
      System.out.println();
    }

  }
}
