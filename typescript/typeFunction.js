// import { Employee } from "./types/employee.type";
//function
//Parameter & argument
//Default value
//optional parameter
function fName(a, b) {
    if (a === void 0) { a = "abcd"; }
    console.log(a + b);
}
fName(undefined, 2);
// console.log( person.fname  );
// function add(a:string,b:number) {
//     return( a+b );
// }console.log(add( "1",2  ));
// function add() {
//     console.log( person.age );
// }
// add( )
// let fname: string = "TypeFunction";
// let age = 20;
// let isBoolean = true
// function add() {
//     let fname: string = "StrongTyped";
//     let isBoolean = false
//     const person: Employee = {
//         fname,
//         age,
//         isBoolean
//     }
//     console.log(person.age);
// }
// add()
// const person: Employee = {
//     fname:"w234",
//     age:45,
//     isBoolean:true
// }
//Return a value--------------------------------------------------
// function printfName(newfName:string,newAge:number):(number|string) {
//     // here function is not returning anything so by default the return type is void
//     const fllfName = newfName + " s " + newAge 
// }
// printfName() //apply type casting 
// function printfName(fname){
//     console.log( fname );
// }
// printfName('Kesavan');
// printfName(10);
//Optional parameter
// function printPerson(fname:string="Something", age?:number, isMajor:boolean) { //Optional always at end
// function printPerson(fname:string="Something", age?:number, isMajor?:boolean) {
//     console.log( fname );
//     console.log( age );
//     console.log( isMajor );   
// }
// printPerson(undefined,20,true)
// function  personfName(...alphabetWords) {
//     console.log( alphabetWords[0]  );
// }
// personfName("Apple")
