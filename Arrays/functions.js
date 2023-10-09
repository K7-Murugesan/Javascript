
//Function is used to reuse the code again and 
//again for multiple input.

//Function can de declared for single time and 
//called or invoked for multiple times

//It can parameterised or zero parameter function

// let a=10;

//Normal or named function


// function functionName(){
//        console.log( "1234" ); 

// }
// functionName()

//Anonymous function (or) function expression

// let x = function(b,c)
// {
//     console.log(b-c);
// }
// x(10,6);

// //Arrow Functions

// let x = (b,c) =>
// {
//     console.log(b-c);
// }
// x(10,6);

let abc = (a, b) => console.log(a + b);

abc(1, 2)
// let y = (b,c) =>
// {
//     console.log(b-c);
// }
// y(10,6);

// let a =10;
// const b  = 20;
// var c =30;

// function add() 
// {
//     let a =20;
//     const b  = 40;
//     var c =60;
//     if (true) {
//       console.log( a+c+b );
//     } 
// }
// add();
// console.log( a+b+c  );

// var a = "Angular"
// var b = "SPA"

// console.log(  a+ " is used to make a "+ b  );
// // syntax:   `String ${variable} String `

// console.log( `${a} is used to make a ${b} `  );

// function add(a,b,c) 
// {
//     console.log(a+b+c);
// }
// function add(a=1,b=1) 
// {
//     console.log(a+b);
// }

// add(1,2,3);
// add(4);
// add();

// var a = 10;
// var a = 20;
// var a;
// a="Angular";
// a=true;

// let a = 5;
// let a =  10;

// const a = 10;
// a=20;

// var a = 10;
// let a = "hi";

// console.log( a );
// 

///------Function Overloading-----///

/*In JavaScript, function overloading based on parameter values like you're
trying to achieve isn't directly supported. When you define multiple functions with the same name 
in the same scope, the last defined function will override the previous ones, and only that last function
will be available. */

/*In your example, you've defined the add function three times with different parameter
patterns. However, only the last definition will be taken into account,
so only the following function will be available: */

// function add() {
//     console.log("Hello");
// }

/* As a result, when you call add(1, 2) or add(), the only available function add() 
will be executed, and you'll see "Hello" printed in the console.
If you want to achieve function overloading, where different functions are called based 
on the number or types of arguments, you can use conditional checks within 
a single function. Here's an example:  */

// function add(a, b) {
//     if (arguments.length == 2) {
//         console.log(a + b);
//     } else if (arguments.length == 0) {
//         console.log("Hello");
//     }
// }
// function add(a, b,c=1) {
//     if (arguments.length == 3) {
//         console.log(a + b+c);
//     }
//      else if (arguments.length == 2) {
//         console.log(a+b);
//     }
//      else if (arguments.length == 0) {
//         console.log("Hello");
//     }
//     // console.log(  a+b+ c );
// }
// add(1, 2); // Outputs: 3
// add();     // Outputs: Hello
// add(1,2,3)

/* In this example, the arguments object is used to determine 
the number of arguments passed to the add function. Based on the number of arguments, 
different actions are taken. However, note that using the arguments object 
is considered somewhat outdated, and modern JavaScript often prefers using rest parameters (...) 
or default parameter values for function behavior based on different argument patterns. */

//-------------//


// function a() {

//     var num = 10;

//     function b() {

//         console.log(num);
//     }
//     b();
// }
// a();

// const person = {
//     name: "Murugesan",
//     age: 27,
//     occupation: "Developer"
//   };

//   for (const key in person) {
//     console.log(key, person[key]);
//   }

// const numbers = ["kesavan", 2, "3", "4", "5"];

// for (const num of numbers) {
//   console.log(num);
// }

//DEFAULT PARAMETER

// function  add(a=1,b=1) { 
// return( a+b );
// console.log( a+b );
// 4+1
// }
// console.log( add(4) );
//  add(4) ;

// var course = "Angular";
// var usage = "SPA"

// console.log( course+" is a "+usage ); //Normal concatination
// console.log( `${course} is a ${usage}`  ); //Template Literal

//VAR VS LET VS CONST DIFFERENCE

// var a = 10;
// a = 20; //Re Assign or Re initialize is possible
// var a = 30; //Re declare is possible
// console.log( a );

// let a = 10;
//  a = 20; // Re assign is possible
// let a = 50; //Redeclare not possible
// console.log( a );

//  a = 20; // Re assign is possible
// const a = 50; //Redeclare not possible
// a = 30;
// console.log( a );

// const a = [10,29,30];
// a.push(45,59,60) 
// // redeclare and reassign is not possible
// console.log( a );

//Var is a function scope
// function ab() {
//     if (true) {
//         const a = 20;
//     }
//     console.log( a );
// }
// ab();
// function ab() {

//     for ( let index = 0; index < 4; index++) {

//         console.log( index );
//     }
// }
// ab();
// let arr = [1,2,3,4,5,6,7]

// arr.splice(-5,0,10,20,30)
// console.log( arr );

//let is a block scope
// var a = 5;

// let ab = function() {
//     var b = 5

//     // if (true) { 

//     //     if (true) {
//     //         console.log( a );
//     //     }
//     //     console.log( a );
//     // }
//     // console.log(a );
// }
// ab();
// console.log( a+b ); 

//const is a block scope
// function ab() {
//     const a = 10;
//     if (true) { 

//         console.log( a ); 
//     }
// }
// ab();

