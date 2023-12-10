/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
    let beginBlock = 0;
  let endBlock = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let trapped = 0;

  while (beginBlock <= endBlock) {
    leftMax = Math.max(leftMax, height[beginBlock]);
    rightMax = Math.max(rightMax, height[endBlock]);

    if (leftMax < rightMax) {
      trapped += Math.max(0, leftMax - height[beginBlock]);
      beginBlock++;
    } else {
      trapped += Math.max(0, rightMax - height[endBlock]);
      endBlock--;
    }
  }

  return trapped;
};

console.log("Test 1: ", trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log("Test 2: ", trap([4, 2, 0, 3, 2, 5])); // 9

