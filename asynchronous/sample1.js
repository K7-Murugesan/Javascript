var a = 8;
var b = Boolean(0)
console.log( b );
// var b = '8'

console.log( a-true )

// console.log( a**3  );

// a = a++ + ++b;

// console.log( a );
// console.log( a%3 );
// console.log( a/2 );

// a = a + 5;
// a+=5  // a=a+5
// a**=4

// let a =4;
// let b = 5;

// console.log( a>b && b>a && a<=b  );

//Logical ooperation 

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
// let a =6
// let b = 5;

// if(a<b){
//     console.log("a is less than b");
// }
// else{
//     console.log("a is greater than b");
// }

//ternary or conditional operator

// console.log( a>b? "a is greater than b" : "a is less than b"   );


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
function add(a,b){
    console.log( "Im a fuction" + a + b);
}
add()

//Default argument or parameter
function defaultF(a=1,b=1){
    console.log( "Im a fuction" + a + b);
}
defaultF(2,3)
defaultF(2)