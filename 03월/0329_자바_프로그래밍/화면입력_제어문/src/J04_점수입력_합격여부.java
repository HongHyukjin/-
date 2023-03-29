import java.util.Scanner;

public class J04_점수입력_합격여부 {
  public static void main(String[] args) {
    int kor, eng, mat;
    int tot = 0;
    float avg = 0;

    Scanner sc = new Scanner(System.in);

    System.out.printf("국어점수 : ");
    kor = sc.nextInt();
    System.out.printf("영어점수 : ");
    eng = sc.nextInt();
    System.out.printf("수학점수 : ");
    mat = sc.nextInt();
    tot = kor + eng + mat;
    avg = (float)tot / 3;
    System.out.println("평균은 " + avg);
    if(avg >= 80){
      System.out.println("합격입니다!");
    }
    else{
      System.out.println("불합격입니다!");
    }

    sc.close();

  }
}
