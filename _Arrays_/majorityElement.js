var majorityElement = function (nums) {
  let count = 0;
  let el;

  for (let i = 0; i < nums.length; i++) {
    if (count == 0) {
      count = 1;
      el = nums[i];
    } else if (nums[i] == el) {
      count++;
    } else {
      count--;
    }
  }
  let c = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] == el) c++;
  }

  if (c > nums.length / 2) {
    return el;
  }
};

console.log(majorityElement([3, 3, 4]));
