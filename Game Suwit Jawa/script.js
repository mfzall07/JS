var tanya = true;
while(tanya) {
    //
    //menangkap pilihan player
    var p = prompt('Pilih : *Gajah, *Semut, *Orang : ');

    //menangkap pilihan komputer
    //membangkitkan bilangan random
    var comp = Math.random();

    if (comp < 0.34){
        comp = 'gajah';
    }else if (comp >= 0.34 && comp < 0.67){
        comp = 'orang';
    }else{
        comp='semut';
    }

    var hasil = '';
    //menentukan rules

    if ( p == comp){
        hasil = 'SERI';
    }else if( p == 'gajah'){
        // if(comp == 'orang'){
        //     hasil = 'Player Menang!!!';
        // }else{
        //     hasil = 'Computer Menang !!!';
        // }
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';

    }else if( p == 'orang'){
        hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    }else if( p == 'semut'){
        hasil = (comp == 'orang') ? 'KALAH!' : 'MENANG!';
    }else{
        hasil = 'Memasukkan Pilihan Yang salah';
    }

    //tampilkan hasilnya
    alert('Kamu Memilih : ' + p + '\nDan Komputer Memilih : ' + comp + ' \nMaka hasilnya Adalah : Kamu ' + hasil);

    tanya = confirm('Apakah ingin main lagi ?');

}
    alert('Terima Kasih Telah bermain');