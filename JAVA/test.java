import java.util.*;
public class test {

  public static void main(String[] args) {
    List<Integer> list = new ArrayList<>();

    list.add(3);
    list.add(5);
    list.add(7);

    int cnt = 0;
    System.out.println(list.size());
    for(Integer n : list){
      cnt++;
      if(cnt == list.size()){
        System.out.println("끝");
      }
      System.out.println(n);
    }
    
  }
}