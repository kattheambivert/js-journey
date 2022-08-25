var x = 3;
function letCompare() {
    {
        let x = 2;
    }
    let x = 4;
    var y = 5;
    return y;
}
let y = letCompare();
console.log(x);
console.log(y);
// letCompare();
// if not using let, var, const, a variable is automatically global

const outerWear = "T-Shirt";
function myOutfit() {
    var outerWear = "dress"; //local variable takes precedence over the global variable
    return outerWear;
}
let testingLocalPrecedence = myOutfit();
console.log(testingLocalPrecedence);