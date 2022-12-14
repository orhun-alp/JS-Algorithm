// export const firstReverse = (str) => {
//   // split()
//   // reverse()
//   // join

//   const arr = str.split("");
//   const reversedArr = arr.reverse();
//   const newStr = reversedArr.join("");

//   return newStr;
// };

// First Reverse str

export const firstReverse = (str) => {
  return str.split("").reverse().join("");
};


// const numbers = [3, 2, 4, 1, 5];
// // [...numbers] creates a shallow copy, so reverse() does not mutate the original
// const reverted = [...numbers].reverse();
// reverted[0] = 5;
// console.log(numbers[0]); // 3