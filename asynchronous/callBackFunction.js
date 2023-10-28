// function fetchData(url, callback) {
//     // Simulate an asynchronous operation (e.g., a network request)
//     setTimeout(() => {
//       const data = "Some data from the server";
//       // Call the callback with the retrieved data
//       callback(data);
      
//     }, 1000);
//   }

//   function handleData(data) {
//     console.log("Data received:", data);
//   }

//   fetchData("https://example.com/api/data", handleData);


// function higher(num,acceptCallBack) {
//     acceptCallBack(30)
//     console.log( num  );
// }

// function callBack(a) {
//     console.log( a+" added" );
// }

// higher(12,callBack)


// let arr = [1,2,3,4,5,6,7,8,9,10]

// // let [a,b,c,d] = arr
// let [a,c,...num] = arr

// console.log( num );

// let obj = {
//     id:1,
//     fName:"Angular"
// }

// let {id,fName} = obj

// console.log( fName );

//====Spread Operator

// let arr = [[1,2],3,4]

// let arr1 = [...arr]

// arr.push(5)
// arr[0][0] = 11

// console.log( arr );
// console.log( arr1 );


// let obj = {
//     id:1,
//     fName:"Angular",
//     lName: "js",
//     features:{
//         first:"SPA",
//         pattern:"MVC"
//     }
// }
// obj.id = 2

// let obj1 = {...obj}

// obj.id = 10

// obj.features.pattern = "MVVC"

// console.log( obj );
// console.log( obj1 );


//===Rest Parameter
// function name(a,b,c,...d) {
//     console.log(d);
// }
// name(1,2,3,4,5,{},[6,7])

let a = 5;
let b = 10;

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log("After swapping:");
console.log("a =", a); // Output: 10
console.log("b =", b); // Output: 5
