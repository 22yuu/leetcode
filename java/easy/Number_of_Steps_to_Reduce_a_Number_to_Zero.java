package easy;

public class Number_of_Steps_to_Reduce_a_Number_to_Zero {
	class Solution {
	    public int numberOfSteps(int num) {
	        int count = 0;

	        while(num > 0) {
	            
	            count += 1;

	            if(num % 2 == 0) {
	                num = num / 2;
	                continue;
	            }

	            num = num - 1;
	        }

	        return count;
	    }
	}
}
