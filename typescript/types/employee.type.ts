
export type Employee = {
        name:string|null;
        age:number|null;
        isBoolean:boolean|null
}; 
export type Employee1 = {name:string;age:number;isBoolean:boolean}; 
export type Employee2 = {name:string;age:number;isBoolean:boolean}; 
export type Employee3 = {name:string;age:number;isBoolean:boolean}; 
export type Employee4 = {name:string;age:number;isBoolean:boolean}; 
export type Employee5 = {name:string;age:number;isBoolean:boolean}; 
export type Employee6 = {name:string;age:number;isBoolean:boolean}; 


export type facultyDetails = 
{       id:number; 
        fName:string, 
        lName:string, 
        salary?:number,
        bankDetails:{
                accName:string,
                accNum:number,
                ifsc:string
        }
};

        //Just for flexibility

// export type Employee = { 
//     name: string | null; 
//     age: number | null; 
//     isBoolean: boolean | null 
// };

//assertion
// export type Employee = { 
//     name?: string | null;  // which means i can use or i cant use
//     age: number | null; 
//     isBoolean: boolean | null 
// }; 