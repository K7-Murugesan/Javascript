// Promise has 3 states - waiting (or) pending, resolved (or) fulfilled, rejected

const ticketBook = new Promise((resolve, reject)=>{
    let bookingSuccess = false;
    if (bookingSuccess) {
        resolve()
    }
    else reject()
})
ticketBook.then(success)
.catch(failure)
// ticketBook.then(()=> console.log( "Ticket Confirmed i'll tranfer the amount"  ))
// .catch(()=>console.log( "I will book another bus"  ))

function success() {
    console.log( "Ticket Confirmed i'll tranfer the amount"  );
}
function failure() {
    console.log( "I will book another bus"  );
}

/////////////////------------------------------->>>>>>>>>>

function ticket1Book(){

        return new Promise((resolve, reject)=>{
            let head = true;
            if (head) {
                resolve()
            }
            else reject()
        })

}
ticket1Book().then(()=> console.log( "Appointment letter is confimed "  ))
.catch(()=>console.log( "Sonamutha Gone"  ))

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



