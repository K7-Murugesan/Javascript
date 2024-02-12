// // var str = 'hii';

// // var str = true;

// // var num = 10;

// // var obj;

// // var nullObj = null;

// // console.log( obj );

// // var myNewEmployeeId = 1; // camelCase
// // var MyNewEmployeeId = 1; // PascalCase
// // var my_New_Employee_Id = 1; // PascalCase


// // let obj1 = {
// //     id : 1,
// //     name: "xyz",
// // }

// // console.log( obj1.name );

// // let arr = [ 1,2,3,4,"xyz", 'abc', true, [1,2,3,4], {id:1} ]


// // let a = "abc";
// // let b = "xyz";

// // let c = a+b; // concatination

// // console.log(  c + true );  // Type coercion - implicit conversion
// // console.log( 10 + true );
// // console.log( Number( "abc" )  ); //Type conversion - explicit conversion
// // console.log( Boolean({})  )


// // console.log( 1 == "1"  ); //equal to
// // console.log( 1 === "1"  ); //strict equal to or identical equal
// // console.log( "=================================" );
// // console.log( 1 != "1"  ); //not equal
// // console.log( !(1 !== 10)  ); //strict not equal

// // let lang = "Js";
// // let type = `scripting`;

// // console.log( lang + 
// //     " is a " 
// //     + type 
// //     + " " 
// //     +  
// //     "language" );

// // Template String / literal

// // console.log( `${lang}  // string interpolation 
// // is a ${type} language` );

// // conditional statement

// // if(false) console.log( 'IM in'  )
// // else console.log( "IM out" )


// // for(let i=0; i<arr.length; i++ ) console.log( arr[i] );

// // for of & for in

// let arr = [1,2,3,4,5]

// // for( let val of arr ){
//     //     console.log( val );
//     // }

// let obj = { id:1, name:"xyz" }

// // for( let key in obj ){
// //     console.log( obj[key] );
// // }
// for( let key in arr ){
//     console.log( arr[key] );
// }

// let userName = "Kesavan";

// let userName2 = "Inba"

// console.log( userName );
// console.log( userName2 );


// function add(userName){ // function declaration
//     var userName;
//     console.log( userName );
//     //statements
//     console.log(userName);
// }

// // console.log( userName );

// add("mfelkwefr") // function call or invoke


// var b; //declaration
// b=10; // initialization
// console.log( b );

// var a = 10; 
// a = "dom"; // re-assign or re-initialization

// var a = true; // re-declaration

// console.log( a );

// let c;
// c = [1,2,3]

// // let c = 10; // redclare is not possible

// c = {id:1} // reassign

// console.log( c );

// const a=10;

// a=20;
// console.log( a );

// let str = "AI"
// function name1() {
   
//     if(true){
//         //    let str = "MI"
//         if (true) {
//             // let str = 10;
//             // let str = "Cyber Security"  //////////// Scope Chain
//            console.log( str ); 
//        }
//        console.log( str );
//     }
//     console.log( str );
// }
// name1();
// console.log( str );


// function outerfn() {
//     let a = 10;

//     function innerfn() {
//         console.log( a );  //////////// Closure
//     }
//     innerfn()
// }
// outerfn()

// function siblingfn(){
//     console.log( a );
// }

// siblingfn();

//========Default paramenter / arguments

// function dfn(a=10,b=20) {  //Named function
//     console.log( a+b );
// }

// dfn(undefined,23)

// let afn = function(a,b){ //Ananomous Function
//     return( "hi im afn " + (a+b) );
// }
// console.log(afn(1,2))

// let arfn = (a,b) => { //Arrow function
//     return( "IM arrow "+ (a+b) );
// }
// console.log(arfn(1,2))

// let arfn1 = a => "IM arrow "+ a 
// console.log(arfn1(1,2));


//Self invoke
//IIFE - Immediately Invoked function exprssion -- Pattern

// (function(a,b) {
//     console.log( "Im iife"+a+b );
// }) (1,2);

//=======================================================================

//Higher Order function & Call back function

// function hof() { 
//     console.log( "hof" );
// }
// function cbf() {
//     console.log( "cbf" );
// }
// hof( cbf()  )


var arr = [1,2,3,4]; // 1 minute
arr = {id:1}
var arr = 1
var arr = "abc"
var arr = true
var arr = undefined;

console.log( arr );

console.log( Boolean(10) + true );
