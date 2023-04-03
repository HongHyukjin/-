import java.util.Calendar;
import java.util.Date;

public class J01_StringFormat {
  public static void main(String[] args) {
    String str1 = "Java Programming";
    String str2 = "JSP";
    String str3 = "React.js";
    String str4 = "Node.js";
    String str5 = "HTML";
    String str6 = "CSS3";
    String str7 = "SASS";
    String str8 = "Vue.js";
    String str9 = "Spring";

    // 1.문자열 형식
    System.out.println(String.format("%s IDE 이클립스와 VS CODE, 인텔리제이", str1));
    System.out.println(String.format("%s", str2));
    System.out.println(String.format("%s", str3));
    System.out.println(String.format("%s", str4));
    System.out.println(String.format("%s", str5));
    System.out.println(String.format("%s", str6));
    System.out.println(String.format("%s", str7));
    System.out.println(String.format("%s", str8));
    System.out.println(String.format("%s", str9));
    
    // 오른쪽 정렬 출력
    System.out.println(String.format("%20s", str1));
    System.out.println(String.format("%20s", str2));
    System.out.println(String.format("%20s", str3));
    System.out.println(String.format("%20s", str4));
    System.out.println(String.format("%20s", str5));
    System.out.println(String.format("%20s", str6));
    System.out.println(String.format("%20s", str7));
    System.out.println(String.format("%20s", str8));
    System.out.println(String.format("%20s", str9));
    
    // 2. 실수형 형식 
    double num_d = 123.456789;

    System.out.println(num_d);
    System.out.println(String.format("%f", 3.41533));
    System.out.println(String.format("%f_부동소수점 형식", num_d));

    int money = 35000;

    System.out.println("//// 금액 표시 //////////");
    System.out.println(String.format("%d", money));
    System.out.println(String.format("%,d", money));

    Date today = new Date();
    Calendar cal = Calendar.getInstance();

    System.out.println(String.format("%tp", cal));
    System.out.println(String.format("%tY", cal));
    System.out.println(String.format("%ty", cal));
    System.out.println(String.format("%tm", cal));
    System.out.println(String.format("%td", cal));
  }
}
