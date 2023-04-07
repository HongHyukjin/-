import java.util.*;
public class J02_2차원배열 {
  public static void main(String[] args) {
    // 1차원 배열 : 행(줄 row) a[]
        // 2차원 배열 : 행(줄 row), 열(칸 column) a[행][열]

        // 1차원 배열을 여러개
        String[] arr1 = {"1","2","3","4","5"}; // 글번호
        String[] arr2 = {"글제목1","글제목2","글제목3","글제목4","글제목5"}; //글제목
        String[] arr3 = {"2023-01-01","2023-01-02","2023-01-03","2023-01-04","2023-01-05"}; //날짜
        String[] arr4 = {"11","22","33","34","55"}; // 조회수


        System.out.println();
        System.out.println("1차원 배열 arr1[0~4] 출력 ================");
        System.out.println( " arr1[0] = " + arr1[0] );
        System.out.println( " arr1[1] = " + arr1[1] );
        System.out.println( " arr1[2] = " + arr1[2] );
        System.out.println( " arr1[3] = " + arr1[3] );
        System.out.println( " arr1[4] = " + arr1[4] );
        System.out.println();


        System.out.println();
        System.out.println("1차원 배열 arr2[0~4] 출력 ================");
        System.out.println( " arr2[0] = " + arr2[0] );
        System.out.println( " arr2[1] = " + arr2[1] );
        System.out.println( " arr2[2] = " + arr2[2] );
        System.out.println( " arr2[3] = " + arr2[3] );
        System.out.println( " arr2[4] = " + arr2[4] );
        System.out.println();

        // 2차원 배열
        String[][] arr={
            {"1","2","3","4","5"}, 
            {"글제목1","글제목2","글제목3","글제목4","글제목5"}, // 
            {"2023-01-01","2023-01-02","2023-01-03","2023-01-04","2023-01-05"},
            {"11","22","33","34","55"}
        };

        // 값 저장
        // [0][0] [0][1] [0][2] [0][3] [0][4] 저장
        // [1][0] [1][1] [1][2] [1][3] [1][4] 저장
        // [2][0] [2][1] [2][2] [2][3] [2][4] 저장
        // [3][0] [3][1] [3][2] [3][3] [3][4] 저장
        // [4][0] [4][1] [4][2] [4][3] [4][4] 저장

        System.out.println();
        System.out.println("2차원 배열 1행 출력 ================");
        System.out.println( " arr[0][0] = " + arr[0][0] );
        System.out.println( " arr[0][1] = " + arr[0][1] );
        System.out.println( " arr[0][2] = " + arr[0][2] );
        System.out.println( " arr[0][3] = " + arr[0][3] );
        System.out.println( " arr[0][4] = " + arr[0][4] );
        System.out.println();





        System.out.println();
        System.out.println("2차원 배열 2행 출력 ================");
        System.out.println( " arr[1][0] = " + arr[1][0] );
        System.out.println( " arr[1][1] = " + arr[1][1] );
        System.out.println( " arr[1][2] = " + arr[1][2] );
        System.out.println( " arr[1][3] = " + arr[1][3] );
        System.out.println( " arr[1][4] = " + arr[1][4] );
        System.out.println();

        // 배열 행 길이 알아내기
        System.out.println("행 길이(갯수) : " + arr.length );
        System.out.println("1행별 열 길이(갯수) : " + arr[0].length );
        System.out.println("2행별 열 길이(갯수) : " + arr[1].length );
        System.out.println("3행별 열 길이(갯수) : " + arr[2].length );
        System.out.println("4행별 열 길이(갯수) : " + arr[3].length );
        System.out.println();

        for(int i=0; i<5; i++){
          for(int j=0; j<4; j++){
            System.out.print(arr[j][i] + "  ");
          }
          System.out.println();
        }


        String[][] board={
          {"1", "글제목1","2023-01-01", "11"},
          {"2", "글제목2","2023-01-02", "22"},
          {"3", "글제목3","2023-01-03", "33"},
          {"4", "글제목4","2023-01-04", "44"},
          {"5", "글제목5","2023-01-05", "55"}
        };

        System.out.println();
        for(int i=0; i<board.length; i++){
          for(int j=0; j<board[i].length; j++){
            System.out.print(board[i][j] + "  ");
          }
          System.out.println();
        }

        ArrayList<Integer> list1 = new ArrayList<>();
        ArrayList<Integer> list2 = new ArrayList<>(Arrays.asList(1,2,3));
        list1.add(10);
        list1.add(20);
        list1.add(30);
        list1.remove(1);
        for(int l:list1){
          System.out.println(l);
        }
        System.out.println(list1.size());
        System.out.println(list1.contains(10));
        System.out.println(list1.indexOf(10));
  }
}
