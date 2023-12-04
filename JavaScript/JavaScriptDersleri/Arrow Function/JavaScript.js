const kareAlani = (kenar) => {
    let alan = kenar ** 2  //**2 karesini alır
    return alan;
}
const sonuc = kareAlani(6);
console.log(sonuc);

/*******************************/
const fatura = (urunler, vergi) => {
    let toplam = 0;
    for (let i = 0; i < urunler.length; i++) {
        toplam += urunler[i] + urunler[i] * vergi;
    }
    return toplam;
}
//ürünler dizi olduğu için köşeli parantez kullandık
console.log(fatura([10, 20, 30], 0.25));

