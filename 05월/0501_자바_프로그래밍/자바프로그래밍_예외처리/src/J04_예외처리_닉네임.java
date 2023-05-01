import java.util.Scanner;
public class J04_예외처리_닉네임 {
  public static void main(String[] args) {
    // 포함 할 수 없는 닉네임
    String[] nickName = {"사라", "왕자", "구름", "나그네", "대통령"};
    String nick = "";
    Scanner sc = new Scanner(System.in);
    // 예시) => "왕자"는 사용할 수 없는 단어입니다.
    
    // 입력은 화면 입력 받는다.
    // 제한글자는 3글자 ~ 16자 이내로 사용
    // 예외처리
    // 1. 닉네임은 3~16자 이내로 작성해야 합니다. nick.length >= 3 && nick.length <= 16
    // 2. 닉네임은 입력된 단어를 포함할 수 없습니다. nick.indexOf(nickName[i]) >= 0

    while(true){
      try{
        System.out.print("Nick : ");
        nick = sc.nextLine();
        if(nick.length() < 3 || nick.length() > 16){
          throw new Exception("닉네임은 3~16자 이내로 작성해야 합니다.");
        }
        // for(int i=0; i<nickName.length; i++){
        //   if(nick.indexOf(nickName[i]) >= 0){
        //     throw new Exception("닉네임은 입력된 단어를 포함할 수 없습니다.");
        //   }
        // }
        for(String n : nickName){
          if(nick.contains(n)){
            throw new Exception(nick + " 닉네임은 입력된 단어를 포함할 수 없습니다.");
          }
        }
        System.out.println("닉네임 등록 성공!");
        break;
      }
      catch(Exception e){
        System.err.println("오류 " + e);
      }
    }

  }
}
