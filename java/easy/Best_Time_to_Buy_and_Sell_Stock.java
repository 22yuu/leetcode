package easy;

public class Best_Time_to_Buy_and_Sell_Stock {
	
	public static int maxProfit(int[] prices) {
        
        int max = Integer.MIN_VALUE;
        
        for(int i = prices.length - 1; i >= 0; i--) {
            for(int j = 0; j < i; j++) {
                if(i == j ) continue;
                max = Math.max(max, prices[i] - prices[j]);
                System.out.println("value : " + (prices[i] - prices[j]));
            }
        }
        return max > 0 ? max : 0;
    }

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] prices = new int[] {7,1,5,3,6,4};
		maxProfit(prices);
	}

}
