public class J03_1차원배열_문자열처리 {
  public static void main(String[] args) {
    
    // 문제1)
    // 문자열 배열 선언하고 생성하기
    // 배열의 길이는 10개로 한다.
    // 데이터는 인기 스타 또는 연예인 이름 넣기
    // 1. 배열 선언하기
    String[] names = new String[10];
    
    // 2. 배열 데이터 넣기
    names[0] = "아이유";
    names[1] = "존박";
    names[2] = "송중기";
    names[3] = "송혜교";
    names[4] = "딘";
    names[5] = "개코";
    names[6] = "윤하";
    names[7] = "조이현";
    names[8] = "이소령";
    names[9] = "해바라기";

    // for
    System.out.println("///////////FOR문////////////////");
    for(int i=0; i<names.length; i++){
      if(names[i].length() <= 2){
        System.out.println("names[" + i +  "] " + names[i]);
      }
    }
    // while
    System.out.println("///////////WHILE문////////////////");
    int i = 0;
    while(i<names.length){
      System.out.println(names[i] + " : " + names[i].length() + "글자");
      i ++;
    }

    // 문자열을 글자 단위로 출력
    String str = "Autumn";
    
    for(int j=0; j<str.length(); j++){
      System.out.print(str.charAt(j));
    }


  }
}
