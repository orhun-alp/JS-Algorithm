export const offLineMin = (strArr) => {
  const [index, freqE] = E_Info(strArr);
  const numberArray = strArr.splice(0, index + 1).filter((char) => char != "E");

  return numberArray.sort((a, b) => a - b).splice(0, freqE);
};

function E_Info(strArr) {
  let index = "";
  let freq_E = 0;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "E") (index = i), (freq_E += 1);
  }
  return [index, freq_E];
}

// const arr = strArr.slice(0, strArr.lastIndexOf("E") + 1);
//   const newArr = [];
//   const newArr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (/[^0-9]/.test(arr[i])) {
//       newArr.push(arr[i]);
//     } else {
//       newArr2.push(arr[i]);
//     }
//   }

//   newArr2.sort((a, b) => a - b);
//   const result = newArr2.slice(0, newArr.length);
//   return result;