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
var oddEvenList = function (head) {
  if (head == null || head.next == null) return head;
  let temp = head;
  let cnt = 1;
  while (temp.next) {
    cnt++;
    temp = temp.next;
  }

  let mover = head;
  let prev = new ListNode();
  let m = 1;
  while (cnt >= m) {
    let val = mover.val;
    if (m % 2 == 0) {
      let node = new ListNode(val);
      temp.next = node;

      prev.next = mover.next;
      temp = temp.next;
    }
    prev = mover;
    mover = mover.next;
    m++;
  }

  return head;
};

function segregate(head) {
  if (head == null || head.next == null) return head;

  let odd = head;
  let even = head.next;
  let evenHead = head.next;

  while (even && odd.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
}

time(O(n));
spaace(O(1));
