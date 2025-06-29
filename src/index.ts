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

// function isLegal(age:number):boolean{
//     if(age>=18)return true;
//     else return false;
// }
// if(isLegal(12)==true)console.log("He can vote ");
// else console.log("He can't vote")

// function delayedCall(fun : ()=>void /*number*/){
//     setTimeout(fun , 1000);
// }
// delayedCall(function(){
//     console.log("Hello")
//     //return 1
// })
interface User{
    name:String,
    age:number
}

function sumOfAge(User1 : User , User2 : User):number{
    return User1.age + User2.age;
}

 let result = console.log(sumOfAge({name:"shubhendu" , age:21},{name:"ankita" , age :20}));

interface UserDemo{
    name:String,
    mob:number,
    adress:{
        city:String,
        pinCode:number,
    }
}

function pinCodeSum(user : UserDemo , user2 :UserDemo):number{
    return user.adress.pinCode + user2.adress.pinCode;
}

interface Adress{
    city:String,
    pin:number,
    colony?:String
}
interface Person{
    name:String,
    age:number,
    adress:Adress,
    greet():String
}

let person1:Person = {
    name:"Shubhendu",
    age:21,
    adress:{
        city:"Ghatshila",
        pin:832303,
        //Here you can add the colony or not as it is optional
    },
    greet():String {
        return "Hi"
    },
}
console.log(person1.greet());

class Manager implements Person{
    name: String;
    age: number;
    adress: Adress;
    greet(): String {
        return "Hi"
    };
    constructor(name:String , age:number){
        this.name = name;
        this.age = age;
        // You need to assign adress as well, e.g. this.adress = { city: "", pin: 0 };
        this.adress = { city: "", pin: 0 };
    }

}

interface Admin{
    name:String,
    age:number,
    IP:number,
}
interface user{
    name:String,
    age:number
}
function GreetUserOrAdmin(user : user | Admin):String{
    return "Welcome"+user.name;
}

let userDemo:user = {
    name:"Shubhendu",
    age:23
};
let AdminDemo :Admin = {
    name:"Admin Shubhendu",
    age:24,
    IP:23.89
};
console.log(GreetUserOrAdmin(userDemo));

interface arrayInterface{
    index:number,
    valu:number
}

let ar:arrayInterface[] = [
    {index:0, valu:1},
    {index:1, valu:2}
]

let arrayInteger:number[] = [1,2,3,4,5,6];
for(let i:number=0;i<arrayInteger.length;i++){
    console.log("array index is : "+ i + " Value is : "+arrayInteger[i])
}
for(let num of arrayInteger){
    console.log("num value are : "+num)
}
