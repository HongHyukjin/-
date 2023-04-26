package DFS;
import java.util.*;
public class DFS_재귀 {
  static boolean[] visited = new boolean[9];
  static ArrayList<Integer> list = new ArrayList<>();

  static void dfs(int node, int[][] graph){
    visited[node] = true;
    list.add(node);
    for(int num : graph[node]){
      if(visited[num] == false){
        dfs(num, graph);
      }
    }
  }
  public static void main(String[] args) {
    int[][] graph = {{},{2,3,8},{1,6,8},{1,5},{5,7},{3,7},{2},{4,5},{1,2}};
    dfs(1, graph);
    for(Integer num : list){
      System.out.println(num);
    }
  }
}
