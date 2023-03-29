import java.util.Scanner;

public class J01_화면입력 {
  public static void main(String[] args) {
        // 1. 문자열 입력을 받을 때 외부 클래스인 Scanner를 임포트 해서
        // 생성자를 생성하여 사용한다.
        Scanner sc = new Scanner(System.in);
        // System.out.println("문자열을 입력하세요!");
        // String txt = sc.nextLine();
        // System.out.println(txt);


        // 2. 단어 입력
        // 단어는 공백전까지 입력받는다.
        // System.out.println("단어를 입력 : ?");
        // String word = sc.next();
        // System.out.println(word);

        // 3. 정수 입력
        // System.out.println("정수를 입력 : ?");
        // int num = sc.nextInt();
        // System.out.println("입력된 정수는 : "+ num);

        // 4. 실수 입력
        // System.out.println("실수 입력 : ");
        // double num_d = sc.nextDouble();
        // System.out.println("입력된 실수는 : " + num_d);

        // 5. 문자(1글자) 입력
        // next().charAt(index Number) 인덱스 번호가 첫번째 글자 0, 두번째 글자 1, ...
        System.out.println("문자를 입력 : ");
        char ch = sc.next().charAt(0);
        System.out.println("입력된 글자는(첫번째) = " + ch);

        sc.close();

  }
}

