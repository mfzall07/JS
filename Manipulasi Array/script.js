// Manipulasi Array

// Menambah Isi Array
// var arr = [];
// arr[0] = "Faizal";
// arr[1] = "Ichal";
// arr[2] = "Zall";
// arr[3] = "Fzall";
// arr[5] = "Mfzall";

// console.log(arr);



// //Menghapus isi Array

// var arr = ["Faizal","Ichal","Zall"];
// arr[1] = undefined;
// console.log(arr);


// Menapilkan Array
// var arr = ["Faizal","Ichal","Zall","Mfzall"];
// for(var i = 0 ; i < arr.length; i++){
//     console.log('Mahasiswa ke - ' + (i+1) + ' : ' + arr[i]);
// }




//method pada array

//1. Join
 var arr = ["Faizal","Ichal","Zall"];
// console.log(arr.join(' - '));

// 2. Push & pop
// var arr = [];
// arr.push('Rias');
// //arr.pop();
// console.log(arr.join());

//3. Unshift & Shift
//arr.unshift('Rias');
arr.shift();
console.log(arr.join(' - '));


//4. slice & splice
// // splice(indexAwal, MaudihapusBerapa,Elemenbaru1, Elemenbaru2, ......)
// var arr = ["Faizal","Ichal","Zall","Mfzall"];
// //arr.splice(2, 0,'Rias');
// var arr2 = arr.slice(1,4);
// console.log(arr2.join(" - "));



//5. Foreach
// var arr = [1,2,3,4,5,6,7,8];
// var nama = ["Faizal","Ichal","Zall"];


    // for(var i = 0 ; i < arr.length ; i++){
    //     console.log(arr[i]);
    // }

// var hasil = function(e) {
//     console.log(e);
// }

// arr.forEach(hasil);

// arr.forEach(function(e) {
//     console.log(e);
// });

// nama.forEach(function(e, i) {
//     console.log('Mahasiswa ke - ' + (i+1) + ' : ' + e);
// });

//6. Mapp
// var arr = [1,2,3,4,5,6,7,8];
// var arr2 = arr.map(function(e){
//     return e*2;
// });
// console.log(arr2.join(' - '));

//7. Sort
// var arr = [1,2,3,4,6,5,8,7];
// console.log(arr.join(' - '));
// arr.sort();
// console.log(arr.join(' - '))

// var arr = [1,10,2,3,20,4,6,5,8,7];
// arr.sort(function(a,b){
//     return a-b;
// });
// console.log(arr.join(' - '));


//8. Filter
// var angka = [1,10,2,3,20,4,6,5,8,7];
// angka2 = angka.filter(function(e){
//     return e >= 5;
// });

//console.log(angka2.join(' - '));

//9. Find
// var angka = [1,10,2,3,20,4,6,5,8,7];
// angka2 = angka.find(function(e){
//     return e > 5;
// });

// console.log(angka2);