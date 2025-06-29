"use strict";
// // let num : number = 1;
// // console.log(`It is a number ${num}`)
// function Greet(mas:String){
//   console.log("Hello "+mas);
// }
// function Sum(num:number , num2:number){
//     return num+num2;
// }
// Greet("Shubhendu")
// console.log(Sum(1,2));
function sumOfAge(User1, User2) {
    return User1.age + User2.age;
}
let result = console.log(sumOfAge({ name: "shubhendu", age: 21 }, { name: "ankita", age: 20 }));
function pinCodeSum(user, user2) {
    return user.adress.pinCode + user2.adress.pinCode;
}
let person1 = {
    name: "Shubhendu",
    age: 21,
    adress: {
        city: "Ghatshila",
        pin: 832303,
        //Here you can add the colony or not as it is optional
    },
    greet() {
        return "Hi";
    },
};
console.log(person1.greet());
class Manager {
    greet() {
        return "Hi";
    }
    ;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // You need to assign adress as well, e.g. this.adress = { city: "", pin: 0 };
        this.adress = { city: "", pin: 0 };
    }
}
function GreetUserOrAdmin(user) {
    return "Welcome" + user.name;
}
let userDemo = {
    name: "Shubhendu",
    age: 23
};
let AdminDemo = {
    name: "Admin Shubhendu",
    age: 24,
    IP: 23.89
};
console.log(GreetUserOrAdmin(userDemo));
let ar = [
    { index: 0, valu: 1 },
    { index: 1, valu: 2 }
];
let arrayInteger = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arrayInteger.length; i++) {
    console.log("array index is : " + i + " Value is : " + arrayInteger[i]);
}
for (let num of arrayInteger) {
    console.log("num value are : " + num);
}
