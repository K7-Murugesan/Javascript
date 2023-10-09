"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//function
//Parameter & argument
//Default value
//optional parameter
// console.log( person.name  );
// function add(a:string,b:number) {
//     return( a+b );
// }console.log(add( "1",2  ));
// function add() {
//     console.log( person.age );
// }
// add( )
// let name: string = "TypeFunction";
// let age = 20;
// let isBoolean = true
// function add() {
//     let name: string = "StrongTyped";
//     let isBoolean = false
//     const person: Employee = {
//         name,
//         age,
//         isBoolean
//     }
//     console.log(person.age);
// }
// add()
// const person: Employee = {
//     name:"w234",
//     age:45,
//     isBoolean:true
// }
//Return a value--------------------------------------------------
// function printName(newName:string,newAge:number):(number|string) {
//     // here function is not returning anything so by default the return type is void
//     const fllName = newName + " s " + newAge 
// }
// printName() //apply type casting 
// function printName(name){
//     console.log( name );
// }
// printName('Kesavan');
// printName(10);
//Optional parameter
// function printPerson(name:string="Something", age?:number, isMajor:boolean) { //Optional always at end
// function printPerson(name:string="Something", age?:number, isMajor?:boolean) {
//     console.log( name );
//     console.log( age );
//     console.log( isMajor );   
// }
// printPerson(undefined,20,true)
function personName() {
    var alphabetWords = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        alphabetWords[_i] = arguments[_i];
    }
    console.log(alphabetWords[0]);
}
personName("Apple", "Mango", "banana", "watermelon", "strawberry");
