
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
// End
// -------------
// Start 29 Sep 2025


// var checkType = "Hello World";
// alert(`"${checkType}" this type is ${typeof checkType}`);

// checkType = 22;
// alert(`"${checkType}" this type is ${typeof checkType}`);

// checkType = true;
// alert(`"${checkType}" this type is ${typeof checkType}`);

// checkType = 2.44;
// alert(`"${checkType}" this type is ${typeof checkType}`);

// checkType = null;
// alert(`"${checkType}" this type is ${typeof checkType}`);

// checkType = undefined;
// alert(`"${checkType}" this type is ${typeof checkType}`);

// End

// -------------

// Start 30 Sep 2025

//  function cal_sum(a, b){
//     this.a = a;
//     this.b = b;
//     var c = a + b;
//     console.log(c);
//  }

//  console.log(cal_sum(5, 5));

 // End 

 //------------

 // Start 5 Oct 2025

 const Arr = [
    {id: 0, name: 'Shahin Faraji'},
    {id: 1, name: 'Shahab Bozorgi'},
    {id: 2, name: 'Benyamin Netaniaho'},
    {id: 3, name: 'Yeganeh Molaei'}
 ];

 const newArr = Arr
    .map(current => ({...current, isMan: true}))
    .filter(current => current.name === 'Shahin Faraji')
    .find(current => current.id === 0);

console.log(newArr);


const car = {
    car_Name: 'Pegute',
    car_Module: '206',
    car_Color: 'red',
    car_Year: 2025
};


console.log(car.car_Year);

const academy = () => {
    var name_Elevator = 'D', id_Elevator = 1;
    console.log(name_Elevator + ' ' + id_Elevator);
};



console.log(academy());


const fruits = new Map([
    ['apple', 200],
    ['banana', 300],
    ['orange', 400]
]);

console.log(fruits.get('apple') + ' ' + typeof fruits);
console.log(fruits.size);
// fruits.clear();
// console.log(fruits.size);


let text = "";
fruits.forEach (function(value, key) {
    text += key + '=' + value + '\n';
});
console.log(text);