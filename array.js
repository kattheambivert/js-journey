let myName = "abcdgrfsrg";
let shoppingList = [["apple", 1], ["vinegar", 2]];
let newNames = ["A", "B", "C"];
console.log(newNames.indexOf(newNames));
console.log(newNames.indexOf("A"));

const testPush1 = [1, "Two", 3];
testPush1.push("Four");

const testPush2 = ["work", "life"];
testPush2.push("love", "friendship");
testPush2.push(["resilience", "joy"], [1, 2]);
console.log(testPush1);
console.log(testPush2);

const testPop = [1, 2, 3, 4, 5, 6];
const testPop2 = testPop.pop();
console.log(testPop);
console.log(testPop2);

testPush1.shift();
console.log(testPush1);
const testShift1 = testPush1.shift();
console.log(testShift1);
// const testShift2 = testPush1.unshift(0);
// console.log(testShift2);
testPush2.unshift("choice");
console.log(testPush2);