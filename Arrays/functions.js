
//Function is used to reuse the code again and 
//again for multiple input.

//Function can de declared for single time and 
//called or invoked for multiple times

//It can parameterised or zero parameter function

// let a=10;

// let newstr;

// console.log( newstr );
// console.log( str );

////////////////////////====================================================================

// function add(a=3,b){
//     console.log( "named function "+(a+b) );  
    //output --- named function + (1 + undefined )
    // console.log( "named function" );
    // console.log( "named function" );
    // console.log( "named function" );
    // return "return type function","duplicate value"  
// }
// add(undefined,10)
// add(undefined,20)
// add(undefined,30)
// add(undefined,40)

//=====Closure & scope Chain

// let a = 10;
// {
//     var b = 20;
// }
// console.log( b );

// function outerFunction(){
//     function innerFunction() { 
//         if (true) {
//             var a = 20
//             console.log( a );
//         }
//         console.log( a );
//     } 
//     innerFunction()
//     // console.log( a ); 
// }
// outerFunction()

//Normal or named function
// function functionName(){
//        console.log( "1234" ); 

// }
// functionName()

//Anonymous function (or) function expression

// let name = function (a,b) {
//     console.log( a+b );
// }
// name(20,30)

//Arrow Function
// let name1 = () =>{
//     // console.log( a+b );
//     console.log( a+b );
// }
// name1() 
// let name1 = (a,b) => console.log(a+b);
// let name1 = (a,b) => a+b;
// let name2 = a => a ;
// console.log( name2( 40 ) );

// Self Invoked Function
//IIFE - Immediately Invoked Function Expression --Pattern

// ((str,str1)=> {
//     console.log( "IIFE "+str+str1 );
// })("hi ", "hello")

//====Currying
// function curryFunction(a) {
//     return function (b) {
//         console.log( a+b );
//     }
// }
// curryFunction(10)(30)

//Rest Parameter
function name(a,...b) {
    console.log( a,b );
}
name( 1,2,3,4,5 )


//Higher Order function & Call back function

//call back - function sent as an argument to another function
// HOF - function which accepts another function as a argument


// let acceptCallBack = callBack
// console.log( acceptCallBack(100,200); );

function HOF(str,num, str1) {
    console.log( "Im HOF "+( str+num ) );
     str1(100,200)
}
function callBack(a,b) {
    console.log( "Im call Back "+( a+b ) );
}
HOF( "10",20,callBack  )

// Hoisting 


console.log( a );

var a;


//=======================================================================

// let newFun1 = function(a){
//     return a
// }
// console.log( newFun1(3) );

//Arrow function 
// let x = (b,c) =>
// {
//     console.log(b-c);
// }
// x(10,6);

// let newFun = (a,b)=>a+b

// console.log( newFun(4,10) );
// //Arrow Functions



// let abc = (a, b) => console.log(a + b);

// abc(1, 2);
// let y = (b,c) =>
// {
//     console.log(b-c);
// }
// y(10,6);

// let a =10;
// const b  = 20;
// var c =30;

// var a;

// console.log(a);
// console.log(b);


// function add() {
//     // var a =20;
//     // let b  = 40;
//     // const c = 60;
//     if (true) {
//         // var a =20;
//         var b = 40;
//         if (true) {
//             console.log(b);
//         }
//         // const c = 60;
//         //   console.log( a+c+b );
//     }
//     console.log(b);
// }
// add();
// console.log(a + b + c);

// var a = "Angular"
// var b = "SPA"

// console.log(  a+ " is used to make a "+ b  );
// // syntax:   `String ${variable} String `

// console.log( `${a} is used to make a ${b} `  );
// function add(a=1,b=2,c=3){
    
//     console.log(a+b+c);
// }
// function CBF() {
//     console.log( "Im call back" );
// }
// add(3,6,CBF() )

// function CBF(a,b,c) {
//     console.log( a+b+c );
//     console.log( "Im call back" );
// }
// function add(acceptCallBack){
//     acceptCallBack(5,10,20)
// }
// add( CBF )

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
//  }
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

//==============Self Invoked Function
//Immediately Invoked Function Expression(IIFE)--This is a pattern

//syntax 
//         (function (){
//        })();

