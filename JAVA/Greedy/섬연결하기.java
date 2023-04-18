package Greedy;
import java.util.*;

public class 섬연결하기 {

  // 해당 섬들의 부모를 담을 배열
  static int[] parent;

  // 섬들의 부모를 찾는 함수
  public static int getParent(int a) {
    if(a == parent[a])
        return parent[a];
    else
        return parent[a] = getParent(parent[a]);
  }

  public static void union(int a, int b) {
    a = getParent(a);
    b = getParent(b);
    if(a > b)
        parent[a] = b;
    else
        parent[b] = a;
  }

  public static int solution(int n, int[][] costs) {
    int answer = 0;
    // 건설비용을 기준으로 costs 정렬
    Arrays.sort(costs, (o1,o2) -> {
      if(o1[2] == o2[2]){
        return o1[0]-o2[0];
      }
      else{
        return o1[2]-o2[2];
      }
    });

    // 섬들의 부모는 자기자신으로 초기화
    parent = new int[n];
    for(int i=0; i<n; i++){
      parent[i] = i;
    }

    for(int i=0; i<costs.length; i++){
      if(getParent(costs[i][0]) == getParent(costs[i][1]))
                continue;
      union(costs[i][0], costs[i][1]);
      answer += costs[i][2];
    }

    return answer;
  }
  public static void main(String[] args) {
    int n = 4;
    int[][] costs = {{0,1,1}, {0,2,2}, {1,2,5}, {1,3,1}, {2,3,8}};
    System.out.println(solution(n, costs));
    
  }
}
