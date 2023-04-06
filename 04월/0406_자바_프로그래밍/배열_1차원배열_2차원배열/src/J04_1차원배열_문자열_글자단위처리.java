public class J04_1차원배열_문자열_글자단위처리 {
  public static void main(String[] args) {
    
    // 문자열을 글자 단위로 출력
    String str = "Autumn";
    
    for(int i=0; i<str.length(); i++){
      System.out.print(str.charAt(i));
    }
    System.out.println();

    // System.out.println(str.toUpperCase());

    str = "Summer";
    char[] ch = new char[str.length()];

    for(int i=0; i<str.length(); i++){
      ch[i] = str.charAt(i);
      System.out.print(ch[i]);
    }

    System.out.println();

    int i = 0;
    while(i < str.length()){
      ch[i] = str.charAt(i);
      System.out.print(ch[i]);
      i++;
    }
    

  }
}
