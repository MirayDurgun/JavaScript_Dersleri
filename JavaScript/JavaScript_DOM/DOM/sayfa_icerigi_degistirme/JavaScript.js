
//p tagini güncelleme
const pTag = document.querySelector('p');
console.log(pTag.innerText); //normalde html kodları ile beraber console ekranında veriliyordu, innerText yazınca sadece text değerini getirdi

pTag.innerText = 'Miray Durgun'; //html kodunu manüpüle ettik



//p taglerinin hepsinin yanına text ekleme
const pTag2 = document.querySelectorAll('p');
pTag2.forEach(a => {
    console.log(a.innerText);
    a.innerText += ' yeni alan'; //+= sayesinde olanı korur ve yanına yeni texti ekler
})

