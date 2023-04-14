package Greedy;
import java.util.*;
public class 조이스틱 {
  static int solution(String name){
    int answer = 0;
    int move = 1; // 이동거리
    int now = 0;  // 현재 위치
    int idx = 0;
    int length = 0; // 연속된 A의 개수
    String[] arr = {"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"};

    // 현재위치를 기준으로 왼쪽과 오른쪽의 연속된 A의 개수를 구하고 더 적은쪽으로 이동
    // 끝나는 조건 : 이동거리가 name의 길이와 같아질때

    while(move <= name.length()){
      // 현재위치에서 이동해야할 인덱스의 크기
      idx = Arrays.asList(arr).indexOf(name.substring(now, 1));
      idx = Math.max(idx, 26-idx);
      answer ++;
      // 오른쪽으로 갈지 왼쪽으로 갈지 선택
      
    }

    // idx = Arrays.asList(arr).indexOf(Character.toString(name.charAt(i))); 



    return answer;
  }
  public static void main(String[] args) {
    String name = "JAN";

    System.out.println(solution(name));
  }
}
