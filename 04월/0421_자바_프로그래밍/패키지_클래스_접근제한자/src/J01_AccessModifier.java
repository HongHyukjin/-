import mission.MissionAgent;

public class J01_AccessModifier {
  public static void main(String[] args) {

    // 생성자 생성
    MissionAgent newMissionAgent = new MissionAgent();
    
    newMissionAgent.setName("톰 크루즈"); // public 메서드로 어디서든지 접근 가능하다.
    newMissionAgent.codeNum = 301;  // public 접근제한자로서 어디서든지 접근 가능하다.
    
    newMissionAgent.showData();

    Agent newAgent = new Agent();

    newAgent.setName("홍혁진");
    newAgent.setAge(-27);
    System.out.println("이름 : " + newAgent.getName());
    System.out.println("나이 : " + newAgent.getAge());

  }
}

class Agent{

  // private 멤버변수 접근지정
  // public 메서드 지정
  
  private String name;
  private int age;

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getAge() {
    return this.age;
  }

  public void setAge(int age) {
    if(age < 0){
      this.age = age * -1;
    }
    else{
      this.age = age;
    }
  }



}
