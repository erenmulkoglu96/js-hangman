


let kelimeListesi = ["javascript", "programlama", "oyuntr"];

let kelime = kelimeListesi[Math.floor(Math.random() * kelimeListesi.length)];

let kelimeHarfleri = kelime.split("");

let tahminEdilenHarfler = [];

let hak = 6;

let hataMesaji = document.getElementById("hataMesaji");

let bilgi = document.getElementById("bilgi");

let harfler = document.getElementById("harfler");

let tahmin = document.getElementById("tahmin");

let img = document.getElementsByTagName("img")[0];

// Tahmini kontrol etmek için bir fonksiyon oluşturalım
function tahminEt() {
let tahminEdilenHarf = tahmin.value.toLowerCase();
// Geçersiz girişler kontrol edilir
if (tahminEdilenHarf.length !== 1 || !tahminEdilenHarf.match(/[a-z]/i)) {
hataMesaji.innerHTML = "Tek bir harf tahmin ediniz!";
return;
}
// Harf zaten tahmin edilmişse, hata mesajı gösterilir
if (tahminEdilenHarfler.includes(tahminEdilenHarf)) {

    
}
// Tahmin edilen harfi doğru ise
if (kelimeHarfleri.includes(tahminEdilenHarf)) {
tahminEdilenHarfler.push(tahminEdilenHarf);
harfler.innerHTML = tahminEdilenHarfler.join(" ");
// Tüm harfler doğru tahmin edilirse
if (tahminEdilenHarfler.length === kelimeHarfleri.length) {
bilgi.innerHTML = "Tebrikler! Kazandınız.";
tahmin.disabled = true;
}
}
// Tahmin edilen harf yanlış ise
else {
hak--;
hataMesaji.innerHTML = "Yanlış tahmin. " + hak + " hakınız kaldı!";
img.src = "adam-asmaca-" + (6 - hak) + ".png";
if (hak === 0) {
bilgi.innerHTML = "Kaybettiniz! Doğru kelime '" + kelime + "' idi.";
tahmin.disabled = true;
}
}
tahmin.value = "";
}
