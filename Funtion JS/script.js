// var a = 8;
// var b = 3;
// var volumeA = a * a * a;
// var volumeB = b * b * b;
// var total = volumeA+volumeB;

// console.log(total)

function PenjumlahanDuaKubus(a, b){
    var total, volumeA, volumeB ;

    volumeA = a*a*a;
    volumeB = b*b*b;
    total = volumeA + volumeB;

    return total;

}

alert(PenjumlahanDuaKubus(8, 3));
alert(PenjumlahanDuaKubus(10, 10));


