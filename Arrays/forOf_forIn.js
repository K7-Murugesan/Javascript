
//for of loop is generally used to iterate array,,,it will not work for object
//for in loop - for both array & object
var studentMarks = [{name: "Kesavan" , marks : 450},
                    {name: "Shailesh" , marks : 470},
                    {name: "Ganapathi" , marks : 475},
                    {name: "Anil Bhat" , marks : 480}
                   ];
// for (const val of studentMarks) 
// {
//     console.log(val.name, val.marks);
// }
// for (const i in studentMarks) 
// {
//     if(i<2){
//         console.log( studentMarks[i] );
//     }
// }


// for (let index = 0; index < s1.length; index++) {
//     console.log( s1[index] );
    
// }
var id = 1
var newName = "123"
var obj = { id, newName  }

// console.log( obj.marks );

for (let key in obj) {
        console.log( key, obj[key] );
    }
    // for (const key in obj) {
    //         console.log(obj[key]);
    //     }
        // var s1 = [10,20,30,40,50]
        // for (const key in s1) {
        //     console.log( s1[key] );
        // }
// for (const key in s1) {
//     console.log(s1[key]);
// }

// var s2 = { name:"123", id:1, second:"second"  }
// for (const key of s2) {
//     console.log(key); //it will not work
// }
// for (const key in s2) {
//     console.log(s2[key]);
// }



// var a = [{name:10 , age:20},2,3,4,5];

// for (const key in a) {
// //    console.log(a[key]);
//    console.log(a[key]);
// }


// var b =[{name:10 , age:20},6,3,4,5];
// for (const element of b) 
// {
//     console.log( element.name );
//     // console.log(element);
// }

// var arr = [{ product: "TV", no: 20 },
// { product: "AC", no: 20 },
// { product: "TV", no: 50 },
// { product: "AC", no: 120 },
// { product: "FM", no: 10 },
// { product: "FM", no: 150 },
// { product: "EAR-BUDS", no: 150 }
// ];

// for (const key in arr) {
//     console.log( arr[key].no );
// }


// let arr = [0,3,50,55,58,84,14,2,90]

// arr.sort((a,b)=>b-a);

// console.log( arr );