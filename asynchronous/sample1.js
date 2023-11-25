// var a = 8;

// var b = Boolean(0)
// console.log(b);
// var b = '8'
// console.log( b + false  );
// console.log( b + 9  );

// console.log(a - true)

// var b = Number('abc')
// var b = Boolean(0)

// console.log( b );

// //====Template String

// var str = "Hi"+
// b+
// " Hello"

// var str1 = `H
// i
// ${b} 
// Hello`

// console.log( str, str1 );

// console.log( a**3  );
// var a = 4, b = 5; 
// c = a++ + ++b + ++a;  

// console.log( a,b,c );

// console.log( a );
// console.log( a%3 );
// console.log( a/2 );

//===Assignment Operator
// var a = 8;
// a = a + 5;

// a+=5  // a=a+5
// // a**=4
// console.log( a );
// let a =4;
// let b = 5;

// console.log( a>b && b>a && a<=b  );

//Logical ooperator

//Logical &&

// true true ===> true 
// true false ===> false 
// false true ===> false 
// false false ===> false 


// Logical ||

// true true ===> true 
// true false ===> true 
// false true ===> true 
// false false ===> false 


//Decision making statement
// let a =`6
// let b = 5;

// if(a<b){
//     console.log("a is less than b");
// }
// else{
//     console.log("a is greater than b");
// }

// //ternary or conditional operator

// console.log( a>b? "a is greater than b" : "a is less than b"   );`


// switch (a) {
//     case 1: console.log("Im one");
//         break;
//     case 6: console.log("Im six")
//         break;
//     default: console.log("Im not the one")
//         break;
// }

//LoopingStatement
// for ( index = 1; index <= 10; index++) {

//    console.log( index );

// }


// let a = 10
// while(a<1){
//     console.log( a  );
//     a++;
// }

// do{
//     console.log(a);
//     a++;
// }while (a<10) 


// let num = prompt("Enter a number");

// alert(num)


//Function
//Code runner to run the code
// function add(a,b){
//     console.log( "Im a fuction" + a + b);
// }
// add()

// //Default argument or parameter
// function defaultF(a=1,b=1){
//     console.log( "Im a fuction" + a + b);
// }
// defaultF(2,3)
// defaultF(2)
// var a = 10;

// if (a > 5) {
//     console.log("hii");
// } else {
//     console.log("No");
// }

// console.log((a > 5) ? "hii" : "No")


// let _fName = "sdfjs";


// function fName() {
//     var a = 10
//     console.log("Hello" + _fName);

// }
// fName();

// function functionName() {

//     console.log(a);

// }


// function functionName() {

//     let a = 10;
//     function functionName() {

//         console.log(a);

//     }
// }



// class Template {
//     // fName
//     // lName
//     constructor(fName, lName) {
//         this.fName = fName;
//         this.lName = lName;
//     }
//     firstName() {    
//         console.log(this.fName + this.lName );
//     }
// }

// let newObj = new Template("xyz", 'abc')

// newObj.firstName()

// console.log( newObj );


// function sortArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if( arr[i]>arr[j] ){
//                 let temp = arr[i];
//                  arr[i] = arr[j];
//                  arr[j] = temp;      
//             }  
//         }    
//     }
//     console.log( arr );
// }
// sortArray([5,2,4,1,3,7,6])


// clas`s GlobalScope{
//     a=10;
//     b=20;
//     newFucnction(){
//         // var b=20;
//     }
// }

// class DuplicateObject{
//     constructor(){
//         console.log( a );
//     }
// }

// let globalScope = new GlobalScope()

// let duplicateObject = new DuplicateObject()`

// let obj1 = {
//     "id":1,
//     "name":[]
// }

// let obj = {
//     options:{
//         $options:{
//             start_data:100
//         }
//     },
//     booking: function(a,b){
//        console.log( this.options.carProduct.start_data ); 
//     }
// }

// obj.booking(1,2)


//Currying

// function name(a) {
//     return function fname(b){
//         console.log( "Hiii "+ (a+b) );

//     }
// }
// name(3)(6)


// let a = "10";
// let b = "11"
// a = "ecmaScript"
// a=true;

// console.log( a-b ); // Implicit Conversion or Type Coercion
// console.log( Boolean(-45) ); //Explicit Conversion  

// var CurrentCourse = "Javascript" //PascalCase
// var CurrentCourse = "Javascript"
// var current_course_abc_def = "ECMA Script"

// let str = "Loosely";
// let str1 = "Typed"

//Template Literal / Template String
// console.log( "Javascript is a "+
// str
// +" "+str1+ " Language"  );

// console.log( `Javascript is 
// a ${str} 
// ${str1} 
// Language`   );  // ${}-String Interpolation


// console.log( "Dynamically Types"  );
// console.log( `Dynamically 
// Typed`  );

// var num1 = 20, num2 = 2;

// console.log( num1+num2  );
// console.log( num1-num2  );
// console.log( num1*num2  );
// console.log( num1%num2  );
// console.log( num1/num2  );
// console.log( num1**num2  );


