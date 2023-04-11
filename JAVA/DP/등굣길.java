package DP;

public class 등굣길 {

  // 아래, 오른쪽으로만 이동가능
  // 현재 위치까지의 최단경로 개수는 dp[i][j-1] + dp[i-1][j]
  // 위쪽 가장자리와 왼쪽 가장자리는 모두 최단경로 개수가 1(시작점부터 직진)
  // 우물은 피해가야됨
  // dp를 채우는 중간과정에서부터 값을 담을때 10억으로 나눈값을 담아야됨
  // 안그러면 중간과정 값이 너무 커서 효율성 오류
  

  static int solution(int m, int n, int[][] puddles){
    int answer = 0;
    int[][] dp = new int[n][m];

    for(int i=0; i<puddles.length; i++){
      dp[puddles[i][1]-1][puddles[i][0]-1] = -1;
    }

    for(int i=0; i<n; i++){
      for(int j=0; j<m; j++){
        if(i == 0 && j == 0){
          dp[i][j] = 1;
        }
        else if(dp[i][j] == -1){
          dp[i][j] = 0;
        }
        else if(i == 0 && j >= 1){
          dp[i][j] = dp[i][j-1] % 1000000007;
        }
        else if(j == 0 && i >= 1){
          dp[i][j] = dp[i-1][j] % 1000000007;
        }
        else{
          dp[i][j] = (dp[i][j-1] + dp[i-1][j]) % 1000000007;;
        }
      }
    }

    for(int i=0; i<n; i++){
      for(int j=0; j<m; j++){
        System.out.printf("%3d", dp[i][j]);
      }
      System.out.println();
    }
    answer = dp[n-1][m-1];
    return answer;
  }
  public static void main(String[] args) {
    int m = 4;
    int n = 3;
    int[][] puddles = {{2,2}};
    System.out.println(solution(m, n, puddles));
  }
}
