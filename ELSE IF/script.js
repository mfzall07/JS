/*var angka = prompt('Masukkan Angka : ');
if (angka % 2 === 0) {
    alert(angka + ' Genap');
}else if (angka % 2 === 1) {
    alert(angka + ' Ganjil');
}else {
    alert('Yang anda masukkan bukan angka !!');
}*/

/*var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++){

    if(noAngkot <= angkotBeroperasi ){
        console.log('Angkot No.' + noAngkot + ' beroperasi dengan baik.');
    }else if(noAngkot === 8) {
        console.log('Angkot No.' + noAngkot + ' Sedang Lembur.');
    }else {
        console.log('Angkot No.' + noAngkot + ' tidak beroperasi dengan baik.');
    }
    
}*/
//
var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++){
    
    if(noAngkot <= angkotBeroperasi && noAngkot !== 5   ){
        console.log('Angkot No.' + noAngkot + ' beroperasi dengan baik.');
    }else if(noAngkot === 5 || noAngkot === 8 || noAngkot === 10) {
        console.log('Angkot No.' + noAngkot + ' Sedang Lembur.');
    }else {
        console.log('Angkot No.' + noAngkot + ' tidak beroperasi dengan baik.');
    }
    
}