
function testElse(val) {
    let result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    }

    else {
        result = "5 or Smaller";
    }

    // Only change code above this line
    return result;
}

console.log(testElse(4));

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }

    else if (val < 5) {
        return "Smaller than 5";
    }
    else {
        return "Between 5 and 10";
    }
}
console.log(testElseIf(7));

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

console.log(orderMyLogic(4));
console.log(orderMyLogic(6));
console.log(orderMyLogic(11));

// chaining if else statements
function testSize(num) {
    // Only change code below this line
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else if (num >= 20) {
        return "Huge";
    }
    // Only change code above this line
}
console.log(testSize(7));