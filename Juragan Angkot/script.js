var penumpang = ['faizal','ichal','zall','rias'];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    if (penumpang.length == 0){
        penumpang.push(namaPenumpang);
        return penumpang;
    }else {
        for (var i=0 ; i < penumpang.length ; i++){
            if (penumpang[i] == undefined){
                penumpang[i] = namaPenumpang;
                return penumpang;
            }else if( penumpang[i]== namaPenumpang){
                console.log(namaPenumpang + 'Sudah ada dalam Angkot');
                return namaPenumpang;
            }
            else if( i == penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang) {
    if(penumpang.length == 0) {
        console.log('Angkot Masih Kosong!');
        return penumpang;
    }else {
        for (var i=0 ; i < penumpang.length; i++){
            if (penumpang[i] == namaPenumpang){
                penumpang[i] = undefined;
                return penumpang;
            }else if(i == penumpang.length - 1) {
                console.log('Nama Penumpang tersbut tidak ada');
                return penumpang;
            }
        }
    }
}
