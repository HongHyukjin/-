package Greedy;
import java.util.*;
public class 조이스틱 {
  static int solution(String name){
    int answer = 0;
    int idx = 0;
    String[] arr = {"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"};
    

    for(int i=0; i<name.length(); i++){
      System.out.print(name.charAt(i) + " ");
      idx = Arrays.asList(arr).indexOf(Character.toString(name.charAt(i)));
      answer += Math.min(idx, idx*-1+26);
      System.out.println(Math.min(idx, idx*-1+26));
      answer++;
    }

    return answer-1;
  }
  public static void main(String[] args) {
    String name = "JAN";

    System.out.println(solution(name));
  }
}
