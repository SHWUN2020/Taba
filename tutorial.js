
// -------------
// basic javascript
// Start 26 Sep 2025

console.log("Hello world");

var firstName = "Shahin", lastName = "Faraji", age = 22, Lisence = true;

if (Lisence == true && age >= 18) {
    console.log(`Hey ${firstName} ${lastName} your account license is activated!`);
} else {
    console.log(` your age is low 18>${age}`);
}

var num1 = 2, num2 = "2";

console.log(`2 + 2 = ${num1 + num1}`);
console.log(`2 + "2" = ${num1 + num2}`);
console.log(`"2" + "2" = ${num2 + num2}`);
console.log(`"2" - "2" = ${num2 - num2}`);

var box = null;
console.log(box);

function Profile(name, age, education, bio, jender) {
    if (!(name == undefined) && !(age == undefined)) {
        this.name = name;
        this.age = age;
        this.education = education;
        this.bio = bio;
        this.jender = jender;
        let fullInfo = `My name is ${this.name} i'm ${this.age} years old\n and last license education is ${this.education}\n i can ${this.bio} and jendedr is ${this.jender}`;
        console.log("System using info option is running...");
        console.log(fullInfo);
    }else{
        console.log("You have dosen't not permissions! Check your data and fix.");
    }
    return;
}

console.log(Profile("Shahin Faraji"));
console.log("%cThe biggest lesson programming taught me was that if you " + "%cdon't fix the bugs, your program will never work!\n" + "%cI'm not talking about the program.","color:green;","color:red;","color:blue;background:white;");
// -------------