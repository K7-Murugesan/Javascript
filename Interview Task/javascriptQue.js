
//convert single dimensional array to mutil dimensional array

// let arr = [1,2,3,4,5,6,7,8]

let newNmae = "12345"

// let arr1 = []
// let split = 4

// for (let i = 0; i < arr.length; i+=split) {
//   arr1.push( arr.slice( i, i+split  )  )
// }

// console.log( arr1 );

//------------XXXXXXXXXXX

let arr = [1,2,3,4,5,6,7,8]

var newArr = arr.reduce( (result,val,ind,arr)=>{
    if( ind%2 == 0 ){
        result.push(arr.slice( ind, ind+2 ))
    }
    return result
},[]  )

console.log( newArr );

//=================================================