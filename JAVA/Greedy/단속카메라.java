package Greedy;
import java.util.*;

public class 단속카메라 {
  static int solution(int[][] routes){
    int result = 0;
    int now = 0;

    Arrays.sort(routes, (o1,o2) -> {
      if(o1[1] == o2[1]){
        return o1[0]-o2[0];
      }
      else{
        return o1[1]-o2[1];
      }
    });

    now = routes[0][1];
    result++;
    for(int i=1; i<routes.length; i++){
      if(now >= routes[i][0] && now <= routes[i][1]){
        continue;
      }
      else{
        now = routes[i][1];
        result++;
      }
    }

    for(int i=0; i<routes.length; i++){
      for(int j=0; j<routes[i].length; j++){
        System.out.print(routes[i][j] + " ");
      }
      System.out.println();
    }

    return result;
  }
  public static void main(String[] args) {
    int[][] routes = {{-20,-15}, {-14,-5}, {-18,-13}, {-5,-3}, {-21,-15}};



    System.out.println(solution(routes));
  }
}
