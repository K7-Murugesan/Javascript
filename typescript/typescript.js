"use strict";
//Primitive datatype
Object.defineProperty(exports, "__esModule", { value: true });
// import { Employee } from "./types/employee.type";
// let a:any = 10;
// // Union type ===> let a:(number|string|boolean)
// a="Im in";
// a=true;
// a=undefined;
// a=[1,3,6,7]
// console.log( a );
// let b:boolean = true;
// let str:string = "qwertt"
var age = 10;
// age = "20";
// // age='string'
// // console.log(age);
// let employeeName:string = "TypeScript"
// // employeeName=true;
// console.log( employeeName );
// let isBoolean: boolean = true;
//---------------------------------------------
//Reference type or Non-primitive type
// let arr: any[] = [1,"2",3,true,undefined];
// arr[0] = 45
// let subjects:any[] = ["1", 1,true] //not applicable for other types other than string
// let subjects:(string|number|boolean|undefined)[] = [1, "1"] //not applicable for other types other than string
// subjects[subjects.length]=true
// let obj: { id:number, name:string, fName?:string  } = { name:"bhavana", id:1 };
var frontEnd = [
    { id: 1, fName: "Kesavan", lName: "Muugesan", salary: 50000 },
    { id: 2, fName: "Prabha", lName: "Vathi" },
    { fName: "James", lName: "Chithirai", id: 3 }
];
var arrObj = [
    { id: 1, fName: "Kesavan",
        lName: "Muugesan", salary: 50000,
        bankDetails: {
            accName: "Kesavan M",
            accNum: 12345,
            ifsc: "SBI00"
        }
    },
    { id: 2, fName: "Prabha", lName: "Vathi", bankDetails: {
            accName: "Kesavan M",
            accNum: 12345,
            ifsc: "SBI00"
        } },
    { fName: "James", lName: "Chithirai", id: 3,
        bankDetails: {
            accName: "Kesavan M",
            accNum: 12345,
            ifsc: "SBI00"
        } }
];
var backEnd = arrObj;
var arr = [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]];
// import {Employee5} from './types/employee.type'
// let a:  Employee[] = [ {name:"Static",age:35,isBoolean:true} ]
//This is called type aliases 
//We can reuse this Employee type bcoz we declared in seperate file 
// let employees: Employee[] = [
//     {name:"Array",age:30,isBoolean:true},
//     {name:"Object",age:35,isBoolean:false}
// ] 
// let newEmployees: Employee[] = [];
//----------------------------------------------------------------------------
//UNION TYPE 
/* In TypeScript, a union type allows you to specify
that a variable or parameter can have one or several possible types.
 You create a union type by using the | operator to separate the individual types. */
/*while fetching a data from database, if it is an empty data..
Using Union type you can specify another type like null  */
var employees = [
    { name: "Array", age: 30, isBoolean: true },
    { name: "Object", age: 35, isBoolean: false }
];
var newEmployees = employees;
//==========================OR==============================//
// let employees: Employee[] | null = null
// let newEmployees: Employee[] = employees; 
/*while asssigning employees varialble to another variable it will
through error Bcoz here im not mentioning the type of null*/
//=========================================================//
// TYPE ASSERTIONS or TYPE CASTING
var a = "ts";
var b = a.length;
var b = a.length;
console.log(b);
//explicitly i can define a value type
/*if im getting data from database..there we cant mention
     the type...simply we will get JSON data..After fetching a data
     if im assigning that JSON data to one variable
      i can specify the particular type */
//             console.log( employees[0].gender  ); //output: undefined
//             //here we will use some assertion in two way  
//            console.log( typeof(newEmployees)  );
//       let str:(string|number|boolean) = "Open Source"
//       str = true;
//       let str1 = str as boolean;
//       let str1 = <boolean> str ;
//       console.log( typeof(str1) );
//       let employees  = [
//                {name:"Array",age:"12",isBoolean:false},
//                {name:"Array",age:45,isBoolean:false},
//                {name:"Array"},
//       ]
//      console.log(employees[2].newAge  );
//    let newEmployees = employees as Employee[] ;
//                    // (OR)
// let newEmployees = <Employee[]>employees ;
//      console.log( newEmployees[0].gender  ); //here autocompletion is not proper
///We can fix a property as optional using ? inside object         
// let someValue: any = "This is a string";
// let strLength = someValue.length;
// console.log( strLength);
