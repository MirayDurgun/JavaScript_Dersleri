const dogruCevap = ['E', 'E', 'E', 'E'];

const form = document.querySelector('.question-form');

form.addEventListener('submit', e => {
    e.preventDefault(); // Sayfanın yeniden yüklenmesini engellemek için kullanılır.

    let score = 0;
    const userAnsers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnsers.forEach((answer, index) => {
        if (answer === dogruCevap[index]) {
            score += 25;

        }
    })
    console.log(score);
})