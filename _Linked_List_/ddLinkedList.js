class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

// convert an array to dd linked list

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function convertArr2DLL(arr) {
  let head = new Node(arr[0]);
  let prev = head;

  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i], null, prev);
    prev.next = temp;
    prev = temp;
  }
  return head;
}

let print = function (head) {
  while (head) {
    console.log(head.data);
    head = head.next;
  }
};

let head = convertArr2DLL(arr);

function deleteHead(head) {
  if (head == null || head.next == null) {
    return null;
  }

  let prev = head;
  head = head.next;
  head.prev = null;
  prev.next = null;

  return head;
}
// head = deleteHead(head);

function deleteTail(head) {
  if (head == null || head.next == null) return null;
  let tail = head;

  while (tail.next) {
    tail = tail.next;
  }

  let prev = tail.prev;
  prev.next = null;
  tail.prev = null;

  return head;
}
// head = deleteTail(head);

function deleteKth(head, k) {
  if (head == null) return null;
  let count = 0;
  let temp = head;

  while (temp) {
    count++;
    if (count == k) {
      break;
    }
    temp = temp.next;
  }

  let back = temp.prev;
  let front = temp.next;

  if (back == null && front == null) {
    return null;
  } else if (front == null) {
    temp.prev.next = null;
  } else if (back == null) {
    head = head.next;
    head.prev = null;
  } else {
    back.next = front;
    front.prev = back;
    temp.next = null;
    temp.prev = null;
  }

  return head;
}
// head = deleteKth(null, 3);

// delete node

function deleteNode(node) {
  let back = node.prev;
  let front = node.next;

  if (front == null) {
    back.next = null;
    node.prev = null;
  }

  back.next = front;
  front.prev = back;

  node.next = null;
  node.prev = null;
}
// deleteNode(head.next.next);

// insert head

function insertHead(head, val) {
  newNode = new Node(val, head);
  head.prev = newNode;
  return newNode;
}
// head = insertHead(head, 100);

function insertBeforeTail(head, val) {
  if (head.next === null) {
    return new Node(val, head);
  }
  let temp = head;

  while (temp.next) {
    temp = temp.next;
  }
  let back = temp.prev;
  let newNode = new Node(val, temp, back);
  back.next = newNode;
  temp.prev = newNode;
  return head;
}

// head = insertBeforeTail(head, 900);

function insertBeforeKth(head, val, k) {
  if (k == 1) {
    return new Node(val, head);
  }

  let temp = head;
  let cnt = 0;

  while (temp) {
    cnt++;
    if (cnt == k) {
      break;
    }
    temp = temp.next;
  }

  let prev = temp.prev;
  let nodeK = new Node(val, temp, prev);
  prev.next = nodeK;
  temp.prev = nodeK;
  return head;
}
// head = insertBeforeKth(head, 400, 1);

function insertBeforeNode(node, val) {
  let prev = node.prev;
  let newNode = new Node(val, node, prev);
  prev.next = newNode;
  node.prev = newNode;
}
insertBeforeNode(head.next, 1000);
print(head);
