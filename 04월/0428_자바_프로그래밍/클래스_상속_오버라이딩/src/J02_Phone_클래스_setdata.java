public class J02_Phone_클래스_setdata {
  public static void main(String[] args) {

    // 생성자 인스턴스 배열처리
    UpdatePhone[] uparr = new UpdatePhone[3];
    uparr[0] = new UpdatePhone();
    uparr[0].setData("아이폰", "LG Telecom", 1000, "삼성카드", 24);
    uparr[1] = new UpdatePhone();
    uparr[1].setData("갤럭시", "LG Telecom", 1000, "롯데카드", 12);
    uparr[2] = new UpdatePhone();
    uparr[2].setData("모토로라", "LG Telecom", 1000, "현대카드", 24);

    for(UpdatePhone up : uparr){
      up.showData();
      System.out.println("=============================");
    }
  }
}
