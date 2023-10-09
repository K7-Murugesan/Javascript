function check() {
//     var name = document.getElementById("fullname").value
//    var dob = document.getElementById("dob").value 


//    dob = new Date(dob);  //converting string dob to date odject dob

//    var currentDate = new Date();   //creating current date
//    var age = currentDate.getFullYear() - dob.getFullYear();  //calculating age

//    var result = document.getElementById("result");
//    result.value = `${name} is ${age} years old`;
   // var para = document.getElementsByTagName("p").innerText
   // var para = document.querySelector("p");
   // var name = document.querySelector("input");
   // var y = name.value;
   // para.textContent=y;
   // var x = para.textContent;


   // var age = document.querySelector("#date");
   // console.log(age.value);
   //  //var age1 = age.value ;
   // //para.innerText = name.value;
   // //console.log(name);
   // console.log(x + " age is ");
   // let d1= new Date();
   // var d2 = d1.getFullYear() ;
   // //var d3 = d2-age1 ;

   // console.log(d2);
   // //console.log(p + " age is ")

   const element = document.getElementById("example");
   const computedStyle = window.getComputedStyle(element);
//    console.log( window.getComputedStyle(element) );

   console.log(computedStyle.fontFamily);
   

}