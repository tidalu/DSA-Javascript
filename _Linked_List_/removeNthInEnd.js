/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (head == null) return null;

  let cnt = 1;
  let temp = head;

  while (temp) {
    cnt++;
    temp = temp.next;
  }

  let target = cnt - n;

  if (target <= 0) {
    return head.next;
  }

  temp = head;
  let prev = null;

  while (temp) {
    target--;
    if (target === 0) {
      if (prev !== null) {
        prev.next = temp.next;
      } else {
        head = temp.next;
      }
      break;
    }
    prev = temp;
    temp = temp.next;
  }

  return head;
};
