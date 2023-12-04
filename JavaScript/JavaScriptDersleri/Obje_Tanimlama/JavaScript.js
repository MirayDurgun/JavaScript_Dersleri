let ogrenci = {
    ad: 'Miray',
    yas: 21,
    egitim: 'Lisans'
};
console.log(ogrenci);

//objeye method ekleme
let ogrenci2 = {
    ad: 'Miray',
    yas: 21,
    egitim: 'Lisans',
    login: function () {
        console.log('Öğrenci giriş yaptı');
    },
    logout: function () {
        console.log('Öğrenci çıkış yaptı');
    },
};
ogrenci2.login();
console.log(ogrenci2);
ogrenci2.logout();

//math objesi
console.log(Math.PI);
console.log(Math);

let sayi = 5.7;
console.log(Math.round(sayi)); //round sayıyı .dan sonra hangi sayıya yakınsa ona yuvarlar

//floor 1 alta yuvarlar
//ceil 1 üste yuvarlar
//trunc decimal kısmınını uçurur
//random, random sayı üretir