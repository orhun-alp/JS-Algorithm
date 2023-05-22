export const powerSet = (arr = []) => {
  const nOSS = 2 ** arr.length;
  let result = [];

  for (let i = 0; i < nOSS; i++) {
    let tempBinary = Number(i).toString(2);
    let currentBinary = "0".repeat(arr.length - tempBinary.length) + tempBinary;

    let tempValue = "";

    for (let j = 0; j < arr.length; j++) {
      if (currentBinary[j] === "1") tempValue += [j];
    }
    result.push(tempValue);
  }

  return result;
};
