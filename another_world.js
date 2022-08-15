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