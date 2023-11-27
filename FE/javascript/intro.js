
// //-------Printing Statements 
//     // console.log();
//     // document.write();
//     // alert()
//     // confirm()
//     // prompt()

// //-----------------------

// //---Primitive Datatypes

// var number = 10;
// // var number = prompt("Enter a value");
// console.log(number)
// // document.write(number)
// // alert(number)
// // confirm(number)

// var str = "New String";

// console.log( str );
// console.log( typeof str );

// // - single line comment
// /* Multi line comment  */  

// var condition = true ;
// var condition = false ;

// console.log( condition );
// console.log( typeof(condition) );

// var obj = undefined;

// console.log( obj );

// var newObj = null;

// console.log( newObj );


// //====Non-primitive datatypes

// //Syntax - Object
//  /*
//     let object_name = {
//         key : value,
//         property : value,
//         variable : value
//     }
//  */

// let secodObj = {
//     str : "firstValue",
//     num : 15,
//     condition : true,
//     // fourthObj,
//     newNull : null
// }

// console.log( secodObj );

// //Syntax - Array
//  /*
//     let array_name = [
//         boolean_value, string, number_vale, array, object
//     ]
//  */


// let arr = [123,"two",true,undefined,null, {name:"dinesh"}, [1,2,3,4]  ] 



// //-------difference between undefined & (not-defined or undeclared)
// let myId;

// console.log( myId );  // output - undefined

// // console.log( firstArrValue ); // Error- firstArrValue is not defined



//25-11-2023

// let currentTopic; //Declaration

// currentTopic = "initialization" // Initialization

// // let currentTopic = "DI" // Declaration & initialization

// currentTopic = "JS" //Re-initialize or re-assign
// currentTopic= [1,2,3]
// // let currentTopic //Redeclare is not possible
// console.log( currentTopic );

// var num; 
// num=10;

// var num = 20; //redclase is possible

// num = 'Gopola';

// console.log( num );

// const constVariable = true;

// // const constVariable = false //Reassign and redeclare is not possible 


// {
//     var fNmae = "Mocha" //global or function scope
// }

// console.log( fNmae );

// {
//     let fNmae = 'LiveScript' // Block Scope
//     console.log( fNmae );

// }
// console.log( fNmae );

// {
//     const fNmae = 'ECMA' // Block Scope
// }
// console.log( fNmae );


//========= Type Coercion or Implicit Conversion

// var num = 10;
// var num1 = 20;
// var condition = false;  // true - 1 & false - 0
// var condition1 = true;  
// var undefinedVar ;

// console.log( num + num1 );

// var str1 = "thirty"
// console.log( str1 + num ); 
// console.log( typeof( num + str1) );  
// // String + anything = String (or) anything + string = stringg 

// console.log( condition + num );
//     // number + boolean-->(number) = number (or) boolean+number = number

// console.log( condition1+condition ); 
// Boolean + Boolean = number

// console.log( num1 - undefinedVar  );
// number + undefined = Nan
// console.log( typeof(num1 + undefinedVar)  );

// console.log( str1 + null );
// console.log( num1 / null );

// console.log( num1 + Infinity );

//======= Type Conversion or Explicit Conversion

// let numStr= ''

// console.log( Number( numStr )  );
// console.log( Boolean( numStr ) );

// let newNum = 101;

// console.log( Boolean(Infinity) );
// console.log( Boolean( newNum ) );
// console.log( String( newNum ) );
// console.log( newNum + String( newNum ) );
// console.log( num1 + Number( numStr ) );

// let newBoolean = true;

// console.log( Number( newBoolean ) );
// console.log( String( newBoolean ) );
// console.log(  newBoolean -  false  );

// let id = 12,newId=id-5, str 
// // let newId = id;
//   newId = id - 10;

// console.log( newId + 10 );

// let lang = "Javascript"
// let altLang = "Programming language"


// console.log( "Javascript is a scripting language and Programming language" );
// console.log( lang + " " + "is a scripting language and" + " " + altLang ); //Concatination
// console.log( lang  + " is a scripting language and " + altLang ); //Concatination



////=======Template String / Template Literal ( ` ` )

// let strLite = "Javascript is a scripting language and Programming language"
// let tempStr = `Javascript is a
// scripting language 
// and
// Programming
// language`


// let strLiteral = "Javascript is a scripting language and Programming language " 
// + id + " "
// + newId;  // 

// let tempStr = `Javascript is a scripting language and Programming language + ${id+newId} +${newId}` 
//     //String Interpolation --- ${}


// console.log( strLiteral );
// console.log( "=========================");
// console.log( tempStr );

////=========Operator 

//==Arithmetic Operator

// var num = 50;
// var num1 = 10;


// console.log( num+num1 );
// console.log( num-num1 );
// console.log( num*num1 );
// console.log( num%num1 ); //Modulus---Remainder
// console.log( num/num1 ); //---Quotient
// console.log( num**num1 ); //Exponential --power

//Incerement and Decrement operator

//Pre increment & Post-increment

// var a = 1;
// ++a //---Pre-increment
// var b = 2;
// var c = 3;
// a = ++a + b++;//--a = a+1 //--Post-increment
// c = ++a + ++b + c++ + a++;
// //a = 1 + 1
// // a = 2
// console.log( a, b, c );

/* a = c++ - --a + ++c + b++
    b = a-- + --b + ++a
    c = c-- + b-- - --a;
    console.log( a,b,c )
*/

// var a = 4; // in memory 3
// var b = 2;

// b = --a + b--;
// // b = --4 + 2--
// //   = 3 + 2
// // b = 5
// console.log( a,b );

//=====Assingment Operator

var a = 10;

// a += 50 // a = a+50
// console.log ( a );

//-----Comparision Operator

// console.log( a == '10' );//Equal to -it will Compare values
// console.log( a === '10' ); //Strict Equal or identical equal - it will compare value & datatype
// console.log( 10 > a  ); // Greater than
// console.log( 20 >= a ); // Greater than equal to
// console.log( 15 < 9 ); // Less than
// console.log( 9 <= 9 );  // Less than equal to
// console.log( 10!='20' ); // Not Equal to
// console.log( 10!=='20' ); // Identical not equal or strict not equal
// console.log( 10 !==20 );
// console.log( 10!=='20' );

//-- Logical Operator

//--- Logical AND (&&)

var num = 17;
var num1 = 25

// console.log( num>=18 && num<=30  );
// console.log( num>=18 && num1<=30  );


//-- Logical OR ( || )
console.log( num>=18 || num1<=30  );

//----Logical NOT ( ! )
console.log( !(num>=18 || num1<=30)  ); 

console.log( !(num<20) );
