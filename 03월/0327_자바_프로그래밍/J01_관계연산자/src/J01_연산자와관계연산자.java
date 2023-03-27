public class J01_연산자와관계연산자 {
  public static void main(String[] args) {
    //문제1] 성적 연산
    //국어, 영어, 수학, 총점, 평균 점수 변수 지정하고
    //총점과 평균을 출력하시오
    int 국어 = 100;
    int 영어 = 95;
    int 수학 = 80;
    int 총점 = 0;
    float 평균 = 0;
    총점 = 국어 + 영어 + 수학;
    평균 = 총점 / 3;
    System.out.println("국어 : " + 국어);
    System.out.println("영어 : " + 영어);
    System.out.println("수학 : " + 수학);
    System.out.println("총점 : " + 총점);
    System.out.println("평균 : " + 평균);
  }
}
