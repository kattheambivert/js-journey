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