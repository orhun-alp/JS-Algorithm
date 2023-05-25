export const twoSum2 = (numArr, target) => {
  numArr.sort((a, b) => a - b);

  let left = 0;
  let right = numArr.length - 1;

  while (left < right) {
    let currentSum = numArr[left] + numArr[right];

    if (currentSum > target) {
      right--;
    } else if (currentSum < target) {
      left++;
    } else {
      return [left, right];
    }
  }
};
