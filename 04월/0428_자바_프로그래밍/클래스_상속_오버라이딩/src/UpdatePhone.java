public class UpdatePhone extends Phone {
  private String card;
  private int month;

  public UpdatePhone(){
    
  }

  public UpdatePhone(String name, String telecom, int price, String card, int month){
    super(name, telecom, price);
    this.card = card;
    this.month = month;
  }

  public void setData(String name, String telecom, int price, String card, int month){
    super.setData(name, telecom, price);
    this.card = card;
    this.month = month;
  }

  @Override
  public void showData(){
    super.showData();
    System.out.println("할인카드 : " + card);
    System.out.println("보험기간 : " + month);
  }
}
