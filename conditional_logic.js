// Setup
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

const seeResult = testEqual(10);
console.log(seeResult);