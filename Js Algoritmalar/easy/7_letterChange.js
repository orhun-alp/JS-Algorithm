// export const letterChange = (str) => {

//     let newStr = str.toLowerCase().replace(/[a-z]/gi, (char)=> {
//         if(char === "z"){
//             return "a"
//         }else {
//             return String.fromCharCode(char.charCodeAt() + 1)
//         }
//     })

//     let vowelCapitalized = newStr.replace(/a|e|i|o|u/gi, char => char.toUpperCase())

//     return vowelCapitalized
// }

export const letterChange = (str) => {
  const newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
    if (char === "z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  let vowelCapitalized = newStr.replace(/a|e|o|u|i/gi, char => char.toUpperCase())

  return vowelCapitalized
};
