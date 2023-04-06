public class J01_1차원배열_정수_실수 {
  public static void main(String[] args) {
    
    // 실수형 1차원 배열 생성하고 데이터를 대입하라
    double[] grade = {4.5, 3.7, 2.8, 3.3, 4.2, 4.0, 3.2}; //7개 배열 개수(배열의 길이)
    //double[] grade = new double[7];

    // 문제1) 배열값 => 배열 인덱스
    // 세번째 배열 인덱스를 이용 데이터 가져오기
    // 배열이름[index number] index : 0 ~ n(n은 배열의 총개수-1)
    // 배열이름.길이 => grade.length => 결과 : 7 => 배열 인덱스번호는 n-1이므로 7-1 => 6
    // System.out.println("grade[2] " + grade[2]);

    // 반복문 출력하라
    // 반복문의 종료값은 grade.length 이용
    //////////////////////////////////////////////////
    // 단 조건이 있다(점수가 3.5 이상 인원수를 카운트하라)
    // 1. 조건문 필요
    // 2. 카운트 누적변수 필요
    // 3. 총점(누적점수)
    //////////////////////////////////////////////////

    System.out.println();
    System.out.println("////////////////for문 출력///////////////////");
    System.out.println();
    int cnt = 0;
    double sum = 0;
    for(int i=0; i<grade.length; i++){
      if(grade[i] >= 3.5){
        System.out.println("grade[" + i + "] " + grade[i]);
        cnt++;
        sum += grade[i];
      }
    }
    System.out.println("점수가 3.5 이상인 인원수 : " + cnt);
    System.out.println("점수가 3.5 이상인 학생들의 점수의 누적핪 : " + sum);
    
    System.out.println();
    System.out.println("///////////while문 출력///////////////");
    System.out.println();
    int i = 0;
    cnt = 0;
    sum = 0;
    while(i < grade.length){
      // System.out.println("grade[" + i + "] " + grade[i]);
      if(grade[i] >= 3.5){
        cnt ++;
        sum += grade[i];
        System.out.println("grade[" + i + "] " + grade[i]);
      }
      i++;
    }
    System.out.println("점수가 3.5 이상인 인원수 : " + cnt);
    System.out.println("점수가 3.5 이상인 학생들의 점수의 누적핪 : " + sum);    

  }
}