// Global variable && local variable 

// const a = 10; //Global variable
// let b = 20;
// var c = 30;
// function ab() {
//     const a = 20; //Local Variable
//     let b = 30;  
//     var c = 40; 
//     if (true) { 

//         console.log( a,b,c ); 
//     }
// }
// ab();
// console.log( a,b,c );

//  Array

// var arr = [10,"js",true,undefined,null,[2,3,4],{}];
//0   1    2      3       4
//10 "js" true undefined null  

//console.log( arr.length-1  );

// for (let i = 0; i < arr.length  ; i++) {
//     console.log( arr[ i ]  );  
// }

//Immediately Invoked Function Expression(IIFE)--This is a pattern


// (function abc(a,b){
//      console.log( "normal function"+(a+b) );

// })(1,3)
// functionName()

// (function (a,b) {
//     console.log( "self invoked"  );
// })();


//syntax - 
//         (function (){
//        })();

// let a = 10;
// let b = 20;
// ( ()=>{

//     console.log( a+b+"Hello...."  );

// })();
// functionName( 3,5 )


//======== Function call, apply & bind =========//

// var fname = 'NandaKumar'
// var lname = 'Murugesan';

// let name2 = {
//     fname: 'NandaKumar',
//     lname: 'Murugesan',
// }
// let name3 = {
//     fname: 'Kowsalya',
//     lname: 'Murugesan',
// }

// let name1 = {
//     fname: 'K7',
//     lname: 'Murugesan',
//     fullName: function (newname,last) {
//         console.log( this.fname+this.lname + newname + last);
//     }
// }
// name1.fullName.apply(name3, ["Xyz","ABC"] )
// name1.fullName.apply(name2, ["Xyz","ABC"] )

// fullName =  function (newname,last) {
//     console.log(this.fname + this.lname +" "+ newname + last);
// }

// name1.fullName.call(name2, "Kesavan", "Murugesan" );
// name1.fullName.apply(name3,[ "Kesavan", "Murugesan"] );

//  let x =  fullName.bind(name3,[ "Kesavan", "Murugesan"] );

//  console.log( x()  );
// let a = 20;
//   let b = 40;
//   const c = 60;
// function functionName(){

//   let a = 10;
//   let b = 20;
//   const c = 30;

//   for ( index = 0; index < 5; index++) {  

//     console.log( a+b+c ); 
//   }
// }
// functionName();
// console.log( a+b+c );


// function HOD(){

//    console.log( "Im higher order" );

// }

// function callBack(){

//     console.log( "Im call back" );

// }

// HOD( callBack(   )  )





// console.log(x); // Outputs: undefined
// var x = 5;

// const a = 10;
// let b = 20;
// var c = 30;
// function functionName() {

//     function innerFunction() {
//         for (let index = 0; index < 5; index++) {

//             console.log(index + a + b + c);
//         }
//         console.log(index);
//     }
//     innerFunction();

// }
// functionName();

// console.log(a+b+c);

// console.log('Step 1');
// console.log( 'Step 2' );
// console.log('Step 3');


// console.log('Step 1');
// let val = setInterval(function() {
//     console.log('Step 2 (after timeout)');
// },3000);
// setTimeout( function(){
//   clearInterval(val);
// },5000 )

// async function functionName(){

// }
// console.log('Step 3');

// let a = 10;
// let b = a;
// a=20;
// console.log( a,b );

// let arr = [ 1,2,3 ]

// let arr1 = arr.map( (val,ind)=>{ console.log( val,ind  ); } )

// console.log( arr1 );
// let arr2 = [ 4,5,6 ]

// let arr4 = [ ...arr ]
// let arr3 = [].concat(arr)

// let arr5 = [ ...arr,...arr2 ]
// let arr6 = arr.concat(arr2)


// console.log( arr4,arr3 );
// console.log( arr5,arr6 );

// let arr1 = [...arr];

// arr.push(4,5)

// console.log( arr, arr1 );


// console.log("Hello"); console.warn("World"); console.error("JavaScript");

// class index{
//    main() {
//       if (console.log("Welcome")==null) {
//         console.log("Hello");
//       } else {
//         console.log("World");
//       }
// }}
// let i = new index();
// i.main();

// let check = true;
// function pri() {
//   if (check == true) {
//     console.dir(10);
//     check = false;
//     pri();
//   }
//   else {
// console.dir("World");
//   }
// }
// pri();

// const myObject = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };
// console.log( myObject );
// console.dir(myObject);

//The Function which accepts another function as an argument - Higher Order function
//The Function which is sent as an argument for another function  - Call Back

// function higherOrderFunction(acceptCallBack) {
//     console.log(acceptCallBack);
//     console.log("Im Higher Order");
// }
// let callBackFunction = function () {
//     console.log("Im call back");
// }

// higherOrderFunction(callBackFunction())

function myDisplayer(something) {
    console.log(something)
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
    console.log("something fishy")
}

myCalculator(5, 5, myDisplayer);


// var firstName = 10;
// var b = 20;

// let obj = {
//     firstName,
//     b
// }
// console.log( obj.a );

// let arr = [1,2,3,4,5]
// function functionName( ...b){

// console.log( a,b );

// }
// functionName(1,2,3,4,arr)


// let arr = [1,2,3,4,5]

// let arr1 = [...arr];

// arr.push(6,7,10)
// // arr[0][0]=35;
// console.log( arr, arr1);

