/* In js, Hoisting is the behaviour of moving all 
   the declarations at top of the scope 
   before code execution */

/* With var declaration, JavaScript can hoist
 the variable to the top of the scope */
//  a = 10;

// let functionExpressionHoist = function () {
//   console.log( "Hi im in" );
// }
// functionExpressionHoist();
// let a;
// a=10;
// console.log( a );
//  a = 5;
// functionDecHoist();

// function functionDecHoist(){
//   console.log( "Function is hoisted" );
  
// }

/*For let and const - first you should declare  
    otherwise it will throw reference error...
With let and const declarations, JavaScript does not hoist
 the variable to the top of the scope */

// a = 5;
// console.log( a );
// const a=10;


// Example 1

// console.log( a );

// var a = 10;  //Output undefined bcoz while compiling declaration moved to top 


// name()
// function name() {
//     console.log(fName);
// }



// let functionExpression = function () {
//     console.log("Function expression");
// }
// functionExpression();


// var b // Declaration
// b=10; //Initialization
// var a = 10; // statement
// // a=20; //Re-initialize

// var first_name = 30; //Re declare

// a = "asd";
// a = true;

//var let const 

//===========================================================

// Closure 

/* In JavaScript, a closure is a function that has access to 
variables from its outer (enclosing) function, even after 
the outer function has finished executing. 
Closures are a fundamental concept in JavaScript and are often used to 
create private data, maintain state, and implement various design patterns. */


// function outerFunction() {
//     const outerVariable = 'I am from the outer function';
    
//     function innerFunction() {
//       console.log(outerVariable);
//     }
    
//     return innerFunction;
//   }
  
//   const closureFunction = outerFunction(); // outerFunction has finished executing, but closureFunction maintains access to outerVariable
  
//   closureFunction(); // This will log "I am from the outer function"
  

// function functionName() {

//     let fName = "123"
//     function name() {
//         console.log(fName);
//     }
//     name()

// }
// functionName();

//===============================================================

// SCOPE CHAIN

/* When you reference a variable in your code, the JavaScript 
engine first looks in the current function's local scope. 
If the variable is not found there, it proceeds to the parent 
function's scope, and so on, until it reaches the global scope. 
This order of searching is known as the scope chain. */

// const globalVariable = 'I am in the global scope';

// function outerFunction() {
//   const outerVariable = 'I am in the outer function scope';

//   function innerFunction() {
//     const innerVariable = 'I am in the inner function scope';
//     console.log(globalVariable); // Accesses the globalVariable from the global scope
//     console.log(outerVariable); // Accesses the outerVariable from the outer function scope
//     console.log(innerVariable); // Accesses the innerVariable from the inner function scope
//   }

//   innerFunction();
// }

// outerFunction();


// console.log( "1" );
// setTimeout( ()=>{
//     console.log( "2" );
// })
// console.log( "3" );


//Currying

// function functionName(){
//     console.log( "Normal Function" );
// }
// functionName();

// ( function(a){
//     console.log( "IIFE"+a );
// } )(3)

// function fnName(a,b,c,d,e){
//     return function(b){
//             console.log( a+b );
//     }
// }
// fnName(10)(20)

// function name(a) {
//     console.log( a+(Math.random()) );
// }
// name(1)

// let a = 20;
// function abc(){
//     if(true){
//         if(true){
//             var b = 10
//             if(true)
//             {
//                 var c =30;
//                 console.log( a+b+c );
//                 console.log( b );
//             }
//         }
//         console.log(c);
//     }
//     console.log( a+b+c );
// }
// abc();


let obj = [
    {state:'tn', city:'chennai'},
    {state:'tn', city:'trichy'},
    {state:'ka', city:'bangalore'},
    {state:'kl', city:'cochin'},
]

//output = {
//     'tn': ['chennai','trichy'],
//     'ka': ['bangalore'],
//     'kl': ['cochin'],
// }

let arr = [ [1,2,3], [4,5],[6],[7,8] ]

//output = [1,2,3,4,5,6,7,8]







// a function which returns an anonomous function 
// - normally argument is passed while invoking a function. 
// so for the returned function i've to pass the argument after normal invoking 
// i've to open another parenthesis to call the returned function




for (var i = 0; i < 5; i++) {
    console.log(i)
}
setTimeout( ()=>console.log( i ),1000 )
// console.log( i );