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
// time : O(n log n)
// space: O(1)

console.log(solve([3, 1, 2, 5, 3]));

//

// secodn optimized solution with math

var solve = function (arr) {
  let n = arr.length;
  let S2 = 0;
  let S = 0;
  let SN = (n * (n + 1)) / 2;
  let SN2 = (n * (n + 1) * (n * 2 + 1)) / 6;
  for (let i = 0; i < n; i++) {
    S += arr[i];
    S2 += arr[i] ** 2;
  }
  let val = S - SN;
  let val2 = S2 - SN2;
  val2 = val2 / val;
  let x = (val2 + val) / 2;
  let y = val2 - x;
  return [x, y];
};

console.log(solve([3, 1, 2, 5, 3]));
// time : O(n)
// space : O(1)
