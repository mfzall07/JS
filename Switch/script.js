/*
switch(ekspresi) {
    case "nilai 1":
        aksi 1
    [break;]
    case "nilai 2":
        aksi 2
    [break;]
    case "nilai n":
        aksi n
    [break;]
    default:
        aksi default
    [break;]
}
*/
//
/*var angka = parseInt(prompt('Masukkan Angka : '));
if (angka == 1){
    alert('Anda Memasukkan Angka 1');
}else if ( angka == 2) {
    alert('Anda Memasukkan Angka 2');
}else if (angka == 3) {
    alert('Anda Memasukkan Angka 3');
}else {
    alert('Bukan Angka')
}*/

/*var angka = prompt('Masukkan Angka : ');
switch(angka) {
    case '1' :
        alert('Anda Memasukkan Angka 1');
        break;
    case '2' :
        alert('Anda Memasukkan Angka 2');
        break;
    case '3' :
        alert('Anda Memasukkan Angka 3');
        break;
    default :
    alert('Bukan Angka!!');
    break;
}*/

var angka = prompt('Masukkan Nama Makanan / Minuman : \n (cth: nasi, daging, susu, humberger, sofdring)');
switch(angka) {
    case 'nasi' :
    case 'daging' :
        alert('SEHAT');
        break;
    case 'susu' :
        alert('SEHAT');
        break;
    case 'humberger' :
        alert('TIDAK SEHAT');
        break;
    case 'softdrinkr' :
        alert('TIDAK SEHAT');
        break;
    default :
    alert('tidak ada dilist!!!');
    break;
}