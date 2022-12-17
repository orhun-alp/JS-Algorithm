export const dashInsert = (str) => {
let newArr = []

for(let i=0; i<str.length; i++){
    if((/[^1-9]/).test(str[i])){
        newArr.push(str[i])
    }else{
        if(
            str[i] % 2 != 0 &&
            str[i+1] % 2 != 0 &&
            str[i+1] != undefined &&
            (/[1-9]/).test(str[i+1])
        ) {
            newArr.push(str[i]+"-")
        }else {
            newArr.push(str[i])
        }
    }
}


return newArr.join("")




    
};

//   let strArr = str.split("");
//   let totalStr = "";
//   strArr.forEach((element, index, arr) => {
//     totalStr += element;
//     if (index + 1 == arr.length) return totalStr;
//     if (parseInt(element) && element % 2 == 1 && arr[index + 1] % 2 == 1) {
//       totalStr += "-";
//     }
//   });
//   return totalStr;

/*
Soruda bizden istenen; 
Verilen String İçerisinde Arda Arda Tek Rakamlar Bulunuyorsa 
Bu Değerlerin Arasına "-" Eklememiz Bizden İsteniyor.
*/
