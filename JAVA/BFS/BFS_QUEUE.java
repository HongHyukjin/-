package BFS;
import java.util.*;
/*
 * BFS(깊이우선탐색)
 * 현재 위치에서 방문 가능한 노드들을 모두 방문하고 다음으로 넘어가는 방식의 완전탐색
 * 큐에 현재 노드에서 이동 가능한 노드들을 담고 순서대로 읽으며 해당 노드가 방문한 적이 있는 
 * 노드인지 파악하고 방문한적이 없는 노드라면 visited[node] = true로 바꾼다.
 * 이 행동을 큐가 빌때까지(모든 노드를 한번씩 방문할때까지) 반복한다.
 */
public class BFS_QUEUE {
    public static boolean[] visited;
    public static ArrayList<Integer> bfs(int start, boolean[] visited, int[][] graph){
        ArrayList<Integer> result = new ArrayList<>();
        Queue<Integer> queue = new LinkedList<>();
        visited = new boolean[graph.length];
        queue.offer(start);
        visited[start] = true;
        visited[0] = true;
        while(!queue.isEmpty()){
            int node = queue.poll();
            visited[node] = true;
            result.add(node);
            for(int n : graph[node]){
                if(visited[n] == false){
                    queue.offer(n);
                }
            }
        }

        return result;
    }
    public static void main(String[] args) {
        int[][] graph = {{}, {2,3,4},{1,5,6},{1,7},{1,8,9},{2,10},{2},{3},{4},{4},{5}};

        ArrayList<Integer> result = bfs(1, visited, graph);
        for(Integer num : result){
            System.out.println(num);
        }

        
    }    
}
