public class J02_성적처리 {
  public static void main(String[] args) {
    int kor, eng, mat;
    kor = 77;
    eng = 80;
    mat = 85;
    System.out.println("국어 : " + kor);
    System.out.println("영어 : " + eng);
    System.out.println("수학 : " + mat);
    System.out.println("총점 : " + (kor + eng + mat));
    System.out.println("평균 : " + (double)((kor + eng + mat) / 3));
  }
}
