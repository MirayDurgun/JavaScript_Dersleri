let isimler = ['Miray', 'Umut', 'Can', 'Aslı'];

//console.log(isimler[1]);

//let'i modify edebiliriz fakar consu edemeyiz

isimler[1] = 'rabia';


let yaslar = [11, 15, 50, 18];
//console.log(yaslar[2]);

let tireli = isimler.join('-');
console.log(tireli);


let bul = isimler.indexOf('Miray');
console.log(bul);

let ekle = isimler.concat(['Ekrem', 'Büşra', 'Özlem']);
console.log(ekle);

let elemanEkle = isimler.push('leyla');
console.log(elemanEkle);