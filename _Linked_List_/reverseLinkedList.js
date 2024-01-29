var reverseList = function (head) {
  if (head == null || head.next == null) return head;
  let temp = null;
  let curr = head;
  let next = null;
  while (curr) {
    next = curr.next;
    curr.next = temp;
    temp = curr;
    curr = next;
  }
  return temp;
};
