// Promise has 3 states - waiting (or) pending, resolved (or) fulfilled, rejected
// let booking = new Promise((resolve,reject)=>{
//    let rand = Math.floor( Math.random()*2  )
//     if(rand==0)
//         resolve("Sucess");
//     else
//         reject("Failure")
// })
// booking.then( console.log)
// .catch( console.log)


// console.log( "Step 1" );
// setTimeout(()=>{
//     console.log( "Step 2" );
// },5000) 
// console.log( "Step 3" );


// let url = "https://jsonplaceholder.typicode.com/posts"

// fetch(url).then((response)=>{
//     if(response.ok){
//         return response.json()
//     }
//     else{
//         throw Error("Error:"+response.statusText)
//     }
// })
// .then((data)=>{
//    data.forEach( (val)=>{
//         console.log(  val.body  );
//    } )
// })
// .catch((err)=>{
//     console.log( err );
// })

// function sum(a,b){
//     console.log( a+b );
// }
// function product(sumOperation){ 
//     sumOperation(1,2)
// }
// product(sum)


// const ticketBook = new Promise((resolve, reject)=>{
//     let bookingSuccess = false;
//     if (bookingSuccess) {
//         resolve()
//     }
//     else reject()
// })
// ticketBook.then(()=> console.log( "Ticket Confirmed i'll tranfer the amount"  ))
// .catch(()=>console.log( "I will book another bus"  ))
// ticketBook.then(success)
// .catch(failure)

// function success() {
//     console.log( "Ticket Confirmed i'll tranfer the amount"  );
// }
// function failure() {
//     console.log( "I will book another bus"  );
// }

/////////////////------------------------------->>>>>>>>>>

// function ticket1Book(){

//         return new Promise((resolve, reject)=>{
//             let head = true;
//             if (head) {
//                 resolve()
//             }
//             else reject()
//         })

// }
// ticket1Book().then(()=> console.log( "Appointment letter is confimed "  ))
// .catch(()=>console.log( "Sonamutha Gone"  ))

// module.export = {
//     ticket1Book, ticketBook
// }

/////////////////------------------------------->>>>>>>>>>

// Example 1

// let pro = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let rand = Math.floor( Math.random()*2 )
//         if(rand==0 && (rand="Head")) {
            
//             resolve(`Its ${rand}`)
//         }
//         else if(rand="Tail") {
            
//             reject( `Its ${rand}` )
//         }
//     },1000)
// })
// pro.then(console.log).catch(console.log)

///============================================================

///async await

// async - always returns a pomise


// var a 

// console.log( a  );

// let arr = [1,2,3,4,"string0",[2,3]];

// let obj = {
//     id : 1,
//     name:"js"
// }


// Type Coercion

// console.log( "one "+ 2  );
// console.log( 2 + true );
// console.log( "js">"javascript"  );

console.log( 1 == "1" );
