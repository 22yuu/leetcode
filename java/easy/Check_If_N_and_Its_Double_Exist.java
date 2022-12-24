package easy;

import java.util.*;

public class Check_If_N_and_Its_Double_Exist {

	public static class Solution {
		
		public boolean checkIfExist(int[] arr) {
	        
	        Arrays.sort(arr);
	        
	        for(int i = 0; i < arr.length; i++) {
	            for(int j = 0 ; j < arr.length; j++) {
	            	System.out.println(arr[i] + " " + arr[j]);
	                if(arr[j] == arr[i] * 2) {
	                    return true;
	                }
	            }
	        } // end for
	        
	        return false;
	    }
	}
	
	public static void main(String[] args) {
		int[] arr = new int[] {-10,12,-20,-8,15};
		
		
		Solution solution = new Solution();
		
		solution.checkIfExist(arr);
	}
}
