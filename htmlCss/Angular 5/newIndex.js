// let a = 10;
// console.log( a );
// alert( a );
// confirm ( a );
// document.write( a)
// let a = prompt("Enter a value");

// let newEmployeeId = 'JS';

// let NewEmployeeId = 1 ;

// let New_Employee_Id = true ;

// var str ;
// str = null;


// let obj = {
//     id : 1,
//     name: "keshav"
// }

// let arr = [1,2,3,4,5,6 ]

// // console.log( arr[3] );



// const num = 10;
// const num1 = Number(undefined); // Explicit Conversion
// const newVar = num + num1;  // Implicit Conversion

// console.log( newVar );
// console.log( typeof newVar );

//-----Template String/Literal

// let str = 'abc';
// let str1 = "xyz";
// let str2 = `Temp
// late Lit
// eral`;

// let concat = str + " " + str1 + " " + str2;


// let tempStr = `abc ${str1} ${str2}` //String Interpolation

// console.log( concat );
// console.log("===========================");
// console.log( tempStr );

//Operator

// console.log( 15/5  );
// console.log( 15%5  );

// console.log( 3**4 );

// let a = 1; //2
// let b = 2; //3
// //     a= 2  b = 3
// let c = a++ + ++b; // 1 + 3 = 4

// console.log( a,b,c );

// Comparision
// console.log( 1 == true );
// console.log( 1 === true );
// console.log( 1 !== 'a' );

// console.log( !(1!="1") && (1 == '1') )
// console.log( (1!="1") || (1 == '1') )

//----Logical Operator

//Logical AND (&&)
// true true ==> true
// true false ==> false
// false true ==> false
// false false ==> false

//Logical OR (||)
// true true ==> true
// true false ==> true
// false true ==> true
// false false ==> false

//Logical NOT (!)



// let arr = [10,20,30,40,1,2];

// let str = 'abcdefg'

// console.log( arr.length-1 );
// console.log( arr[0] );

// for(var i=0; i<str.length; i++ ){
//     console.log( str[i] );
// }

//for-of
// for(let val of arr ){
//     console.log( val );
// }
// for(let alpha of str ){
//     console.log( alpha );
// }

//for-in loop

// let obj = { id:1, name: "abc" }
// let arr = [10,20,30];
// let str = 'abcde'

// for(let key in obj ){
//     console.log( obj[key] );
// }
// for(let key in arr ){
//     console.log( arr[key] );
// }
// for(let key in str ){
//     console.log( key );
// }

// let str;
// console.log( str );

// function sum(a=123,b=456){
//     console.log( a+b );
// }
// sum(undefined,10);


//========== let vs var vs const


// var str; // declaration
// str = "js"; //initialization;
// var obj = {id:1} ; 
// var obj = 10; // Re-declare
// obj = {name:"sujith"}; // Re-assign or re-initialize

// console.log( obj );

// let str= 'CS'; //Declare and initialize
// str = 'AI' //Re-assign  and redclare is not possible
// str = 'ML';

// console.log( str );

// const arr = [1,2,3,4]; //Only declare and initialize

// console.log( arr );

// let num = 456;
// const newVal = "xyz"

// function name1() {

//     let num = 123; //block scope
//     const newVal = "abc"; //block scope
//     if(true){
//         // var num = 123; //function scope

//         if (true) {
//             console.log( num );
//             console.log( newVal );
//         }
//     }
//     console.log(newVal,num);
    
// }
// name1()
// console.log( num, newVal );

//Function types 

//Normal function

//Ananomous function
let ananomFun = function(a,b){
    return "Im an ananomous "+(a+b) ;
}
let newVal = ananomFun(10,20)

console.log( newVal );

//Arrow function or fat Arrow
let arrowFun = (a,b) => (  "Im an arrow "+(a+b) );


console.log( arrowFun(10,20));

//Self invoked function

//IIFE - Immediately Invoked Function Expression

(function (a,b){
    console.log( "im iife "+(a+b) );
})(100,50);

