const buton = document.querySelector('button');
const maninPopup = document.querySelector('.main-popup');
const close = document.querySelector('.popup-close');



//tıkla butonuna tıklayınca popup açılır
buton.addEventListener('click', () => {
    maninPopup.style.display = 'block';
})


//x tıklandığında popup kapansın
close.addEventListener('click', () => {
    maninPopup.style.display = 'none';
})


//herhangi bir yere tıklanınca kapansın
maninPopup.addEventListener('click', e => {
    console.log(e.target);
    if (e.target.className === 'main-popup') {
        maninPopup.style.display = 'none';
    }

})


