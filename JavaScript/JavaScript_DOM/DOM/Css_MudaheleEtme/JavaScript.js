const baslik = document.querySelector('h1');
baslik.setAttribute('style', 'color:pink;');
//css olarak htmlde farklı style olsaydı bu js kodu css i ezerdi


//bu sebeple bu şekilde kullanılmalı;
const olmali = document.querySelector('h2');
olmali.style.color = 'pink';