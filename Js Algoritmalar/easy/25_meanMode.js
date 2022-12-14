export const meanMode = (arr) => {
  const mean = calcMean(arr);
  const mode = calcMode(arr);

  return mode === mean ? 1 : 0;
};

const calcMean = (arr) => {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  return sum / arr.length;
};

const calcMode = (arr) => {
  let freq = {};

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] in freq) {
      freq[arr[j]] = freq[arr[j]] + 1;
    } else {
      freq[arr[j]] = 1;
    }
  }

  const max = Math.max(...Object.values(freq));

  return iterateOverObj(freq, max);
};

const iterateOverObj = (freq, max) => {
  for (let j in freq) {
    if (freq[j] === max) {
      return parseInt(j);
    }
  }
};

/*

Soruda bizden istenen; 
Verilen array'in içerisindeki değerlerin ortalaması ile mode değerinin
eşit olup olmadığının kontrol edilmesi isteniyor.
*/
