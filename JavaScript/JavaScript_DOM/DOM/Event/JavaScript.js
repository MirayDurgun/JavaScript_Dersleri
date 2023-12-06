const buton = document.querySelector('button');
//tıklanma işlemini ekliyoruz
buton.addEventListener('click', () => {
    console.log('tıklandı');
})


//li taglerina ulaşma

const liste = document.querySelectorAll('li');
//foreach ile li taglerine gezinir
liste.forEach(eleman => {
    eleman.addEventListener('click', e => {
        console.log('Li tagine tıklandı');
        console.log(e.target);
        e.target.style.color = 'blue';
        //tıklayınca rengi değişir
    })
})


//li lere tıklanınca listeden kaldıracak ekle butonuna tıklayınca li ekleyecek

const ul = document.querySelector('ul');
liste.forEach(eleman => {
    eleman.addEventListener('click', e => {
        e.target.remove();
        //tıklayınca liyi siler 
    })
})

buton.addEventListener('click', () => {
    const li = document.createElement('li');
    //li tagi oluşturur
    li.textContent = 'JavaScript';
    ul.append(li); //listenin sonuna ekler
    //  ul.prepend(li); //başına ekler
})