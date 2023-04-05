/**
 * J01_Even_Odd
 */
public class J01_Even_Odd {

    public static void main(String[] args) {
        // [문제1]
        // 1 ~ 100 짝수와 홀수의 합계 출력
        // 반복문은 for(){} 사용 구현하시오.

        // 1. 입력 : 자료형 변수이름 = 초기값
        int i=0;  // 1~100 변수
        int even; // 짝수
        int odd;  // 홀수
        int even_sum = 0; //  짝수 누적합의 변수는 반드시 초기값을 지정해야 한다.
        int odd_sum = 0; //  홀수 누적합의 변수는 반드시 초기값을 지정해야 한다.

        // 3. 처리 : 1-100까지의 정수를 2로 나누어 나머지가 0이면 짝수, 아니면 홀수
        for(i=1; i<=100; i++){
            if(i%2==0){  //even
                even_sum+=i;  // even_sum = even_sum + i;
            }
            else { // odd
                odd_sum+=i;   // odd_sum = odd_sum + i;
            }
        }

        // 2. 출력 : 구문
        System.out.println("짝수의 합계 = " + even_sum );
        System.out.println("홀수의 합계 = " + odd_sum );




    }
}