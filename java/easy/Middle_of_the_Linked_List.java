package easy;

public class Middle_of_the_Linked_List {


	 // Definition for singly-linked list.
	 public class ListNode {
	      int val;
	      ListNode next;
	      ListNode() {}
	      ListNode(int val) { this.val = val; }
	      ListNode(int val, ListNode next) { this.val = val; this.next = next; }
	  }
	 

	class Solution {
	    public ListNode middleNode(ListNode head) {
	        ListNode middleNode = head;
	        ListNode endNode = head;

	        while(endNode != null && endNode.next != null) {
	            middleNode = middleNode.next;
	            endNode = endNode.next.next;
	        }

	        return middleNode;
	    }
	}
}
