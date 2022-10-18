//Write a  program which iterates the integers from 1 to 50. For multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
let setFizzBuzz = true;
var iCount = 1;
while (iCount <= 50) {
    var i = iCount++;
    var iMultipleThree = i % 3;
    var iMultipleFive = i % 5;
    if (iMultipleThree == 0 && iMultipleFive == 0) {
        i = "FizzBuzz";
    } else if (iMultipleThree == 0 && iMultipleFive > 0) {
        i = "Fizz";
    } else if (iMultipleFive == 0 && iMultipleThree > 0) {
        i = "Buzz";
    } else {
        console.log(i);
    }

    console.log(i);
}
if (iCount > 50) {
    setFizzBuzz = false;
    console.log("end");
}