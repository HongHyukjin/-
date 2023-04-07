public class J01_1차원배열과_for_each문 {
  public static void main(String[] args) {
    // 배열생성하고 
    // for each문 출력
    // 순차적으로 나열된 각 원소값들을 접근하는데 유용한 반복문
    // 사용이 간단하다
    int[] num1 = {1,2,3,4,5,6,7};

    for(int i:num1){
      System.out.println("num1 배열 원소 = " + i);
    }

    String[] fruit = {"사과", "딸기", "포도", "수박", "메론", "자몽"};

    for(String s:fruit){
      System.out.println("fruit = " + s);
    }

    String[] month = {"1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"};

    for(String m:month){
      System.out.println("month = " + m);
    }

    enum Month = {"1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"};

    for(Month m : Month.values()){
      System.out.println("월별 = " + m);
    }

  }
}
