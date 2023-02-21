// let 
// Variables defined with let cannot be Redeclared.

var x = 'hello';
var x;
console.log(x);

var x = 0;
console.log(x);

let y = 'hello';
// error
// let y;
// let y =0;
y = 0;
console.log(y);


// Variables defined with let have Block Scope.
let letNum = 10;
console.log("letNum: " + letNum);
var varNum = 100;
console.log("varNum: " + varNum);
{
    let letNum = 2;
    console.log("letNum:" + letNum);
    var varNum = 20;
    console.log("varNum:" + varNum);
}
console.log("letNum: " + letNum);
console.log("varNum: " + varNum);


// Variables defined with let must be Declared before use.
carName = "Volvo";
var carName;
console.log(carName);

// bla = 10;
// let bla;
// console.log(bla);


