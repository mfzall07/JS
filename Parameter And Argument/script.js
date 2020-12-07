// function tambah(a,b){
//     return a+b;
// }

// var hasil = tambah(3,5);
// console.log(hasil);

//---------------------------------------
// function tambah(a,b){
//     return a+b;
// }

// var a = 10;
// var b = 20;
// var hasil = tambah(a,b);
// console.log(hasil);

//---------------------------------------

// function tambah(a,b){
//     return a+b;
// }

// var a = parseInt(prompt('Masukkan Nilai A : '));
// var b = parseInt(prompt('Masukkan Nilai B : '));
// var hasil = tambah(a,b);
// alert(hasil);
// console.log(hasil);

//----------------------------------------

// function tambah(a,b){
//     return a+b;
// }

// var a = parseInt(prompt('Masukkan Nilai A : '));
// var b = parseInt(prompt('Masukkan Nilai B : '));
// var hasil = tambah(a*2,b*2);
// alert(hasil);
// console.log(hasil);

//----------------------------------------

// function tambah(a,b){
//     return a+b;
// }

// function kali(a,b){
//     return a*b;
// }

// var a = parseInt(prompt('Masukkan Nilai A : '));
// var b = parseInt(prompt('Masukkan Nilai B : '));
// var hasil = kali(tambah(2,2), tambah(3,3));
// alert(hasil);

//----------------------------------------

function tambah() {
    var hasil=0;
    for( var i = 0; i < arguments.length; i++){
        hasil += arguments[i];
    }
    return hasil;
}
var coba = tambah(1,2,3);
console.log(coba);
