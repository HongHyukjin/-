public class J01_오버로딩 {
  public void Overloading() {
    System.out.println("static 없는 메서드 실행");
  }
  public static void Overloading(String str) {
    System.out.println("매개변수 없는 기본 메서드");
  }
  public static String Overloading(String name, String jikcheck){
    return name + " " + jikcheck;
  }
  public static int Overloading(int a, int b){
    return a + b;
  }
  public static String Overloading(String a, int b){
    return a + " " + b;
  }
  public static String Overloading(String a, int b, double c){
    return a + " " + (b + c);
  }
  public static void main(String[] args) {
    J01_오버로딩 obj = new J01_오버로딩();
    obj.Overloading();
    String overload1 = Overloading("이순신", "전라좌수영");
    int overload2 = Overloading(10, 30);
    String overload3 = Overloading("김유신", 50);
    String overload4 = Overloading("김대중", 50, 90);
    String overload5 = Overloading("박정희", 50);

    System.out.println("overload1 " + overload1);
    System.out.println("overload2 " + overload2);
    System.out.println("overload3 " + overload3);
    System.out.println("overload4 " + overload4);
    System.out.println("overload5 " + overload5);
  }
}
