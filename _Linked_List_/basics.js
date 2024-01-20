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

// console.log(check(resultNode, 3));

function deleteHead(head) {
  if (head == null) return head;

  head = head.next;

  return head; // we should not care about the first head in teh memory, cuz in js there is garbage collector taht will automatically delete it by itself, in the future
}

function printLL(head) {
  let temp = head;
  while (temp) {
    console.log(temp.data);
    temp = temp.next;
  }
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = convertLA(arr1);
result = deleteHead(result);

// delete the tail

function removeTail(head) {
  if (head == null || head.next == null) return null;
  let temp = head;
  while (temp.next.next) {
    temp = temp.next;
  }

  temp.next = null;
  return head;
}

result = removeTail(result);

// remove kth element in ll

function removeK(head, k) {
  if (head == null) return head;

  if (k == 1) {
    head = head.next;
    return head;
  }

  let perv = null;
  let count = 0;
  let temp = head;
  while (temp) {
    count++;
    if (count == k) {
      perv.next = perv.next.next;

      return head;
    }

    perv = temp;
    temp = temp.next;
  }

  return head;
}

result = removeK(result, 3);
printLL(result);
