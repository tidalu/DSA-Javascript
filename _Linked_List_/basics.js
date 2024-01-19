class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

let node = new Node(2);
// console.log(node);

let arr = [1, 2, 3, 4];

function convertLA(arr) {
  let head = new Node(arr[0]);
  let mover = head;

  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i]);
    mover.next = temp;
    mover = temp;
  }

  return head;
}
// time complexity O(n)
let resultNode = convertLA(arr);
let count = 0; // to find the size

let temp = resultNode;

while (temp) {
  //   console.log(temp.data);
  temp = temp.next;
  count++; // to find the size
}

//
// console.log(count, 'size');

// check is the value is exist in list

function check(head, value) {
  let temp = head;
  let idx = 0;
  while (temp) {
    idx++;
    if (temp.data == value) {
      return { index: idx, status: true };
    }

    temp = temp.next;
  }

  return { idx: -1, status: false };
}

console.log(check(resultNode, 3));
