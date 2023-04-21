package BFS;

public class 카펫 {
  public static int[] solution(int brown, int yellow){
    int[] answer = new int[2];
    int w = 0, h = 0;
    int sum = brown + yellow;
    int cnt = 3;
    while(cnt <= Math.sqrt(sum)){
      if(sum % cnt == 0){
        w = sum / cnt;
        h = cnt;
        if((w * 2 + (h - 2) * 2) == brown){
          answer[0] = w;
          answer[1] = h;
          break;
        }
      }
      cnt ++;
    }
    

    return answer;
  }
  public static void main(String[] args) {
    int brown = 24;
    int yellow = 24;
    int[] result = solution(brown, yellow);
    
    for(int i=0; i<result.length; i++){
      System.out.println(result[i]);
    }
  }
}
