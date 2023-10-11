function sample() 
        {
            //PARENT
            // let list1=document.querySelector("li");
            // console.log(list1.parentNode);
            // console.log(list1.parentElement); 
            // console.log(list1.parentNode);
            // let para = document.querySelector("p");
            // console.log( para.parentElement );


            //CHILD
            //  let orderlist=document.querySelector("ol");

            //  console.log( orderlist.nextElementSibling );

            // console.log(orderlist.childElementCount);
            // console.log(orderlist.childNodes);          //property
            // console.log(orderlist.children);
            //  console.log(orderlist.firstChild);
            //  console.log(orderlist.firstElementChild);
            //  console.log(orderlist.lastChild);
            //  console.log(orderlist.lastElementChild);
            
            //  console.log(orderlist.hasChildNodes()); // method
            //  console.log( document.querySelector("p").hasChildNodes()  );

            //SIBLING
            // let head = document.querySelector("h1");

            let hor = document.querySelector("hr")

            console.log( hor.nextSibling );
            console.log( hor.nextElementSibling );
            console.log( hor.previousSibling);
            console.log( hor.previousElementSibling );
           

            // let li1=document.querySelector("li");
            //  console.log(li1.nextSibling);
            //  console.log(li1.previousSibling);
            //  console.log(li1.nextElementSibling);
            // console.log(li1.previousElementSibling);
        }
       // sample(); ------>

    //     function fun(){
    //     console.log(this)
    //     }
    //     fun()

    // //    call method 

    // function welcome(){
    //     console.log("welcome:"+this.username)

    // }
  

    // const student={
    //     username:"ram"
    // }
    // welcome()
    // welcome.call(student)


    // function total(eng,mat){
    //     console.log(this.username+(eng+mat)+"marks")
    // }
//    total(25,65)
//     total.call(student,35,56)


//     let subjects=[25,35]
//     total.apply(student,subjects)

//     // bind 
//     const func=total.bind(student,85,95)
//     console.log(func)
//     func();
