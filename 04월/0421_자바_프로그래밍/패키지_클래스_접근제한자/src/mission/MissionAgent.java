package mission;

public class MissionAgent {

  String name;    // default 멤버변수
  public int codeNum;   // public 멤버변수

  public String getName(){  // getter 함수
    return name;
  }

  public void setName(String name){  // setter 함수
    this.name = name;
  }

  // 진짜코드는 은닉화 관리한다.
  private int getCodeNum(){
    return codeNum+2023;
  }

  private void setCodeNum(int codeNum){
    this.codeNum = codeNum;
  }

  public void showData(){
    System.out.println("이름 : " + getName());
    System.out.println("코드번호 : " + getCodeNum());
  }

}


