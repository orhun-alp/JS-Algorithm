/*
First factorial find

*/
export const firstFactorial = (num) => {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};
