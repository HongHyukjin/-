public class J03_메서드_응용 {

  public static void repeatStr(String str, int num) {
    for(int i=0; i<num; i++){
      System.out.println(str);
    }
  }

  public static double average(int a, int b, int c) {
    return (a+b+c) / 3.0;
  }

  public void arrMethod1(int[] arr) {
    for(int i=0; i<arr.length; i++){
      System.out.printf("%3d ", arr[i]);
    }
    System.out.println();
  }

  public void arrMethod2(int[][] arr) {
    for(int i=0; i<arr.length; i++){
      for(int j=0; j<arr[i].length; j++){
        System.out.printf("%3d ", arr[i][j]);
      }
      System.out.println();
    }
  }

  public int arrMethod3(int[][] arr) {
    int sum = 0;
    for(int i=0; i<arr.length; i++){
      for(int j=0; j<arr[i].length; j++){
        sum += arr[i][j];
      }
    }
    return sum;
  }
  
  public void hello(){
    System.out.println("hello");
  }

  public static void main(String[] args) {
    // static 없으면 반드시 클래스를 생성자를 만들어서
    J03_메서드_응용 newMain = new J03_메서드_응용();

    repeatStr("안녕하세요!", 5);
    double avg = average(96, 89, 72);
    System.out.println("평균은 " + avg);
    int[] arr1 = {1,2,3,4,5};
    int[][] arr2 = {{1,2,3,4,5}, {6,7,8,9,10}, {11,12,13,14,15},{16,17,18,19,20},{21,22,23,24,25}};
    newMain.arrMethod1(arr1);
    newMain.arrMethod2(arr2);
    int sum = newMain.arrMethod3(arr2);
    System.out.println("2차원배열 누적합 " + sum);
  }
}
