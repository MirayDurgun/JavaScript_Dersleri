const dogruCevap = ['E', 'E', 'E', 'E'];

const form = document.querySelector('.question-form');

const result = document.querySelector('.result');



form.addEventListener('submit', e => {
    e.preventDefault(); // Sayfanın yeniden yüklenmesini engellemek için kullanılır.

    let score = 0;
    const userAnsers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnsers.forEach((answer, index) => {
        if (answer === dogruCevap[index]) {
            score += 25;

        }
    })
    //console.log(score);

    result.classList.remove('d-none');

    let puan = 0;
    const bastir = setInterval(() => {
        result.querySelector('span').textContent = `${puan}%`;
        if (puan == score) {
            clearInterval(bastir);
        }
        else {
            puan++;
        }

    }, 10);

})






// setTimeout kod bir defa çalışır setInterval ise her seferinde çalışır
//setTimeout(() => {
//    console.log('Miray');
//}, 2000);

//setInterval(() => {
//    console.log('Miray');
//}, 1000);


//let i = 0;
//const bastir = setInterval(() => {
//    console.log('Miray');
//    i++;
//    if (i == 4) { //setintevali durdurur durdurabilmesi için değişken atadık
//        clearInterval(bastir);
//    }
//}, 1000);