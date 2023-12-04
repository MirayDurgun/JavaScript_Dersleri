const hata1 = document.querySelector('p'); //htmldeki ilk p tagini seçer, hepsini seçmez
console.log(hata1);

/**************************************************/

const hata2 = document.querySelector('.error'); //htmldeki .error ilk error clasını manüpüle eder
console.log(hata2);

/**************************************************/

const hata3 = document.querySelector('div.error'); //htmldeki divin içindeki .error olan error clasını manüpüle eder
console.log(hata3);


//P taglerinin hepsini seçme querySelectorAll

const hatalar = document.querySelectorAll('p'); //htmldeki tüm p taglerini seçer
console.log(hatalar);