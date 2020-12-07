// function angka(n){
//     console.log(n);
//     return angka(n-1);
// }
// angka(50);


//--------------------------------------



function angka(n){
    //basecase
    if(n===0){
        return;
    }
    console.log(n);
    return angka(n-1);
}
angka(50);