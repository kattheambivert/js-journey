// if no return, results will show undefined.
let sum = 0;

function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum = sum + 5;
}

let resultAddThree = addThree();
let resultAddFive = addFive();
console.log(resultAddThree, resultAddFive);

// try with return
let sum1 = 0;

function addThree1() {
    sum1 = sum1 + 3; // shows 3
    return sum1;
}

function addFive1() {
    sum1 = sum1 + 5; //shows 8
    return sum1;
}
addThree1();
addFive1();

let resultAddThree1 = addThree1(); //shows 11
let resultAddFive1 = addFive1(); //show 16
console.log(resultAddThree1, resultAddFive1);

// 26 Aug
let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);

//queue: an abstract Data structure where items are kept in order. new items - added at the back, old items - removed from the front.
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(6);
    const testRemoved = arr.shift();
    return testRemoved;
    // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr)); 