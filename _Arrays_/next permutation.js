var nextPermutation = function (nums) {
  var breakPoint = -1;

  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      breakPoint = i - 1;
      break;
    }
  }

  if (breakPoint == -1) {
    return nums.reverse();
  }

  for (let i = nums.length - 1; i > breakPoint; i--) {
    if (nums[i] > nums[breakPoint]) {
      [nums[i], nums[breakPoint]] = [nums[breakPoint], nums[i]];
      break;
    }
  }

  let i = breakPoint + 1;
  let j = nums.length - 1;
  while (i < j) {
    [nums[j], nums[i]] = [nums[i], nums[j]];
    i++;
    j--;
  }
};

/**
 * 
 * intuition:

what we do is , 

1. we should find the breka point  which is the difference while our elements are increasing from backside, that means till that break point we cannot reaarange the elements to get that greater, cuz ti is already sorted ascending ,which means we cannot find the greater permutation that that, 
2. if we cannot find and such like breakpoint, it means it is in the last permutation , so we can back to the first original state whcih si the reversed shape of given perm , 
3. if we find that breakpoint index, we will take the element laying on there then we will swap it will the smallest element in the back but greater that the breakpoint elmenet which means we have next half way perm , then the elments after the break point should be in ascending order to be the least elmenet , that means swe should reverse it , why reverse becuase it si already in descending order even if we swap elements it still stays sorted descendingly, after these steps we will have next permutation


input : [2, 1, 5, 4, 3, 0, 0 ]

in the first step we should find the break point which is index 1 cuz the rest elements are in the decreasing order which means in the largest permutation, like 5, 4, 3, 0, 0  there is no way we can rearrange them to find greater permuation, 

second step, we should swap the elements in the breakpoint which is 1 with the element greater that it but smallest which is 3, why not 4 and 5 if we put 4 and 5 it will be also  a one of the permutation but not the next, to be next it should be the smallest,  : [2, 3, 4, 5, 1, 0, 0]

in the third step, we should rearrange the rest of the elements,  which should be the smallest again  cuz we changed it's one step ahead parent ot the next permutation, so to be the next perm we should make the rest the least, we have two ways either sort in ascending or just to reverse, cuz our rest elements are in already descending order, : [4, 5 , 1, 0, 0]  after this step we will have [2, 3, 0, 0, 1, 4, 5] and this is the result


 */

/**
 * 
 * 
 * Complexity
Time complexity:
O(3N) => O(n)

Space complexity:
O(1)


 * 
 */
