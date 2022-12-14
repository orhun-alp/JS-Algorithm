// export const findIntersection = (arr) => {
//   let intersection = [];
//   const kume1 = arr[0].replace(/\s/g, "").split(",");
//   const kume2 = arr[1].replace(/\s/g, "").split(",");

//   kume2.forEach((item) => {
//     if (kume1.includes(item)) {
//       intersection.push(item);
//     }
//   });

//   if (intersection.length != 0) {
//     return intersection.toString();
//   } else {
//     return false;
//   }
// };

export const findIntersection = (arr) => {
  let intersection = [];

  const set1 = arr[0].replace(/\s/g, "").split(",");
  const set2 = arr[1].replace(/\s/g, "").split(",");

  set2.forEach((item) => {
    if (set1.includes(item)) {
      intersection.push(item);
    }
  });

  if (intersection.length != 0) {
    return intersection.toString();
  } else {
    return false;
  }
};
