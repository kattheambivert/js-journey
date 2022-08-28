// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

console.log(testStrictNotEqual(10));

// != vs == while !== vs ===

function testGreaterThan(val) {
    if (val) {  // Change this line
        return "Over 100";
    }

    if (val) {  // Change this line
        return "Over 10";
    }

    return "10 or Under";
}

console.log(testGreaterThan(10));

function testGreaterThan(val) {
    if (val > 100) {  // Change this line
        return "Over 100";
    }

    if (val > 10) {  // Change this line
        return "Over 10";
    }
    return "10 or Under";
}

console.log(testGreaterThan(10));

function testLessThan(val) {
    if (val < 25) {  // Change this line
        return "Under 25";
    }

    if (val < 55) {  // Change this line
        return "Under 55";
    }

    return "55 or Over";
}

console.log(testLessThan(10));

// && operator
function testLogicalAnd(val) {
    // Only change code below this line

    if (val >= 25 && val <= 50) {
        return "Yes";
    }

    // Only change code above this line
    return "No";
}

console.log(testLogicalAnd(10));

function testLogicalOr(val) {
    // Only change code below this line

    if (val > 20 || val < 10) {
        return "Outside";
    }

    // Only change code above this line
    return "Inside";
}

console.log(testLogicalOr(15));

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