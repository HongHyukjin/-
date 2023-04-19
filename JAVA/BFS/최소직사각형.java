package BFS;
import java.util.*;

// 명함들의 크기를 하나씩 읽어와서 가로_최대, 세로_최대를 갱신(지갑의 크기는 가로가 세로보다 큰 직사각형)
// 하나씩 확인할때 가로와 세로를 뒤집어서도 확인, 갱신이 필요하다면 큰값은 가로로, 작은값은 세로로 갱신

public class 최소직사각형 {
  public static int solution(int[][] sizes) {
    int answer = 0;
    int w = 0;
    int h = 0;
    
    for(int i=0; i<sizes.length; i++){
      int max = Math.max(sizes[i][0], sizes[i][1]);
      int min = Math.min(sizes[i][0], sizes[i][1]);
      w = Math.max(w, max);
      h = Math.max(h, min);
    }
    answer = w * h;
    
    return answer;
  }
  public static void main(String[] args) {
    int[][] sizes = {{60,50}, {30,70}, {60,30}, {80,40}};

    System.out.println(solution(sizes));
  }
}
