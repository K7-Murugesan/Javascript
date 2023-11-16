
// let arr = [[10,20,30],1,2,34]
// let arr2 = [...arr]

// arr.push( 10,20,30 )
// arr[0][0] = 15

// console.log( arr,arr2 );

// let employee = {
//      "my id":1,
//      name:"js",
//      type:"dynamic"
// }  
// console.log( employee.id  );  //log( a,b,c  )
// console.log( employee["my id"]  );
// console.log( employee["name"] );
// console.log( employee["my id"]  );

// let newObj = new Object(); 
// newObj.id = 1;
// newObj.fName = "ES"
// newObj.lName = 'ECMA'

// console.log( newObj );


// class MyClass{

//      fName='1234';  //properties
//      lName;
//      constructor(fName,lName){
//           this.fName = fName;
//           this.lName = lName;
//      }
//      add(a,b){  //methods
//           console.log( `${a+b} Im a method ${this.fName} ${this.lName}`);
//      }
//      sub(){
//           this.add(2,3)
//      }
// }

// let firstObject = new MyClass("Mocha", "LiveScript")
// let secondObject = new MyClass("Mocha", "LiveScript")
// let obj2 = new MyClass("Mocha", "LiveScript")
// let obj3 = new MyClass("Mocha", "LiveScript")

// firstObject.sub()

// console.log(firstObject.fName);

//=============================================

/// Shorthand Assigned Property
// let id = 1
// let fName = "Kesavan"
// let lName = "murugesan"

// let employee = {
//      id,
//      fName,  
//      lName
// }

//===========================================

// let car = {
//      brand:"Kia",
//      prize:1500000,
//      year:2010
// }

// console.log( Object.keys(car)   );
// console.log( Object.values(car)   );
// console.log( Object.freeze(car)   );

// car.brand = "BMW";

// console.log( car );

//====================================================

//Function call,apply,bind

// let callObj = {
//      fName : "Bajaj",
//      lName : "Pulsar"
// }


// let obj = {
// fName : "Hero Honda",
// lName : "H2",
// newFunction : function(a,b){
//      console.log(( "HIi"+(a+b)+this.fName ));
// },
// duplicate: function(){
//      this.newFunction(4,5)
// }
// }
// console.log( obj.fName );

// let newVar = obj.newFunction.call(callObj,10,20)

// console.log( newVar  );

// obj.newFunction.apply(callObj,[10,20])


// let boundFunction = obj.newFunction.bind(callObj,10,20) 

// console.log( boundFunction() );


//================================================================


// Destructuring & Spread operator for Object 

// let obj = {
//      id:1,
//      fName:"kesavan",
//      l:"saasd",
//      nestObj:{ newId:1 },
//      nestArr:[1,23,,5]
// }
// let {id,...d} = obj   // Destructuring

// let obj1 = { ...obj }  // Spread Operator

// obj.id = 5;
// obj.nestObj.newId = 10
// obj.nestArr[0] = 20

// console.log( obj , obj1);

//===========================================================

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

//================================================================================

//MATH FUNCTION____________

// console.log( Math.abs(0)  );
// console.log(  Math.abs( (1.234)  )  );
// console.log( Math.sqrt( 625 )  );
// console.log( Math.cbrt( 27 )  );
// console.log( Math.pow( 3,3 )  );
// console.log( Math.sign( 4.34232 )  );
// console.log( Math.PI  );
// console.log( Math.floor (Math.random()*50)  );
// console.log( parseInt (Math.random()*100) );
// console.log( Math.floor (Math.random()*100) );
// let num = 100
// console.log(  (Math.max(num,1,23,4,5,6,6,7,78,9)) );
// console.log(  (Math.min(1,23,4,5,6,6,7,78,9)) );
// console.log(  Math.round( 1.99 )  );
// console.log(  Math.floor( 1.99 )  );

// console.log(  Math.ceil( 2.99)  );
// console.log( Math.trunc( 2.99 ) );
// console.log( Math.sqrt (Math.ceil( 1.99 ))  );

// let arr = [1,4,7,89,123]
// console.log(  Math.max( ...arr ) );

//========================================================================

//Date Function

// let date = new Date();
// console.log( date.getUTCDate() );

// console.log( date.toString() );
// console.log( date.getMonth()  );

//==================================================

// Call by Value & Call by Reference & Rest Paramter

// let a = 10, b =a ;  

// a = 20;       

// console.log( a , b );

// let arr = [1,2,3,45], arr1 = arr ;

// arr.pop();

// console.log( arr, arr1 );

// let newAr = [2,4,6,10], spArr=[...newAr]

// newAr.pop()

// console.log( newAr, spArr );

// Rest Paramter

// function functionName(...ab){

//         console.log( ab );

// }
// functionName(1,2,3,5)

//=============================================================

//Synchronous & asynchronous Execution

// console.log( "Step1" );
// setTimeout(()=>{
//      console.log( "Step2" );
// },2000) // 2s
// setTimeout(()=>{
//      console.log( "Step2" );
// },1000) // 2s
// console.log( "Step3" );

//==========================================

//Promise

// let myPromise = new Promise((resolve, reject)=>{
//      let val = parseInt (Math.random()*2)
//      if (val==0) {
//           resolve()
//      } else {
//           reject()
//      }
// })

// myPromise.then(()=>{ console.log( "Its head" ); })
// .catch(()=>{ console.log( "Its Tail" ); })

//===============================================================

// Fetch Method

// fetch("https://jsonplaceholder.typicode.com/posts" )
// .then((response)=>{
//      return response.json()
// })
// .then( (posts)=>{
//     posts.map( (val)=>{
//           console.log( val.id );
//     }  )
// } )
// .catch( (err)=>{
//      console.log( err );
// } )

//==============================================================================


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

let obj1 = {
    lastName: "Interpreter"
}

let obj = {
     lastName: "scripting",
    firstName: function(){
        return( this.lastName );
    }
}
// let newobj = obj.firstName.call(obj1)
let newobj = obj.firstName

console.log( newobj() );
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


// let obj = {
//      id : 1
// }

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

// function* myName(){
//      yield 'i am string'
//      yield 'hiiiii'
// }
// console.log(myName().return());

// var x = 23;

// (function () {
//      var x = 43;
//      (function random() {
//           x++;
//           console.log(x);
//           var x = 21;
//      })();
//      console.log(x);
// })();


// let hero = {
//      powerLevel: 99,
//      getPower() {
//           return this.powerLevel;
//      }
// }

// let getPower = hero.getPower;

// let hero2 = { powerLevel: 42 } ;
// console.log(getPower());
// console.log(getPower.apply(hero2));


