// console.clear();
// var a = 10;
// function functionName(){
//     'use strict';
//     console.log( a );

// }
//  functionName() ;

// const person1 = {
//     name: "TypeScript",
//     age: 30,
// }

// const person = {
//     name: "Static",
//     age: 20,
//     fName: function (a,b) {
//         console.log(this.name + a + b);
//     }

// }
// person.fName.call(person1,20,50)
// person.fName.apply(person1,[25,55])


class FirstClass {
  #newBrand;
  #model;
  constructor(brand, model) {
    this.#newBrand = brand;
    this.#model = model;
  } 
 add(){
    console.log( this.#newBrand+this.#model );
  }
}
let firstObject = new FirstClass("bMW", 2010);
// let secondObject = new FirstClass("bMW", 2014);

// console.log(firstObject.newBrand);
firstObject.add()

// firstObject.add()
// secondObject.add()

// var variable1 = 23;

// let variable2 = 89;

// function catchValues(){
//   console.log(variable1);
//   console.log(variable2);

// // Both the variables can be accessed anywhere since they are declared in the global scope
// }
// catchValues();
// window.log(variable1);
// window.log(variable2); 


