//alert('Hello World!');

//prompt('Masukkan Nama : ');

//var nama = prompt('Masukkan Nama : ');
//alert(nama);

/*var tes = confirm('yakin');
alert(tes);*/

/*var tes = confirm('yakin');
if (tes === true){
    alert('User Menekan OK!');
}else { 
    alert('User Menekan Cancel');
}*/
//

alert('Selamat Datang');
var lagi = true;
while( lagi === true){
    var nama = prompt('Masukkan Nama');
    alert('Hallo ' + nama);

    lagi = confirm('Coba Lagi ?');
}

alert('Terima Kasih');