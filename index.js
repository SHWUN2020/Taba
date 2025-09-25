const Here = (name) => {
    console.log(`hello, ${name}`)
}

Here(" Shahin")
/*
console.log(2 ** 3);

var name1 = prompt("What's your first name?"), family1 = prompt("\nWhat's your last name?");


console.log(name1 + " " + family1);

function testPro(a, b) {
    return a * b;
}

const car = {
    type: "IKCO",
    model: "Soren",
    color: {
        color1: "White",
        Color2: "Red",
        color3: "Blue",
        Color4: "Green"
    },
    num: "2025"
};

const Change_1 = car;
console.log(Change_1.model);

delete car.model;


console.log(car.model);
console.log(car.color.Color4);
*/
const Person = {
    firstName: "Shahin",
    lastName: "Faraji",
    natioId: 2220,
    fullName: function () {
        return (this.firstName + " " + this.lastName).toUpperCase();
    }
};

console.log(Person.fullName());

Person.firstName = "Shwun";


for (let x in Person) {
    console.log(Person[x] + " ");
}

const myArray = Object.values(Person);
console.log(myArray);

const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

let text = "";

for (let [fruit, value] of Object.entries(fruits)) {
    text += fruit + ": " + value + "\n";
}

console.log(text);

function Person_1(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyecolor = eye;
    console.log(this.firstName + " " + this.lastName + " " + this.age + " " + this.eyecolor);
}
Person_1("Shahin", "Faraji", 22, "Blue");

let text_1 = "Shahinfa";
let lng = text_1.length;

console.log(lng);

if (lng < 8) {
    console.log("Error low charector");
} else {
    console.log("Succesful!");
}

let x = "shahin";
let y = `shahin`;

console.log(x == y);
console.log(x === y);

let z = new Array("A", "B", "C");

console.log(z.toString());
