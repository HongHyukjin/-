package BFS;
import java.util.*;
public class 소수찾기 {
  public static int solution(String numbers) {
    int answer = 0;
    HashSet<Integer> set = new HashSet<>();
    permutation("", numbers, set);
    while(set.iterator().hasNext()){
      int val = set.iterator().next();
      if(isPrime(val) == true){
        answer ++;
      }
      set.remove(val);
    }
    
    return answer;
  }
  
  public static void permutation(String temp, String num, HashSet<Integer> set) {
    int n = num.length();
    if(!temp.equals("")){
      set.add(Integer.parseInt(temp));
    }
    for(int i=0; i<n; i++){
      permutation(temp + num.charAt(i), num.substring(0, i) + num.substring(i+1, n), set);
    }
  }

  public static boolean isPrime(int num){
    if(num == 0 || num == 1){
      return false;
    }
    else if(num == 2){
      return true;
    }
    else if(num % 2 == 0){
      return false;
    }
    for(int i=3; i<Math.sqrt(num); i+=2){
      if(num % i == 0){
        return false;
      }
    }
    return true;
  }

  public static void main(String[] args) {
    String numbers1 = "17";
    String numbers2 = "011";
    // System.out.println(solution(numbers1));
    System.out.println(solution(numbers2));
  }
}
