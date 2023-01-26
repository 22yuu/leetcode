/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head == null || head.next == null) {
    return head;
  }

  let tempList = new ListNode();
  tempList.next = head;
  let curr = tempList;

  while (curr.next !== null && curr.next.next !== null) {
    if (curr.next.val == curr.next.next.val) {
      let duplicatedValue = curr.next.val;

      while (curr.next !== null && curr.next.val == duplicatedValue) {
        curr.next = curr.next.next;
      }
    } else {
      curr = curr.next;
    }
  }
  console.log(tempList.next);

  return tempList.next;
};
