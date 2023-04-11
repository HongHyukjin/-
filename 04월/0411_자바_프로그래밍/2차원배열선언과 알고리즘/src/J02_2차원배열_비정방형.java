public class J02_2차원배열_비정방형 {
  public static void main(String[] args) {
    int[][] arr = {
      {21,3,56,7},
      {78,22,26,87,100,150},
      {8,12,36,77,500},
      {98,42,26,97,500,150,250,540,700,230}
    };

    for(int i=0; i<arr.length; i++){
      for(int j=0; j<arr[i].length; j++){
        System.out.printf("%5d", arr[i][j]);
      }
      System.out.println();
    }
    System.out.println();

    // 2차원 배열 선언과 생성방식
    int[][] arr1 = new int[4][];  //줄번호만 생성한다.
    // 각행마다 열(칸)을 생성한다.
    arr1[0] = new int[4];
    arr1[1] = new int[6];
    arr1[2] = new int[5];
    arr1[3] = new int[10];

    
  }
}
