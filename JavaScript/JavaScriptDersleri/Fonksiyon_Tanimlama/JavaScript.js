function miray() {
    console.log('Miray');
}
miray();


/*******************************************************/

//değişken ismini fonksiyona atadık
const mirayDurgun = function () {
    console.log('deneme');
}
mirayDurgun();


//Fonksiyona parametre verme
const mirayDurgun2 = function (js, css, ang) {
    console.log(js, css, ang);
}
mirayDurgun2('JS', 'Css', 'Angular');


//Return
const kareAlani = function (kenar) {
    let alan = kenar ** 2  //**2 karesini alır
    return alan;
}
const sonuc = kareAlani(6);
console.log(sonuc);

