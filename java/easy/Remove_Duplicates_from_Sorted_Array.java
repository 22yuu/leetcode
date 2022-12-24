package easy;

public class Remove_Duplicates_from_Sorted_Array {

	/*
	 * Problem link: https://leetcode.com/explore/learn/card/fun-with-arrays/526/deleting-items-from-an-array/3248/
	 * 
	 * 
	 * 
	 * */
	
	static int[] nums;
	
	public static class MySolution {
		private boolean[] isDuplicated;
	    
	    public int removeDuplicates(int[] nums) {
	        isDuplicated = new boolean[201]; // -100 ~ 100 
	        int index = 0;
	        
	        for(int i = 0; i < nums.length; i++) {
	            
	            if(nums[i] >= 0) {
	                if(!isDuplicated[nums[i]]) {
	                    isDuplicated[nums[i]] = true;
	                    nums[index++] = nums[i];
	                }
	            } else {
	                int idx = 100 - nums[i]; // 101 이상부터는 음수값 저장
	                if(!isDuplicated[idx]) {
	                    isDuplicated[idx] = true;
	                    nums[index++] = nums[i];
	                }
	            }
	            
	      
	        }
	        return index;
	    }
	}
	
	public static class Solution {
		
		public int removeDuplicates(int[] nums) {
	        
			int index = 1;
			
			for(int i = 0; i < nums.length - 1; i++) {
				if(nums[i] != nums[i+1] ) {
					System.out.println(nums[i]);
					nums[index++] = nums[i+1];
				}
			}
	        return index;
	    }
	}
	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		MySolution ms = new MySolution();
		nums = new int[]{0,0,1,1,1,2,2,3,3,4};
//		nums = new int[]{1,1,1,2,2,3,3,4};
		
//		print(ms.removeDuplicates(nums));
		
		Solution solution = new Solution();
		
		print(solution.removeDuplicates(nums));
		
	}
	
	public static void print(int num) {
		System.out.print("{ ");
		for(int i = 0; i < num; i++) System.out.print(nums[i] + " ");
		System.out.print(" }\n");
	}

}
