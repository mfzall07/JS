var player=3;
var kesempatan =1;
var s='true';

        alert('Selamat Bermain Tebak Angka!');
        alert('Tebak angka 1 sampai 10')
while(s){
        alert('Kamu Mempunyai 3 Kesempatan Untuk Menebak');

        //Angka Random 
             var c=Math.floor(Math.random()*10)+1;
         //Pembuktian
            for (var player= 3; player >= kesempatan; player--) {
                var s=prompt('Masukkan Angka 1 sampai 10 \nKesempatan Kamu Tinggal '+player);
            if (c==s){
                alert('Kamu Benar');
                break;
            }
            else if(c<s) {
                alert ('Tebakan Kamu Terlalu Besar');
            }else if (c>s) {
                alert('Tebakan Kamu Terlalu Kecil'); 
            }else{
                alert('Yang Kamu Masukkan Bukan Angka!')
            }
            }
            if(c==s){
            alert('Selamat \nKamu Memenangkan Permainan');				
        }else {alert ('Kesempatan Kamu Habis!\nAngka Yang Diminta Adalah '+c)}
s=confirm('Apakah Mau Main Lagi ?');
}

alert('Terimakasih Telah Bermain!');