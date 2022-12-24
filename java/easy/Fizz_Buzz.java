package easy;
import java.util.*;

public class Fizz_Buzz {
	

	class Solution {
	    public List<String> fizzBuzz(int n) {
	        List<String> answer = new ArrayList<>();

	        for(int i = 1; i <= n; i++) {

	            if(i % 3 == 0 && i % 5 == 0) {
	                answer.add("FizzBuzz");
	                continue;
	            }

	            if(i % 3 == 0) {
	                answer.add("Fizz");
	                continue;
	            }

	            if(i % 5 == 0) {
	                answer.add("Buzz");
	                continue;
	            }

	            answer.add(i + "");
	        }


	        return answer;
	    }
	}
}
