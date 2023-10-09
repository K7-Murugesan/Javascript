//Primitive datatype
// import { Employee } from "./types/employee.type";
// let age:number|string|boolean= 10;
// age = "20";
// // age='string'
// // console.log(age);
// let employeeName:string = "TypeScript"
// // employeeName=true;
// console.log( employeeName );
// let isBoolean: boolean = true;
//---------------------------------------------
//Reference type or Non-primitive type
// let subjects:any[] = ["1", 1,true] //not applicable for other types other than string
// let subjects:(string|number|boolean|undefined)[] = [1, "1"] //not applicable for other types other than string
// subjects[subjects.length]=true
var obj = { name: "typescript", release: 2012 };
console.log(obj);
// obj.name=20;
// let employeeDetails:
// {   name:(string|number)[];
//     age:number;
//     isBoolean?:boolean
// } = 
// {
//     name:['Typeop',10],
//     age:20
// }
// let employeeDetails1:{name:string,age:number} = {
//     name:'Typeop',
//     age:20,
//     //isMajor:true //is not applicable bcoz the type of object has been defined
// }
// let multiObject: {name:string; age?:number}[] = 
// [
//     {name:"Typed language",age:40},
//     {name:"Static typd"}
// ]
// let employeesObj: {name:any[]} = { name:[]  }
// let employeesObj: {}[] = [{name:"Array"},{age:30},"typescript"]
// let employeesObjType: {name:string;age:number;isBoolean:boolean}[] = [
//     {name:"Array",age:30,isBoolean:true},
//     {name:"Object",age:35,isBoolean:false}
// ]    ///it is more complex to read
//--------------------------------------
// type Employee = {name:string;age:number;isBoolean?:boolean}; 
// // //     //it is a type to define the structure--->not a variable or not a named memory
// let employees: Employee[] = [
//     {name:"Array",age:30,isBoolean:true},
//     {name:"Object",age:35,isBoolean:false},
//     {name:"Object",age:35},
// ]
// let newObj: Employee[] = []
//-------------------------------------------------------------------------
// import { Employee } from "./types/employee.type";
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
//        let employees  = [
//                 {name:"Array",age:"30",isBoolean:false},
//                 {name:"Array",age:"12",isBoolean:false},
//                 {name:"Array",age:12,isBoolean:false},
//        ]
//             console.log( employees[0].gender  ); //output: undefined
//             //here we will use some assertion in two way  
//            console.log( typeof(newEmployees)  );
// let str:(string|number) = "Open Source"
// str = 10;
// let str1 = str as unknown ;
// console.log( typeof(str1) );
//    let newEmployees = employees as Employee[] ;
// (OR)
// let newEmployees = <Employee[]>employees ;
// console.log( newEmployees[0].gender  ); //here autocompletion is not proper
///We can fix a property as optional using ? inside object         
// let someValue: any = "This is a string";
// let strLength = someValue.length;
// console.log( strLength);
