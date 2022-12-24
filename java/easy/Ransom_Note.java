package easy;

import java.util.*;

public class Ransom_Note {
	class Solution {
	    public boolean canConstruct(String ransomNote, String magazine) {
	        Map<Character, Integer> hm = new HashMap<>();

	        for(int i = 0; i < magazine.length(); i++) {

	            if(!hm.containsKey(magazine.charAt(i))) {
	                hm.put(magazine.charAt(i), 1);
	            } else {
	                hm.put(magazine.charAt(i), hm.get(magazine.charAt(i)) +1);
	            }
	        }

	        for(int i = 0 ; i < ransomNote.length(); i++) {

	            if(hm.containsKey(ransomNote.charAt(i)) && hm.get(ransomNote.charAt(i)) > 0){
	                hm.put(ransomNote.charAt(i),hm.get(ransomNote.charAt(i)) - 1);
	                continue;
	            } else return false;
	        }


	        return true;

	    }
	}
}
