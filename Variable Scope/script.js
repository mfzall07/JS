// global scope / window scope

var a = 1;

function tes() {
    //name conflict
    var a = 2;

}

tes();
console.log(a);
