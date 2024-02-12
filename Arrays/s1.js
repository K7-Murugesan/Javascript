// var a="java";
// var b="script";
// console.log(a+b)

// console.log((("AB"+"33") - 3))

// var a;
// console.log( a );

// abc()
// let a = 10;

// console.log( a );

// function abc(){
//     console.log("asdas");
// }


// function add(a){
//      return function (b) {
//         console.log( a+b );
//     }
// } 

// let add1 = add(2) // function (b) {console.log( a+b ); }

// add1(3);

// add(10)(20);

// function hof(acceptCallBack){
//     console.log( "im higher order function" );
//     acceptCallBack(10,20) 
// }

// function cbf(a,b){
//     console.log( "call back "+ (a+b) );
// }

// hof( cbf  )

// let a = [101,[102,[103,2,3]],[104,102],[1,3,4],[2,3,4]]

// console.log( a.includes(101,-5) );

// console.log( a.flat(Infinity) );

// console.log( a.lastIndexOf( 102,3) );

// #1500 , 1508, 1516, 

// base address + ( index * value )
// 1500 + ( 0 * 8 )


// console.log( a.fill(23,2,4) );

// let b = [1,2,3,4,5,6]
// b.splice( 1,0,(45,46,47),(23,24) )

// console.log (  b )

// console.log( b.slice( 0, 5 ) );

// console.log( b );

let b = [0,1,2,3,4,5,6]

// let c = b.map((val,ind,arr)=>{
//     console.log( val>ind ); 
// })
// let d = b.filter((val,ind,arr)=>{ // let val = 1;  val=0;
//     // console.log( val ); 
//     return val=0
// })

// console.log( d );

let c = [10,20,30]

let newval = c.reduce( (a,b)=>{
    return a / b 
} )

console.log( newval );

// console.log( c );


// function functionName(a,b){
//     let name = 'xyz'
//     let newFun =  () => {
//         console.log( name );
//     }
//     newFun();

// }
// functionName()

// let arr = [ 0,2,1,21,13,12,31,20,45,52,34 ]

// let arr1 = [10,20,3]
// console.log( typeof (arr1.toString("*")) );

// let arr2 =[ ...arr, ...arr1 ]

// console.log( arr2 );

// console.log( arr.sort( (a,b)=>b-a ) )

// let [x,y,z,...p] = arr

// console.log( x,z);

let obj = { id:1, emName:"xyz" }

// let {id, emName} = obj

let obj2 = {
    ...obj,
    id:3,
}

// console.log( obj2 );

let arrOfObj = [
    { id:1, emName:"xyz" },
    { id:2, emName:"pqr" },
    { id:3, emName:"abc" },
    { id:4, emName:"tuv" },
]

let arrOf2 = [
    ...arrOfObj
]

// arrOfObj[0].emName = "hii";

// console.log( arrOfObj);
// console.log( arrOf2 );

// console.log( id, emName );

let name = "Pavan";
let course = 'FE'

let employeeDetails = {  // shorthand assigned property
    name, course
}

console.log( employeeDetails.name, employeeDetails.course );

let newobj = {
    "new id" : 1,
    name: "123"
}

Object.freeze( newobj )

newobj["new id"] = 3;

console.log( newobj );

console.log( Object.values( newobj ) );


let objFun = {
    add(a,b){
        console.log( "Inside Object "+(a+b) + this["name"] );
        return "helloo" 
    }
}

let callObj =  objFun.add.call( newobj,10,20 )
let applyObj =  objFun.add.apply( newobj,[100,50] )

let bindObj =  objFun.add.bind( newobj,3,7 )

console.log(bindObj());
console.log( "-------------------" );
console.log(callObj);
console.log(applyObj);

