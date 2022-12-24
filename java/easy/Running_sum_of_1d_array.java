package easy;

public class Running_sum_of_1d_array {
	class Solution {
	    public int[] runningSum(int[] nums) {

	        for(int i = 1; i < nums.length; i++) {
	            nums[i] = nums[i - 1] + nums[i];
	        }

	        return nums;
	    }
	}
}
