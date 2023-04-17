package Greedy;

public class 큰수만들기 {
  public static String solution(String number, int k) {
    String answer="";
    StringBuilder answerBuilder = new StringBuilder();
    char[] array = number.toCharArray();
    int idx = 0;
    int len = array.length - k;
    for(int i=0; i<len; i++){
      char max = '0';
      for(int j=idx; j<=i+k; j++){
        if(array[j] > max){
          max = array[j];
          idx = j+1;
        }
      }
    // answer += Character.toString(max);
      answerBuilder.append(Character.toString(max));
    }
    answer = answerBuilder.toString();
    return answer;
  }
  public static void main(String[] args) {
    String number = "1924";
    int k = 2;
    System.out.println(solution(number, k));
  }
}
