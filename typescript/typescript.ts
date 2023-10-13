//Primitive datatype

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

let age:number|string|boolean= 10;
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




let frontEnd:  {id:number; fName:string, lName:string, salary?:number}[]  = [
         {id:1, fName:"Kesavan", lName:"Muugesan", salary:50000},
         {id:2, fName:"Prabha", lName:"Vathi"},
         { fName:"James", lName:"Chithirai", id:3   }
]
let arrObj:  facultyDetails[] | null = [
         {id:1, fName:"Kesavan", 
         lName:"Muugesan", salary:50000,
         bankDetails:{
                accName:"Kesavan M",
                accNum:12345,
                ifsc:"SBI00"
         }
        },
         {id:2, fName:"Prabha", lName:"Vathi",bankDetails:{
                accName:"Kesavan M",
                accNum:12345,
                ifsc:"SBI00"
         }},
         { fName:"James", lName:"Chithirai", id:3,
                bankDetails:{
                accName:"Kesavan M",
                accNum:12345,
                ifsc:"SBI00"
         }  }
]

let backEnd = arrObj as facultyDetails[]


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
// let employeesObj: {}[] = [{name:"Array"},{age:30},"typescript",true]

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

import { Employee, facultyDetails } from "./types/employee.type";

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



