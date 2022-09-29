

// Setup
const testObj1 = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj1.hat;      // Change this line
const shirtValue = testObj1.shirt;    // Change this line

// Setup
const testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj2["an entree"];   // Change this line
const drinkValue = testObj2["the drink"];    // Change this line

// Setup
const testObj3 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};
// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj3[playerNumber];   // Change this line
console.log(player);

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof";

// Setup
function phoneticLookup(val) {
    let result = "";

    // Only change code below this line
    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val];
    // Only change code above this line
    return result;
}

console.log(phoneticLookup("charlie"));

//Testing objects for properties
const obj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh",
}
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }
}

console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift"));