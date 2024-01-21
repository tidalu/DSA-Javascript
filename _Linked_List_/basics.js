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

function removeElement(head, el) {
  if (head == null) return null;

  let prev = null;
  let temp = head;

  while (temp) {
    if (temp.data == el) {
      prev.next = prev.next.next;
    }

    prev = temp;
    temp = temp.next;
  }

  return head;
}

result = removeElement(result, 7);

function insertAsHead(head, el) {
  let temp = new Node(el, head);
  return temp;
}
result = insertAsHead(result, 100);

function insertTail(head, val) {
  if (head == null) return new Node(val);
  let temp = head;

  while (temp.next) {
    temp = temp.next;
  }

  let anotherNode = new Node(val);

  temp.next = anotherNode;

  return head;
}
result = insertTail(result, 200);

// insert tp

function insertAtK(head, k, val) {
  if (head == null) {
    if (k == 1) return new Node(val);
    return;
  }

  if (k == 1) {
    return new Node(val, head);
  }

  let count = 0;
  let temp = head;

  while (temp) {
    count++;

    if (count == k - 1) {
      let neeNode = new Node(val, temp.next);
      temp.next = neeNode;
      break;
    }

    temp = temp.next;
  }

  return head;
}

result = insertAtK(result, 3, 3000);

function insertBeforeEl(head, el, val) {
  if (head == null) {
    return null;
  }

  if (head.data == el) {
    return new Node(val, head);
  }

  let temp = head;

  while (temp.next) {
    if (temp.next.data == el) {
      let neeNode = new Node(val, temp.next);
      temp.next = neeNode;
      break;
    }

    temp = temp.next;
  }

  return head;
}

result = insertBeforeEl(result, 3000, 5000);
printLL(result);
