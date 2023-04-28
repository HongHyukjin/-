
/*
 * J01_Phone_클래스_오버라이딩
 * 
 * 기존의 Phone이라는 클래스로 휴대폰 정보 관리했으나
 * 업데이트가 진행되면서 새로운 정보들이 추가되었다.
 * Phone 클래스는 그대로 사용, 상속을 하여
 * 추가된 정보들을 저장하도록 업그레이드를 한다.
 * 
 * 부모클래스 Phone
 * 모든 필드는 private 접근제한자 사용한다.
 * 필드 : 이름, 통신사, 가격
 * 
 * 생성자
 * 
 * 메서드 showData
 * 
 * 메서드 오버라이딩
 * 자식클래스 업데이트폰 UpdatePhone
 * 필드 : 할인카드, 보험기간
 * 
 * 모든 필드를 초기화하는 생성자
 * 
 * 오버라이딩 메서드
 * 
 */
public class J01_Phone_클래스_오버라이딩 {
  public static void main(String[] args) {
    UpdatePhone[] uparr = new UpdatePhone[3];
    uparr[0] = new UpdatePhone("아이폰", "LG Telecom", 1000, "삼성카드", 24);
    uparr[1] = new UpdatePhone("갤럭시", "LG Telecom", 1000, "롯데카드", 12);
    uparr[2] = new UpdatePhone("모토로라", "LG Telecom", 1000, "현대카드", 24);

    for(UpdatePhone up : uparr){
      up.showData();
      System.out.println("=============================");
    }

    
  }
}


