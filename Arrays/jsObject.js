
// let arr = [[10,20,30],1,2,34]
// let arr2 = [...arr]

// arr.push( 10,20,30 )
// arr[0][0] = 15

// console.log( arr,arr2 );

// let obj = {
//   "first Name" : ["Java","Python"],
//   lastName : "Script",
//   "firstName":"AI",
//   secondValue : { a:20,b:30 }
// }
// console.log( obj.first Name  );
// let obj1 = { ...obj  }
// obj.secondValue.a = "Seven";
// obj.lastName = "Iot"
// console.log( obj,obj1 );

// obj['first Name'][0] = "TS"
// console.log( obj );
// console.log( obj["first Name"]);
// obj.language = "Interpreted Language"
// obj.firstName = "Python"

// obj["first Name"] = "PHP"

// // console.log( obj  );


// console.log( `My object is ${obj.lastName}`  ); //Template literal
/// ${variable} ------String Interpolation

// console.log(  `Hi this is ${obj["first Name"]}` );
// console.log( obj["first Name"] );


//MATH FUNCTION____________

// console.log(  Math.abs( (1.234)  )  );
// console.log( Math.sqrt( 625 )  );
// console.log( Math.cbrt( 27 )  );
// console.log( Math.pow( 6,3 )  );
// console.log( Math.sign( 0 )  );
// console.log( Math.PI  );
// console.log( parseInt (Math.random()*100) );
// console.log( Math.floor (Math.random()*100) );
// console.log(  (Math.max(1,23,4,5,6,6,7,78,9)) );
// console.log(  (Math.min(1,23,4,5,6,6,7,78,9)) );
// console.log(  Math.round( 1.99 )  );
// console.log(  Math.floor( 1.01 )  );
// console.log(  Math.ceil( 2.01 )  );
// console.log( Math.trunc( 2.99 ) );
// console.log( Math.sqrt (Math.ceil( 1.99 ))  );
// console.log(  Math.min( ...arr ) );

// let date = new Date();
// console.log( date.toString() );
// console.log( date.getMonth()  );



// function functionName(...a){

//         console.log( a[0]  );

// }
// functionName(1,2,3,4,5)


// var object = [
//     [ [1,6,7,8,9],3,4,5,6 ],
//     {
//         id: 1,
//         "staffName": "Murugesan",
//         role: "Trainer",
//         courses:{
//             frontEnd:["Kesavan","Jeeva","Ajith"],
//             backEnd:"Ramesh"
//         }
//     },
//     {
//         id: 2,
//         "staffName": "Jeeva",
//         role: "Trainer"
//     }
// ]

// console.log( object.role );
// console.log( object[0][0][2]  );

// let obj = { id:1, role:"compiling"  }

// obj.sourceConverter = "Interepreter";

// console.log( obj );

// let newObj = new Object();

// newObj.id = 1;
// newObj.course = "Front End";
// newObj.faculty = "Random"

// console.log( newObj.id );

//Shorthand Assigned Property

// var firstName = "Artificial"
// var secondName = "Intelligence"

// let obj = {
//     firstName:"Machine",
//     secondName
// }

// console.log(obj, obj.firstName, obj.secondName );

// let obj = {
//     "first Name": ["Java", "Python"],
//     lastName: "Script",
//     "firstName": "AI",
// }

// let onlyKeys = Object.keys(obj)
// let onlyValues = Object.values(obj)

// console.log( onlyKeys  );
// console.log(  onlyValues );


//CONSTRUCTOR FUNCTION==============================================

// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

// var person1 = new Person("Vivek", 76, "male");
// console.log(person1);

// var person2 = new Person("Courtney", 34, "female");
// console.log(person2.name);


// let obj1 = {
//     "first Name": ["Java", "Python"],
//     lastName: "Script",
//     "firstName": "AI",
// }
// console.log( obj1.firstName, obj1["first Name"] );

// let obj2 = new Object();
// obj2.id = 1

// let obj2 = Object.keys(obj1)
// let obj3 = Object.values(obj1)
// console.log(  obj3 );
// console.log( Boolean(null) );
// console.log( typeof([]) );

// let obj1 = {
//     lastName: "Interpreter"
// }
// let obj = {
//     firstName: function(a,b,c){
//         return( this.lastName + (a+b+c) );
//     }
// }
// obj.firstName.call(obj1,2,4,4)
// obj.firstName.apply(obj1,[2,4,4])

// let newObj = obj.firstName.bind(obj1,2,4,4)

// console.log( newObj()  );

// const person1 = {
//         name: "Java",
//         age: 70,
//     }
// console.log( Object.keys({name: "Java",age: 70,}) );
// console.log( Object.values(person1) );

// console.log( Number("1") + 1 );

// console.log( keyArray );

// const person2 = {
        
//         fName: function (first, second) {
//             return(this.name + this.age + first + second);
//         }
//     }

// console.log( person2.fName.call(person1,"James","Gosling") );
// console.log( person2.fName.apply(person1,["James","Gosling"]) );

// let objectBind = person2.fName.bind(person1,"Brendan", "Eich");

// console.log(  objectBind() );


// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const member = {
//     firstName:"Hege",
//     lastName: "Nilsen",
//   }
  
//   let fullName = person.fullName.bind(member);

//   console.log( fullName() );

// let arr = [1,2,3,4,5]
// let arr1 = arr.splice(-5,2)
// console.log( arr1, arr );


// var obj = {
//     "first id":1,
//     fName:"Mocha",
//     lName:"js"
// }
// console.log( obj["first id"] );

// let obj1 = new Object();
// obj1.newId = 1;

// console.log( obj1 );

// class NewClass{
//     constructor(){
//         console.log( "Im a constructor" );
//     }   
// }

// let newObject = new NewClass()

// let functionObject1 = {
//     fName : "javascript",
//     lName : "ECMAscript",
//     keyObj : {
//         id:1
//     }
// }
// let {fName,lName} = functionObject1
// console.log( fName, lName );

// let functionObject2 = {...functionObject1}

// functionObject1.fName = "mocha"
// functionObject1.keyObj.id = 3

// console.log( functionObject1, functionObject2 );

// let functionObject = {

//     newFunction : function(a,b){
//         return("Im a function"+(a+b)+ this.fName );
//     }
// }

// functionObject.newFunction.call(functionObject1,4,5)
// functionObject.newFunction.apply(functionObject1,[10,5])
// let bindObject = functionObject.newFunction.bind(functionObject1,15,5)


// console.log( bindObject()  );


let obj = {
     id : 1
}

// let newObj = Object.freeze(obj)


// const object1 = {  
//   a: 0,  
//   b: 1,  
//   c: 2,  
// };  
// console.log(Object.getOwnPropertyNames(object1));  
// obj.id = 2;

// console.log( obj.id );

// const object1 = {  
//   a: 0,  
//   b: 1,  
//   c: 2,  
// };  
// console.log(Object.getOwnPropertyNames(object1));  

// console.log( 10-"5" );
// console.log( "Ay"=="Ar" );

