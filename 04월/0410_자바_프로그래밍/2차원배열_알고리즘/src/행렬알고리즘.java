public class 행렬알고리즘 {
  public static void main(String[] args) {
    
    int[] sub1 = {1,2,3,4,5};
    int[] sub2 = {6,7,8,9};
    int[] sub3 = {10,11,12};
    int[] sub4 = {13,14};
    int[] sub5 = {15};
    int[] sub6 = {1};
    int[] sub7 = {2,3};
    int[] sub8 = {4,5,6};
    int[] sub9 = {7,8,9,10};
    int[] sub10 = {11,12,13,14,15};
    int[][] arr1 = {sub1, sub2, sub3, sub4, sub5};
    int[][] arr2 = {sub6, sub7, sub8, sub9, sub10};

    for(int i=0; i<5; i++){
      for(int j=0; j<i; j++){
        System.out.print("   ");
      }
      for(int k=0; k<5-i; k++){
        System.out.printf("%2d ", arr1[i][k]);
      }
      System.out.println();
    }

    System.out.println();

    for(int i=0; i<5; i++){
      for(int j=0; j<5-i; j++){
        System.out.printf("%2d ", arr1[i][j]);
      }
      for(int k=0; k<i; k++){
        System.out.print("   ");
      }
      System.out.println();
    }

    System.out.println();

    for(int i=0; i<5; i++){
      for(int j=0; j<=i; j++){
        System.out.printf("%2d ", arr2[i][j]);
      }
      for(int k=0; k<5-i; k++){
        System.out.print("   ");
      }
      System.out.println();
    }

    System.out.println();

    for(int i=0; i<5; i++){
      for(int j=0; j<4-i; j++){
        System.out.print("   ");
      }
      for(int k=0; k<=i; k++){
        System.out.printf("%2d ", arr2[i][k]);
      }
      System.out.println();
    }
  }
}
