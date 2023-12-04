//getElementById
const baslik = document.getElementById('deneme');
console.log(baslik);

//getElementsByClassName
//adından da belli olduğu gibi classı çekeceğimiz için çağırırken . kullanmamıza gerek yok
const hatalar = document.getElementsByClassName('error');
console.log(hatalar);
console.log(hatalar[0]); //ilkini de çağırabiliriz

//getElementsByTagName
//html tagini çağırır / çeker

const pEtiketleri = document.getElementsByTagName('p');
console.log(pEtiketleri);