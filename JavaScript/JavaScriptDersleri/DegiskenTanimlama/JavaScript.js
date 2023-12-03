let gun = 03;
let ay = 12;
let yil = 2023;
console.log(gun, ay, yil);

//string
console.log("Selam");
let yazi = "deneme";
let yazi2 = "uçak rötar yaptı, iniş sağlanamadı";

console.log(yazi);

//karakterleri çekme
console.log(yazi[0]);

//kaç karakter
console.log(yazi.length);

//mothodlar
console.log(yazi.toLocaleUpperCase()); //tüm karakterleri büyütür
console.log(yazi.toLocaleLowerCase()); //tüm karakterleri küçültür

//Karakterin kaçıncı index olduğunu bulma
let index = yazi.indexOf('m'); //deneme (0'dan başlar index) 4. indexte yer alır
console.log(index);


//Slice metodu başlangıç ve bitiş karakteri verilir bu iki index arasındaki karakterleri console ekranına yazar

let bastansona = yazi.slice(1, 5); //kaçıncı indexten başladığını yazdık, kaç index daha alacağını yazdık
//enem yazdırır
console.log(bastansona);

//--------------------------------------------------------------------------------------------
let bastansonaSubSTR = yazi2.substr(0, 10); //0. indexten başlasın ve 10 index kadar yol alsın
console.log(bastansonaSubSTR);


//yer değiştirme
let yazi3 = "Miray Durgun";
let yerDegistir = yazi3.replace('M', 'U');
console.log(yerDegistir);
