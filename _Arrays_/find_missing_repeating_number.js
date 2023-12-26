var solve = function (arr) {
  let n = arr.length;
  let resp = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < n - 1; i++) {
    if (arr[i + 1] == arr[i]) {
      resp.push(arr[i]);
    } else if (arr[i + 1] - arr[i] !== 1) {
      resp.push(arr[i] + 1);
    }
  }
  if (resp.length == 1) {
    resp.push(arr.at(-1) + 1);
  }
  return resp;
};

console.log(solve([3, 1, 2, 5, 3]));