// var a = 2;
// var c;
// var b;

// a = a++; 
// b = ++a; 

// console.log( a,b );

// a = a++; 
// b = a++;

// console.log( a,c,b );

//Assignment Operator

// let a = 4;

// a%=2 // a = a%2
// a +=10;
// a-=4
// console.log( a );
// console.log(a**6);

// console.log( !(a==0)  );


//Switch Case

// var a = 'abc';

// switch(a){
//     case "Monday": console.log("weekday");
//     break;
//     case "Tuesday": console.log( "Weekday" );
//     break;
//     default : console.log("Not a day");
//     break;
// }

//========= while loop

// let a = 1;
// let b = 10;

// while(a<b){
//     console.log( a );
//     a++;
// }

// console.log( a );

// let a = 0;
// let b = [10,12,13,14,15];

// while(a<b.length){
//     console.log( b[a] );
//     a++;
// }

// let a = 10;
// let b = "javascript";

// while(a<b.length){
//     console.log( b.charAt(a) );
//     a++;
// }

//======== do-while loop

// let num = 13
// do{
// console.log( num );
// num++
// }
// while(num<=10)

//===========FUNCTION

// function abc(a,b){
//     console.log( "Function"+a[0]+b );
// }  //Function declaration
// abc([2,3,5],3); //Function invoke/call

//default argument/paramter
// function abc(a=10,b=10){
//     console.log( "Function"+a+b );
// }  //Function declaration
// abc(undefined,12); 
// abc(4);

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
//        if (true) {
//             var a = 10
//        }
//     }
//     console.log( a );
// }
// ab();

//let & const --->block scope
// var c = 20;
// let b = 30;
// const a = 10

// function ab() {
//     // var c = 12;
//     // let b = 23;
//     // const a = 10

//     function xyz() {
//         // var c = 12;
//         // let b = 23;
//         // const a = 10
//         if (true) {
//             if (true) {
//                 if (true) {  
//                     console.log( a+b+c );
//                 }
//            }
//         }
//     }
//     xyz()
//     console.log( a+c+b  );
// }
// console.log( a+b+c );
// ab();


//========= Function types

//Named/Normal Function

// function name() {
//     console.log( "Normal function" );
// }
// name()

//Ananomous Function or Function Expression
// let a = 10
// let abc = function (a,b) {
//     console.log( "Ananomous function"+(a+b) );
// }
// abc(5,8)

//Arrow Function

// let xyz =  (a,b)=> {
//     console.log( "Arrow function"+(a*b) );
// }
// xyz(1,2)

// //Non return type
// var NRTDouble =  (a,b)=> console.log( "Arrow function"+(a*b) );

// var NRTSingle =  a => console.log( "Arrow function"+a );
// NRTDouble(23,46)
// NRTSingle(45)

// //Return type
// var normalReturn =  (a,b)=>{
//     return a+b
// };
// var singleParams = a =>a
// var multiParams =  (a,b)=>a+b

// console.log( normalReturn(4,5)  );
// console.log( singleParams(1) );  
// console.log( multiParams(1,2) );  

// //==========Higher Order Function & Call Back Function

// function HoF(acceptCallBack) {
//     console.log(acceptCallBack);
//     console.log( "Im a Hod Function" );
// }
// function callBack(a,b){
//     console.log( "Im a call Back "+ (a+b)  );
// }  

// HoF(34, callBack );
//HigherOrderFunction(CallBackFunction)


//Self Invoked Function
//====IIFE(Immediately Invoked Function Expression)-->Pattern

// (function (ananom) {
//     console.log( ananom );
// })(123);

// ( (arrow) => {
//     console.log( arrow );
// })(456);

// ( ()=> {
//     console.log("Self invoke");
// })()

//======>Array

// let arrName = [1, "two", true, [1, 2, 3], { id: 1 }, , 2, , 4, 5, 6, 6, 7, 8, 88]

// console.log(arrName);

// console.log( arrName.length );
// console.log( arrName[arrName.length-2]);

// async function name() {
//     let data =await "Helooe"
//      console.log(data); 
// }0
// name()
// console.log( "Good Evening" );

// const getData = async () => {
//     let y = await "Hello World";
//     console.log(y);
// }
 
// console.log(1);
// getData();
// console.log(2);

// let date = new Date();

// setInterval(()=>{
//     console.log( date.getTime()  );
// },2000)

// let str = "one"

// console.log( str + true );
// console.log( 10 + false );

// console.log( 10 - 'A' );

// console.log(  Boolean( -Infinity )  );
// let num = 10

// let StringLiteral = "Now we are learning Literal"
// +num;
//camelCase
//PascalCase 
//under_case or snake_case

// let str1 = `Now we are 
// learning Literal
// ${num}`;

// console.log( str );
// console.log( str1 );

//datatypes defines how data stored in variable


let a = 10;
let b = a;

a= 5

console.log( a,b );

let arr = [ 1,2,3,4,5 ];
let arr2 = arr;

arr.push(6)

console.log( arr, arr2 );