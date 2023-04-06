
public class J02_문자타입_배열처리 {
  public static void main(String[] args) {
    
    // 문자타입 배열 6개길이 배열 생성
    char[] ch = new char[6];
    ch[0] = 'L';
    ch[1] = 'O';
    ch[2] = 'V';
    ch[3] = 'E';
    ch[4] = 'I';
    ch[5] = 'S';

    // 배열값 모두 줄바꿈 없이 한줄로 출력
    // 반복문 For
    System.out.println();
    System.out.println();
    for(int i=0; i<ch.length; i++){
      System.out.print(ch[i]);
      if(ch[i] == 'E'){
        System.out.print(" ");
      }
    }
    System.out.println();
    System.out.println();
    
    // 반복문 While
    int i =0;
    while(i<ch.length){
      System.out.print(ch[i]);
      if(ch[i] == 'E'){
        System.out.print(" ");
      }
      i++;
    }
    System.out.println();
    System.out.println();
    
    

  }
}
