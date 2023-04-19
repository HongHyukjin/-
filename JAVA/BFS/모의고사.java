package BFS;
import java.util.*;
public class 모의고사 {
  public static int[] solution(int[] answers) {
    int[] answer = {};
    int[] score = new int[3];
    int[] first = {1,2,3,4,5};
    int[] second = {2,1,2,3,2,4,2,5};
    int[] third = {3,3,1,1,2,2,4,4,5,5};

    for(int i=0; i<answers.length; i++){

      if(answers[i] == first[i%5]){
        score[0]++;
      }
      if(answers[i] == second[i%8]){
        score[1]++;
      }
      if(answers[i] == third[i%10]){
        score[2]++;
      }
    }
    // 세명의 점수의 최대값
    int max = Math.max(score[0], Math.max(score[1], score[2]));
    ArrayList<Integer> list = new ArrayList<>();
    for(int i=0; i<score.length; i++){
      if(score[i] == max){
        list.add(i+1);
      }
    }
    answer = new int[list.size()];
    for(int i=0; i<list.size(); i++){
      answer[i] = list.get(i);
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
