const secim = document.querySelector('section');

//children 
/* HTML öğesinin içinde bulunan ve doğrudan alt öğeleri olan öğeleri seçmenizi sağlar. Örneğin, bir <div> öğesinin içinde bulunan <p>, <span>, <ul>, <li> gibi alt öğeleri children özelliği ile erişebilirsiniz.*/
console.log(secim.children);

//arraye çevirme
console.log(Array.from(secim.children));
//from(secim.children) çevirmek istediğimiz kaynağı belirtiriz


Array.from(secim.children).forEach(child => {
    child.classList.add('secim-element');
})
/*burada HTML öğesinin doğrudan çocuk öğelerine erişerek her birine secim-element sınıfını ekliyor.
Array.from() yöntemi, bir dizi olmayan bir nesneyi diziye dönüştürmek için kullanılır.
Array.from(secim.children) ifadesi, secim adlı bir HTML öğesinin doğrudan çocuk öğelerini bir diziye dönüştürür.
forEach döngüsü, her bir çocuk öğe için belirli bir işlem yapmak için kullanılır.
child.classList.add('secim-element'): Bu ifade, child adlı her bir çocuk öğesine secim-element adlı bir CSS sınıfı ekler. Böylelikle, her bir çocuk öğe bu sınıfa sahip olur ve CSS stil dosyasında bu sınıfa özel stil tanımlanabilir.
*/


// parent
/*JavaScript'te parent terimi, genellikle bir HTML öğesinin doğrudan üst (ebeveyn) öğesine erişimi ifade eder. Bu, DOM (Belge Nesne Modeli) yapısında bir öğenin hiyerarşik yapısını temsil ederken kullanılır.

Örneğin, bir HTML öğesinin bir üst öğesine (ebeveynine) erişmek istediğinizde, parentElement özelliği kullanılabilir.*/

const baslik = document.querySelector('h2');
console.log(secim.parentElement);
//tamamını seçti diğeri gibi tek tek değil
console.log(secim.parentElement.parentElement);
//ana elemente bodye gider başka olmadığından