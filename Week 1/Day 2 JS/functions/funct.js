// // // // // function square(number) {
// // // // //   return number * number;
// // // // // }

// // // // // function myFunc(theObject) {
// // // // //   theObject.make = "Toyota";
// // // // // }

// // // // // const myCar = {
// // // // //   make: "Honda",
// // // // //   model: "Accord",
// // // // //   year: 1998,
// // // // // };

// // // // // console.log(myCar.make); // "Honda"
// // // // // myFunc(myCar);
// // // // // console.log(myCar.make); // "Toyota"

// // // // // function myFunc(theArr) {
// // // // //   theArr[0] = 30;
// // // // // }

// // // // // const arr = [45];

// // // // // console.log(arr[0]); // 45
// // // // // myFunc(arr);
// // // // // console.log(arr[0]); // 30

// // // ///////////////////////   Closure  /////////////////////////

// // // // // function addSquares(a, b) {
// // // // //   function square(x) {
// // // // //     return x * x;
// // // // //   }
// // // // //   return square(a) + square(b);
// // // // // }

// // // // // const square = function (number) {
// // // // //   return number * number;
// // // // // };

// // // // // console.log(square(4)); // 16

// // // // function map(f, a) {
// // // //     const result = new Array(a.length);
// // // //     for (let i = 0; i < a.length; i++){
// // // //         result[i] = f(a[i])
// // // //     }
// // // //     return result
// // // // }

// // // // const numbers = [0,1,2,3,4,5,11]
// // // // const cubedNumbers = map(function(x){
// // // //     return(x*x*x);
// // // // }, numbers)

// // // // console.log(cubedNumbers)

// // // // const greet = ()=> {
// // // //     document.write("Hello There");
// // // // }

// // // // greet()

// // // // const greet = (username) => {
// // // //     document.write(`Hello There , ${username}`);
// // // // }

// // // // greet("Coder")

////////////////  Arrow Function and This Binding ///////////////////

// const user = {
//     userName: "Umair",
//     age: 24,
//     welcome: () => {
//         document.write(`Welcome ${this.userName}`)
//     }
// }

// user.welcome();

// const user = {
//     userName: "Umair",
//     age: 24,
//     welcome: function () {
//         const arrow =  ()=> {
//         document.write(`Welcome ${this.userName}`)
//         }
//         arrow()
//     }
// }

// user.welcome();
// // // const user = {
// // //     userName: "Umair",
// // //     pass: "asdfasf",
// // //     welcome: function() {
// // //         console.log(`${this.userName} , Welcome to the site`)
// // //         console.log(this)
// // //     }
// // // }

// // // user.welcome()
// // // user.userName = "Ali"
// // // user.welcome()

// // // console.log(this)



// // /////////////////////   var and const //////////////////

// // // if (Math.random() > 0.5) {
// // //   var x = 1;
// // // } else {
// // //   var x = 2;
// // // }
// // // console.log(x);


// // if (Math.random() > 0.5) {
// //   const x = 1;
// // } else {
// //   const x = 2;
// // }
// // console.log(x); // ReferenceError: x is not defined

// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();

/////////////   Practical Example of Closures //////////////////

// function makeSizer(size){
//     return () => {
//         document.body.style.fontSize = `${size}px`;
//     }
// }

// const size12 = makeSizer(12)
// const size14 = makeSizer(14)
// const size16 = makeSizer(16)

// document.getElementById("size-12").onclick = size12;

// document.getElementById("size-14").onclick = size14;

// document.getElementById("size-16").onclick = size16;

// const obj = {
//     count: 0,
//     increment: function() {
//         this.count++;
//         console.log(`Incremented by normal Function, ${this.count}`)
//     },
//     incrementArrow: () => {
//         this.count++;
//         console.log(`Increment by Arrow, ${this.count}`)
//     }
// }

// obj.increment();
// obj.incrementArrow();