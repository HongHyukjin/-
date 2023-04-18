import java.util.*;
public class test {

  public static void main(String[] args) {
    int num = 1234;
    int result = 0;
    String numstr = Integer.toString(num);
    char[] numcharr = numstr.toCharArray();
    for(int i=0; i<numcharr.length; i++){
      System.out.print(numcharr[i] + " ");
      result += (int)numcharr[i] - 48;
    }
    System.out.println();
    System.out.println(result);

    
  }
}