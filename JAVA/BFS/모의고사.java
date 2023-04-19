package BFS;
import java.util.*;
public class 모의고사 {
  public static int[] solution(int[] answers) {
    int[] answer = new int[3];
    int[][] choices = {
      {1,2,3,4,5},
      {2,1,2,3,2,4,2,5},
      {3,3,1,1,2,2,4,4,5,5}
    };

    for(int i=0; i<answers.length; i++){
      int cnt = 0;
      for(int j=0; j<3; j++){
        if(answers[i] == choices[j][i]){
          cnt++;
          answer[j] ++;
        }
      }
    }

    return answer;
  }
  public static void main(String[] args) {
    int[] answers = {1,3,2,4,2};
    int[] result = solution(answers);
    for(int i=0; i<result.length; i++){
      System.out.println(result[i]);
    }
  }
}
