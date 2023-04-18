public class Waffle {
  String name(){
    return "와플";
  }

  // 2. 매개변수 1개(문자열) 있는
  String name(String source1){
      return source1 + "와플";
  }


  // 3. 매개변수 2개(문자열,문자열) 있는 메서드
  String name(String source1, String source2){
      return (source1 + source2) + "와플";
  }

  // 4. 매개변수 2개(문자열,문자열) 있는 메서드
  String name(String source, int count){
      return source + "와플" + count + "개";
  }
}
