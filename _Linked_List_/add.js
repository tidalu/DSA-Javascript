/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let c = 0;
  let dummy = new ListNode(0);
  let temp = dummy;

  while (l1 || l2 || c) {
    let sum = 0;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    sum += c;
    c = Math.floor(sum / 10);
    let node = new ListNode(sum % 10);
    temp.next = node;
    temp = temp.next;
  }

  return dummy.next;
};
