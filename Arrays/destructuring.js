let array=["ram","sam","vasanth","ranjith"]
// let a1=array[0]
// let a2=array[1]
// let a3=array[2]
// let a4=array[3]
// console.log(a1)
// console.log(a2)
// console.log(a3)
// console.log(a4)

// let [a1,a2,a3,a4]=array
// console.log(a1)
// console.log(a2)
// console.log(a3)
//  console.log(a4)



//object desturing


// let person={
//     name:"java",
//     age:34,
//     city:"chennai",
//     number:579676456
// }
// console.log(person.name)
// console.log(person.age)
// console.log(person.city)
// console.log(person.number)

// let {name,age,city,number}=person
// console.log(name)
//  console.log(age)
//  console.log(city)
//  console.log(number)
//  console.log(person)


let arr = [1,2,3,4,5,6,7,8]  // ...array_name

let [a,b,c,d,...e] = arr

console.log( a,b,c,d );
console.log( e );


//==call by value
// let a =10;
// let b = a;

// a= 20;

// console.log( a , b );

//===call by refernce

// let arr  = [1,2,3,4]

//Spread Operator using array
// let arr1 = [...arr]

// arr.push(5,6)

// console.log( arr );
// console.log( arr1 );

//Spread Operator using object
let obj = {
    course: 'Java full stack',
    duration: '6 months',
    techInclues: ["html","css","js"]
}

let obj2 = {...obj}; 
obj2.techInclues = [...obj.techInclues] //Spread operator for nested referernce type

obj.duration = "4 months"
obj.techInclues[0] = "xml"

console.log( obj );
console.log( obj2 );
