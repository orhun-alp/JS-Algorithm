export const multiplicativePersistance = (num) => {
  let result = multiply(num);
  let multiplicativePersistance = 1;
  if (result < 10) return 0;

  while (result > 9) {
    multiplicativePersistance++;
    result = multiply(result);
  }
  return multiplicativePersistance;
};

const multiply = (num) => {
  const numArr = num.toString().split("");
  let multiply = 1;
  for (let i = 0; i < numArr.length; i++) {
    multiply *= numArr[i];
  }

  return multiply;
};

// let result = multiply(num);

//   let multiplicativePersistance = 1;
//   if (result < 10) return 0;

//   while (result > 9) {
//     multiplicativePersistance++;
//     result = multiply(result);
//   }

//   return multiplicativePersistance;
// };

// const multiply = (num) => {
//   const numArr = num.toString().split("");
//   let multiply = 1;

//   for (let i = 0; i < numArr.length; i++) {
//     multiply *= numArr[i];
//   }

//   return multiply;

/*
Multiplicative Persistence : bir sayıyı oluşturan rakamların çarpımlarının 
tek basamaklı bir sayıya eşit oluncaya kadar yapılması gereken çarpma
işlemi adedir.
*/
