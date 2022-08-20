
let myVar = 1;
myVar = myVar + 5;
myVar += 5;
console.log(myVar);

// var myName = "Kat";
// var myName = "Truong";
// console.log(myName);
const firstName = ["Trang", "Truong", "Others"];
firstName[0] = "ABC";
// let removedFromMyArray = firstName.pop();
// let firstName = "Kat";
console.log(firstName);

// Let vs Var: Scope of a var is the entire enclosing function, while let have their scope in the block for which they declared

function varCompare() {
    var theX = 1;
    {
        var theX = 2;
        console.log(theX); //should show 2
    }
    console.log(theX); //should show 2
}

function letCompare() {
    let theX = 1;
    {
        let theX = 2;
        console.log(theX); //should show 2
    }
    console.log(theX); //should show 1
}

const sym1 = Symbol();
const sym2 = Symbol('foo');
const sym3 = Symbol('foo');
console.log(sym1);
console.log(sym2);

const maxSafe = BigInt(Number.MAX_SAFE_INTEGER);
const minusMaxSafe = maxSafe - 12n;
console.log(maxSafe);
console.log(minusMaxSafe);

// remainder or modulus
let x1 = 7;
let x2 = 2;
let y1 = x1 % x2;
console.log(y1);

// incrementing
y1++;
let y2 = y1;
console.log(y2);
y2--;
let y3 = y2;
console.log(y3);

//exponentiation
let x3 = 12;
let xExpo = x3 ** 2;
let xExpoMath = Math.pow(x3, 2);
console.log(xExpo);
console.log(xExpoMath);
let testShift = xExpo >> 2;
console.log(testShift);

// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);

console.log(myArray);
const removedFromMyArray = myArray.pop();
console.log(removedFromMyArray);

let myArray2 = [["J", 1], ["K", 2]];
myArray2.push("L", 3);
myArray2.pop();
console.log(myArray2);

let randomR = [1, "random things"];