// (function () {
//     console.log( "Im IIFE" );
// })()
// (function abc(a,b){
//      console.log( "normal function"+(a+b) );

// })(1,3)
// abc() ===> it wil throw error

// (function (a,b) {
//     console.log( "self invoked"  );
// })();

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



// function higherOrderFunction() {
//     // console.log(acceptCallBack);
//     console.log("Im Higher Order");
// }
// let callBackFunction = function () {
//     console.log("Im call back");
// }

// higherOrderFunction(callBackFunction())

// function myDisplayer(something) {
//     console.log(something)
// }

// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//     console.log("something fishy")
// }

// myCalculator(5, 5, myDisplayer);


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


// IIFE - Immediately Invoked Function Expresseion (Pattern) ====> Self invoked function

// (function () {
//     console.log( "Hii" );
// }) ()

// // console.log( 1==Number("1") );

// console.log( 1 > "a"  );
// // console.log( typeof ("1" + undefined) );

// console.log( Number("a") );



//==========Declaration & Initialization

// var ThisIsMyNewId = 1;

// var ThisIsMyNewId; //Declaratin

// ThisIsMyNewId = 1; //Initialization or assigning

//Dynamically or Loosely or Weakly Typed Language 

// ThisIsMyNewId = "one"; // Re-initialization or Re-assigning

// ThisIsMyNewId = true;

// ThisIsMyNewId = undefined;

// ThisIsMyNewId = [1,2,3,4]


// console.log( ThisIsMyNewId );

// var ThisIsMyNewId = 33;  //Re-declaration

// console.log( ThisIsMyNewId  );


// console.log( 1 + true   );

// console.log( 1 + "1" );

// console.log(typeof (1 + undefined ));

// console.log( 1 + null );

// console.log( 1 === "1"  );

// var boolean = Boolean( Infinity );

// console.log( boolean );


// var arr = [ 1, "one", true, undefined, "five", 1001,
//  [50,60,70], { id:1, fName:"Js"  }  ]

//  console.log( arr[7].fName );

 //=====Concatination

//  var str = "Hi"
//  var str1 = `FSD 2023 Total Count`
//  var str2 = "FSD 2023 Total Count"
//  var count = 16

//  console.log( str1  );
//  console.log( str2 );

//  console.log( str + 
//     "..." + 
//     str1 + 
//     "-" + 
//     count );

//  //======Template String/ Template Literal

// // Syntax --->   ` String ${ variable } `

// console.log( `${str}...${str1}-${count}`  );

// var num = 5;
// console.log( num+"X"+1+"="+(num*1) );


// var str1 = "Hello"
// var str2 = `H
// e
// l
// l
// o`
// var num = 10
// console.log( `Aug
// ular 
// ${num}` );
// console.log( "Angular"+
// num );

// console.log(  10!==10 );
// console.log(  10!==20 );
// console.log(  10!=="20" );
// console.log(  "20"!=="20" );
// console.log( !( 10!=="q") );


///Flow Control Statement
    //to control the execution flow of the statement

/* 2 types
Decision Making Statement --- Based on the condition i can execute the statement
Looping Statement-- Used to print a statement for multiple times */

//DCM - if, if else, if else-if else, Switch

//if statement - executes statement only if the condtion is true

//Syntax
        /* 
            if(condition){
              statement
            }
        */

// var a = 1;

// if (a>5) {
//    console.log( a+" is greater number" ); 
// }

// var age = 17;
// //Write a condition--- age is greater than 18 and less than 30
// if (age>=18 && age<=30) {
//     console.log( "Eligible" );
// }

//if else statement
/*Syntax
        if(condition){
            statement
        }
        else{
            statement
        }
*/

// var age = 17;

// if (age>=18 && age<=30) {
//     console.log( "Eligible" );
// }
// else{
//     console.log( "Not eligible" );
// }

//======= If else-if else statement
/*Syntax
        if(condition){
            statement
        }
        else if(condition){
            statement
        }
        else{
            statement
        }
*/
// var input1 = 10;
// var input2 = 15;

// if(input1>input2){
//     console.log( `${input1} is greater than ${input2}` );
// }
// else if(input2>input1){
//     console.log( `${input2} is greater than ${input1}` );
// }
// else{
//     console.log( `Both are equal` );
// }


