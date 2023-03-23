public class J02_형변환 {
  public static void main(String[] args) {
    short sMin = -32768;
    short sMax = 32767;
    char cMin = 0;
    char cMax = 65535;

    System.out.println("sMin   = " + sMin);             //sMin   = -32768
    System.out.println("sMin-1 = " + (short)(sMin-1));  //sMin-1 = 32767
    System.out.println("sMax   = " + sMax);             //sMax   = 32767
    System.out.println("sMax+1 = " + (short)(sMax+1));  //sMax+1 = -32768
    System.out.println("cMin   = " + (int)(cMin));      //cMin   = 0
    System.out.println("cMin-- = " + (int)--cMin);      //cMin-- = 65535
    System.out.println("cMax   = " + (int)cMax);        //cMax   = 65535
    System.out.println("cMax++ = " + (int)++cMax);      //cMax++ = 0
  }
}
