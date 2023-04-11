import java.util.Scanner;

public class test {
  public static void main(String[] args) {
    int[][] arr = new int[5][6];
    int[] lotto = new int[7];
    int rand_num = 0;
    int cnt = 0;
    boolean keep = true;
    boolean bonus = false;
    Scanner sc = new Scanner(System.in);

    while(keep){
      System.out.println();
      System.out.println("계속 : 1 / 그만 : 아무숫자");
      if(sc.nextInt() == 1){
        keep = true;
      }
      else{
        keep = false;
      }
      System.out.println();
      System.out.println("           자동           ");
      for(int i=0; i<arr.length; i++){
        System.out.println("-------------------------");
        for(int j=0; j<arr[i].length; j++){
          arr[i][j] = (int)(Math.random()*45+1);
          System.out.printf("%3d ", arr[i][j]);
        }
        System.out.println();
      }
      System.out.println("-------------------------");
      System.out.println();
      System.out.println("           당첨번호           ");
      for(int i=0; i<lotto.length; i++){
        lotto[i] = (int)(Math.random()*45+1);
        for(int j=0; j<i; j++){
          if(lotto[i] == lotto[j]){
            i--;
          }
        }
        System.out.printf("%3d ", lotto[i]);
      }

      System.out.println();

      for(int i=0; i<arr.length; i++){
        cnt = 0;
        for(int j=0; j<arr[i].length; j++){
           for(int k=0; k<lotto.length; k++){
              if(arr[i][j] == lotto[k]){
                cnt++;
                if(k == lotto.length-1){
                  bonus = true;
                }
              }
           }
        }
        System.out.print(i + "번쨰 줄 : ");
        if(cnt == 6 && bonus == false){
          System.out.println("1등");
        }
        else if(cnt == 6 && bonus == true){
          System.out.println("2등");
        }
        else if(cnt == 5){
          System.out.println("3등");
        }
        else if(cnt == 4){
          System.out.println("4등");
        }
        else if(cnt == 3){
          System.out.println("5등");
        }
        else{
          System.out.println("꽝");
        }
      }
    }
    
  }
}
