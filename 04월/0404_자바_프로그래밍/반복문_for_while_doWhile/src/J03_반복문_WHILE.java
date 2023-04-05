public class J03_반복문_WHILE {
    public static void main(String[] args) {
        // 1 ~ 10 까지 출력하는 반복문
        // 1 ~ 10 가지의 수의 누적합 출력
        // while(){} 사용 구현

        // 1. 입력설계
        int i = 0;
        int hap = 0;

        // 3. 처리설계및 구현
        while(i<10){
            i++;
            hap+=i;
            System.out.println("1~10까지 카운트 = " + i );
        }

        // 2. 출력설계
        System.out.println();
        System.out.println("1~10까지 누적합 = " + hap );
        System.out.println();




    }
}
