// Exception Handling

let a = prompt("Enter a number");

try{
    if(a=='' || isNaN(a)){
        throw "Enter a valid number"
    }
    alert( a*2 );
}
catch(error){
    alert( error );
    a = prompt("Enter a number")
    alert( a*2 );
}
finally{
    alert( "Bye" );
}
// let num = "";
// try{
//     if(num==''){throw "Cannot be empty"}
//     if(isNaN(num)){
//         throw "Enter a vaild number"
//     }
//     console.log( num**3 )
// }
// catch(error){
//     console.log( error );
// }
// finally{
//     console.log( "Bye" );
// }



function sortArray( arr  ){
    
}
sortArray([5,7,3,4,1,2,6])