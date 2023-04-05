import java.util.Scanner;

/*
  배열(Array)
  같은 자료형의 여러개 데이터를 묶어서 저장하는 공간
  배열의 저장공간은 배열 인덱스번호 시작 0부터 순서를 갖는다.
  처음 생성(생성자방식 new)할 때 배열의 크기를 정해야하며,
  한번 크기를 정하면 변경할 수 없다.

  배열의 선언 방법
  1. 데이터 목록으로 배열을 생성하기
     자료형 [] 변수명 = {데이터1, 데이터2, 데이터3 ....}
     
 */

public class J03_배열_1차원배열 {
  public static void main(String[] args) {
    // 배열 선언
    // 1. 데이터 목록으로 배열을 생성하기
    // 자료형 [] 변수명 = {데이터1, 데이터2, 데이터3 ....}
    System.out.println("============배열 선언과 생성하기==============");
    // 1차원 배열에 정수 데이터 10, 20, 30, 40, 50 5개를 저장하기
    int[] arr = {10, 20, 30, 40, 50};  //리터럴 방식

    
    // 1차원 배열값 출력하기
    System.out.println("============배열 출력하기 인덱스 번호 사용==============");
    System.out.println("  첫번째 배열 [0] = " + arr[0]);
    System.out.println("  두번째 배열 [1] = " + arr[1]);
    System.out.println("  세번째 배열 [2] = " + arr[2]);
    System.out.println("  네번째 배열 [3] = " + arr[3]);
    System.out.println("다섯번째 배열 [4] = " + arr[4]);

    // 1차원 배열값 출력하기 - 반복문 활용
    System.out.println("============배열 출력하기 반복문 활용==============");
    for(int i=0; i<arr.length; i++){
      System.out.println(i + "번째 배열[" + i + "] " + arr[i]);
    }

    // 2. 배열 데이터 변경하기
    // int [] arr = {10, 20, 30, 40, 50};
    arr[0] = 200; //10 -> 200
    arr[1] = 300; //10 -> 200
    arr[2] = 400; //10 -> 200
    arr[3] = 500; //10 -> 200
    arr[4] = 600; //10 -> 200
    System.out.println("============변경된 배열값 출력하기==============");
    for(int i=0; i<arr.length; i++){
      System.out.println(i + "번째 배열[" + i + "] " + arr[i]);
    }

    // 3. 배열 선언만 해놓고 나중에 데이터를 넣는 방법
    int[] arr2;
    // 방법1. 선언된 배열의 데이터 넣기
    arr2 = new int[]{1, 2, 3, 4, 5};

    // 방법2. 선언된 배열의 데이터 넣기
    // arr2 = {10, 20, 30, 40, 50};  //오류발생(생성자 방식으로 넣어야함)

    System.out.println("============배열 선언 후 데이터 넣기 그리고 반복문 출력==============");
    for(int i=0; i<arr2.length; i++){
      System.out.println(i + "번째 배열[" + i + "] " + arr2[i]);
    }

    // 4. 배열 생성하기 
    int[] arr3 = new int[5];  //정수형 1차원 배열 저장공간 5개를 생성한다.

    // 배열 데이터 넣기
    arr3[0] = 1000;
    arr3[1] = 2000;
    arr3[2] = 3000;
    arr3[3] = 4000;
    arr3[4] = 5000;

    System.out.println("============배열 선언 후 데이터 넣기 그리고 반복문 출력==============");
    for(int i=0; i<arr3.length; i++){
      System.out.println(i + "번째 배열[" + i + "] " + arr3[i]);
    }

    // 5. 배열 화면 입력받기
    Scanner sc = new Scanner(System.in);
    int[] arr4 = new int[3];

    System.out.println("============배열 Scanner로 입력받기==============");
    System.out.println("배열 데이터 입력 :");
    for(int i=0; i<arr4.length; i++){
      arr4[i] = sc.nextInt();
    }
    System.out.println("============입력받은 배열값 할당하기==============");
    for(int i=0; i<arr4.length; i++){
      System.out.println("arr4[" + i + "] = " + arr4[i]);
    }


  }
}
