export const waveSorting = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b);

  let newArr = [];

  for (let i = 1; i < sortedArr.length; i = +2) {
    newArr.push(sortedArr[i]);
    newArr.push(sortedArr[i - 1]);
  }

  return newArr;
};
