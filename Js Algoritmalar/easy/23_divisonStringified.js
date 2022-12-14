export const divisionStringified = (n1,n2) => {
return Math.floor(n1/n2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") 
}

/*
Soruda Bizden İstenen;
Bize verilen 2 adet sayının bölünmesi ve bölümün ise formatlanarak return edilmesi isteniyor. 
Formatlama Kriterleri;
1- Ondalık kısmı verme,
2- Eğer bölüm 3 basamaktan oluşuyorsa bölümü string'e çevir ve return et. 
3- Eğer bölüm 3'den fazla basamaktan oluşyorsa,  binler basamağına virgül ekle, string'e çevir ve o şekilde return et. 

*/