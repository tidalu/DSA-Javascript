const leaders = function (arr) {
  let res = [];
  res.push(arr.at(-1));
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > res[0]) {
      res.unshift(arr[i]);
    }
  }
  return res;
};

console.log(leaders([16, 17, 4, 3, 5, 2]));

// this is optimal solution
// time O(n)
// space O(1)
