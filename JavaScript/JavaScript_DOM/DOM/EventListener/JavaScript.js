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
        e.stopPropagation(); //yayılmayı durdurur
        //sadece li çalışır ve diğerleri etkilenmez
        console.log(e.target);
    })
})


//li lere tıklanınca listeden kaldıracak ekle butonuna tıklayınca li ekleyecek

const ul = document.querySelector('ul');
ul.addEventListener('click', e => {
    console.log(e.target);
    if (e.target.tagName == 'LI') {
        e.target.remove();
    }
})

buton.addEventListener('click', () => {
    const li = document.createElement('li');
    //li tagi oluşturur
    li.textContent = 'JavaScript';
    ul.append(li); //listenin sonuna ekler
    //  ul.prepend(li); //başına ekler
})