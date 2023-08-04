// // // Variables (var, let, const)
// // // ES5
// // var person = "ram";
// // person = "shyam";

// // console.log(person);

// // // ES6
// // const person1 = "ram";

// // console.log({ person1 });

// // // Let

// // let person2 = "ram";
// // person2 = "shyam";

// // console.log({ person2 });

// // // logical

// // let hour = promt("give a random number number")
// // if(hour>10 || hour<13){
// //     alert(" js clss is in session")
// // }

// // function guessGame(){
// //     let guess = prompt("guess your number");
// // let num = Math.floor(Math.random() * 10);


// // if(guess===num){
// //     alert("your guess is right")
// // }
// // if(guess>num){
// //     alert("your guess is higher than the actual number")
// // }
// // if(guess<num){
// //     alert("your guess is lesser than the actual number")
// // }



// // }

// // guessGame()

// // function 

// const user =(name) =>{

//     console.log(" hello " + name)
// }

// user("Asim")
// const helo = (a,b) =>{

//     return a+b;
// }

// const result = helo(1,2)
// console.log(result)


// const add = (a,b)=>{
// if (a<0 && b<0){
//     return null;
// }
// return a+b;


// }
// add(-1,2);

// const num = Number(prompt("enter your age"));
// console.log(num);


// const sum = (a,b)=>{

// if(a>0 && b>0){
//     return a+b;
// }
// alert("enter positive integer");

// }


// const result = sum(1,-4);
// console.log(result)


// const person = {

//     firstName : "john",
//     lastName : "doh",
//   fullName : () =>{

//     return person.firstName + " " + person.lastName;
// }


// };

// console.log(person.fullName());

// const car = {
//     name : "BMW",
// model : "2000",
// seat : "4 seat",

// carDetail : () =>{
//     return car.name + " model is " + car.model + " and it has " + car.seat ;
// },

// seatChecker : (setNo) =>{
// if(setNo>4){
//     alert("This car only has 4 seat")
//     }
// }
// };

// console.log(car.seatChecker(5));



const car = {
    name : "BMW",
model : 2000,
seat : "4 seat",

carDetail : () =>{
    return car.name + " model is " + car.model + " and it has " + car.seat ;
},

seatChecker : (setNo) =>{
if(setNo>4){
    alert("This car only has 4 seat")
    }
}
};

console.log(car.seatChecker(5));



