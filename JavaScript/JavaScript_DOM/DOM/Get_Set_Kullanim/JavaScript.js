const link = document.querySelector('a');
console.log(link.getAttribute('href'));
//hrefteki link console geldi

//set ile yazıyı güncelleyeceğiz
link.setAttribute('href', 'https://www.linkedin.com/in/miraydurgun/');
// linki güncelledik

//texti güncelleyeceğiz
link.textContent = 'Linkedin linkim';

//class ismi değiştirme
const pDegeri = document.querySelector('p');
console.log(pDegeri.getAttribute('class'));
pDegeri.setAttribute('class', 'link');