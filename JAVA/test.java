/**
 * J02_2차원배열값증가와출력
 */
public class test {

    public static void main(String[] args) {
         // 2차원 배열 생성과 값 증가 출력
        // 문제1] 
        // 1. 2차원 5행 5열 배열 생성
        // 2. 2차원 배열에 행열에 1씩증가 값을 넣어 출력 하시오.
        // 3. 증가변수는 정수형 cnt
                
        // [1] 입력 설계  2차원 5행 5열
        int[][] arr = new int[5][5];
        int cnt=0;



         // [3] 처리 설계
         for(int i=0; i<arr.length; i++){
            for(int j=0; j<arr[i].length; j++){
                arr[i][j] = ++cnt;

            }
         }





         // [2-1] 출력 설계 : 오름차순
         System.out.println();
         for(int i=0; i<arr.length; i++){
            for(int j=0; j<arr[i].length; j++){
                if(j==0){
                    System.out.printf("%2d ", arr[i][j]);
                }
                else{
                    System.out.printf("%4d ", arr[i][j]);
                }
            }
            System.out.println();
         }
         System.out.println();

         for(int i=arr.length-1; i>=0; i--){
            for(int j=arr[i].length-1; j>=0; j--){
                if(j==4){
                    System.out.printf("%2d", arr[i][j]);
                }
                else{
                    System.out.printf("%4d", arr[i][j]);
                }
            }
            System.out.println();
         }
         System.out.println();
    }
}