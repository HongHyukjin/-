public class J02_리터럴_데이터타입_형변환 {
  public static void main(String[] args) {
    //숫자 리터럴
    long priceNum = 1_234_567_891_234_567_89L;
    float floatNum = 3.141_59f; //소수점 앞 뒤에는 사용 불가
    long longNum = 0x76;  //x앞뒤 사용불가
    long longNum2 = 0b01010;  //b앞뒤 사용불가
    long longNum3 = 045;  //8진수
    long longNum4 = 0_45; //8진수

    System.out.println("숫자 리터럴_언더바(언더스코어) 사용 ______________");
    System.out.println(priceNum);
    System.out.println((floatNum));
    System.out.println(longNum);

  }
}