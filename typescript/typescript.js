"use strict";
//Primitive datatype
Object.defineProperty(exports, "__esModule", { value: true });
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
// let obj:{ name:(string|number);release:number  } = {  name:"typescript", release:2012  }
// console.log(obj);
// obj.name=20;
// let employeeDetails:
// {   name:any[];
//     age:{a:number};
//     isBoolean?:boolean
// } = 
// {
//     name:['Typeop',10],
//     age:{a:20},
//     isBoolean:true
// }
// let employeeDetails1:{name:string,age:number} = {
//     name:'Typeop',
//     age:20,
// // isMajor:true //is not applicable bcoz the type of object has been defined
// }
// let multiObject: {name:string; age?:number}[] = 
// [
//     {name:"Typed language",age:40},
//     {name:"Static typd"},
//         { age:50, name:"SuperSet"   }
// ]
// let employeesObj: {name:any[]} = { name:[1,"2"]  }
var employeesObj = [{ name: "Array" }, { age: 30 }, "typescript", true];
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
// let employees: Employee[] | null = [
//         {name:"Array",age:30,isBoolean:true},
//         {name:"Object",age:35,isBoolean:false}
//  ]
// let newEmployees: Employee[] = employees;
//==========================OR==============================//
// let employees: Employee[] | null = null
// let newEmployees: Employee[] = employees; 
/*while asssigning employees varialble to another variable it will
through error Bcoz here im not mentioning the type of null*/
//=========================================================//
// TYPE ASSERTIONS or TYPE CASTING
//explicitly i can define a value type
/*if im getting data from database..there we cant mention
     the type...simply we will get JSON data..After fetching a data
     if im assigning that JSON data to one variable
      i can specify the particular type */
//             console.log( employees[0].gender  ); //output: undefined
//             //here we will use some assertion in two way  
//            console.log( typeof(newEmployees)  );
var str = "Open Source";
str = true;
//       let str1 = str as boolean;
var str1 = str;
//       console.log( typeof(str1) );
var employees = [
    { name: "Array", age: "12", isBoolean: false },
    { name: "Array", age: 45, isBoolean: false },
    { name: "Array" },
];
console.log(employees[2].newAge);
//    let newEmployees = employees as Employee[] ;
//                    // (OR)
var newEmployees = employees;
//      console.log( newEmployees[0].gender  ); //here autocompletion is not proper
///We can fix a property as optional using ? inside object         
// let someValue: any = "This is a string";
// let strLength = someValue.length;
// console.log( strLength);
