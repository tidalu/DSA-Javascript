class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function convert(arr) {
  let head = new Node(arr[0]);
  let temp = head;

  for (let i = 1; i < arr.length; i++) {
    let node = new Node(arr[i]);
    temp.next = node;
    temp = temp.next;
  }

  return head;
}

let arr = [1, 0, 2, 1, 0, 2, 1];
let head = convert(arr);

function print(head) {
  while (head) {
    console.log(head.data);
    head = head.next;
  }
}
// console.log(head);

function sort(head) {
  let arr = [];
  let temp = head;

  while (temp) {
    arr.push(temp.data);
    temp = temp.next;
  }
  arr.sort();

  temp = head;

  while (temp) {
    temp.data = arr.shift();
    temp = temp.next;
  }

  return head;
}

function sortByLinks(head) {
  if (head == null || head.next == null) return head;
  let zeroHead = new Node(null);
  let zero = zeroHead;
  let oneHead = new Node(null);
  let one = oneHead;
  let twoHead = new Node(null);
  let two = twoHead;

  let temp = head;

  while (temp) {
    if (temp.data == 0) {
      zero.next = temp;
      zero = zero.next;
    } else if (temp.data == 1) {
      one.next = temp;
      one = one.next;
    } else {
      two.next = temp;
      two = two.next;
    }

    temp = temp.next;
  }

  zero.next = oneHead.next ? oneHead.next : twoHead.next;
  one.next = twoHead.next;
  two.next = null;
  let newHead = zeroHead.next;
  return newHead;
}

let result = sortByLinks(head);
print(result);
