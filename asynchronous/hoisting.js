/* In js, Hoisting is the behaviour of moving all 
   the declarations at top of the scope 
   before code execution */

/* With var declaration, JavaScript can hoist
 the variable to the top of the scope */
 //  a = 5;
//  console.log( a );
//  var a;

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

functionName();
function functionName(){

        console.log( "Function declared" );

}


functionExpression();
let functionExpression = function(){
    console.log( "Function expression" );
}


var b // Declaration
b=10; //Initialization
var a = 10; // statement
// a=20; //Re-initialize

var first_name = 30; //Re declare




a = "asd";
a= true;

//var let const 