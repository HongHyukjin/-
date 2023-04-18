import java.util.*;
public class 이차원배열_정렬 {
  public static void main(String[] args) {
    String[][] arr = {{"C","D"}, {"A", "B"},  {"E", "F"}};

    Arrays.sort(arr, new Comparator<String[]>() {
      
      @Override
      public int compare(String[] o1, String[] o2){
        if(o1[0].contentEquals(o2[0])){
          return o1[1].compareTo(o2[1]);
        }
        else{
          return o1[0].compareTo(o2[0]);
        }
      }
    });

    Arrays.sort(arr, (o1,o2) -> {
      return o2[1].compareTo(o1[1]);
    });

    for(int i=0; i<arr.length; i++){
      for(int j=0; j<arr[i].length; j++){
        System.out.print(arr[i][j] + " ");
      }
      System.out.println();
    }
  }
}
