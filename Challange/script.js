// var a=3;
// var kesempatan =1;
// var s='true';

//         alert('Selamat Bermain Tebak Angka!');
//         alert('Tebak angka 1 sampai 100')
// while(s){
//         alert('Kamu Mempunyai 3 Kesempatan Untuk Menebak');

//         //computer 
//              var c=Math.floor(Math.random()*100)+1;
//          // pembuktian
//             for (var a= 3; a>= kesempatan; a--) {
//                 var s=prompt('Masukkan Angka 1 sampai 100 \n Kesempatan Kamu Tinggal '+a);
//                 console.log(c);

//             if (c==s){
//                 alert('Kamu Benar');
//                 break;
//             }
//             else if(c<s) {
//                 alert ('Tebakan Kamu Terlalu Besar');
//             }else if (c>s) {
//                 alert('Tebakan Kamu Terlalu Kecil'); 
//             }else{
//                 alert('Yang Kamu Masukkan Bukan Angka!')
//             }
//             }
//             if(c==s){
//             alert('Selamat \n Kamu Memenangkan Permainan');				
//         }else {alert ('Kesempatan Kamu Habis!\n Angka Yang Diminta Adalah '+c)}
// s=confirm('Apakah Mau Main Lagi ?');
// }

// alert('Terimakasih Telah Bermain!');

 i=2;
    alert('Masukkan Angka Tebakan 1 - 10 \nKamu Punya 3 Kesempatan');

    var jawaban = Math.floor(Math.random() * 10)+1;
    while(i>=0){
    
   
        var p = prompt('Masukkan Angka Tebakan' + jawaban);
        if ( p < jawaban  ){
            alert('Terlalu Rendah \nAyo Masih Ada ' + i + ' Kesempatan.');
        }else if( p > jawaban){
            alert('Terlalu Tinggi \nAyo Masih Ada ' + i + ' Kesempatan.');
        }else {
            alert('inputan Salah');
        }
        if( p == jawaban ){
            alert('Anda Benar!\nAngka Yang Dicari Adalah ' +jawaban);
            i=0;
        }else{
            alert('Anda Gagal Jawaban Yang Dicari Adalah ' + jawaban);
        }
        i--;
    }
