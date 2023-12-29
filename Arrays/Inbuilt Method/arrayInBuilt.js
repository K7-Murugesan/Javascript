
// for (let index = 0; index < 10; index++) {
//     console.log( index );
// }
// for (index = 15; index < 20; index++) {
// }
// console.log( index ); 
// for (const index = 0; index < 10; index++) {
//     console.log( index ); 
// }


// let arr = [ 1,2,3,4,2 ]

// for (let index = 0; index < arr.length; index++) {
//     console.log( arr[index] );
    
// }

// //pop method
// let a=[1,[2,4,5,6,7,8],3,4,5];
// console.log( a.pop() );
// console.log( a );
// console.log( a.pop() );
// console.log(a);

// var b =[19,10,20,30]

// var c = [ ...a,...b ] // spread operator
//  let [one,two,...restVariable ] = a  //Destructuring & rest operator

//   console.log( restVariable)
//   console.log( c );


//push method
// var b=[1,2,3,4,5];
// b.push(6,7,8,"one",{id:1}, [10,20,20]);
// console.log(b);

//shift method
// var c=[1,2,3,4,5]
// c.shift()
// console.log(c.shift());
// console.log(c);

//unshift method
// var d =[ 1,2,3,4,5];
//   d.unshift(12,"12",3,-1,-10) 
//   d.push(6,7,8);
//   console.log( d );
// console.log(d);

//includes method
//  var a1 =[1,2,3,4,5];

//  console.log( a1.includes( 6 ) );
//  console.log(a1.includes(3)); 

//indexOf

// var a = [10,30,20,30,40,30,50]

// console.log( a.indexOf(30)  );
// console.log( a.indexOf(30,4)  );

// console.log( a.lastIndexOf( 30)  );
// console.log( a.lastIndexOf( 30,4 )  );

//indexOf method - is used to get the index value is present or not  and it occurs first repeated value.
// var a =[1,2,3,2,8,[4,8,[5,3,8, [1,2,3,4, [ 4,5,6,7,8 ]]]]];
// var a = [30,10,20,30,40,30,50,30];
// console.log( a.indexOf(30,3)  );
// console.log( a.lastIndexOf(30,2)  );



// let b = a.indexOf(30,5);
//      ( element,index starts search from left to right )
// console.log(b); //if value is not  present it return -1
// //lastIndexOf- is used to check the index value is present or not ^ it occurs last repeated values
// console.log( a.lastIndexOf(30,5) );
/////      ( element,index starts search from right to left )

//flat method

    // let arr = [1,2,[3,4,5],6,7,[1,[2,[3],4],5] ]
    // let flattedArray = arr.flat(Infinity)
    // // console.log( arr  );
    // console.log( flattedArray );

// var a =[1,2,3,2,8,[4,[2,3],[ 3,4,5,6,[7,8,10,[123,12,1213]] ]]];

// let arr = [1,2,[3,[4,1,[2,3,4,55],6],7,8, [1,23,4,5,6]]]

// let arr1 = arr.flat(Infinity)

// console.log( arr1 );

// var a = [1,2,3,[4,5,[12,34],56,6], [4,5,6,7,8]]
// //  var b = a.flat( Infinity );
// console.log( a.flat(Infinity) );


// var newArr = []

// for (let index = b1.length-1; index >= 0 ; index--) {
    
    //     newArr.push( b1[index] )
    // }
    // console.log( newArr );
    
//reverse method    
//     var b1=[1,2,3,4,5]
// b1.reverse();
// console.log(b1);


// // sort method

// let arr = ["."," ",10,2,5,20,3,1,115,11,55,6,4]
// arr.sort();
// console.log( arr );

// console.log( "apple">1 );
// console.log( 1 > "a" );

// var a2 = [1,3,5,2,4,6,9,";",0,11,21,13,25,235, 236,85,87,8,95,91," ", "!", "|"]

// a2.sort();  //ASCCI value- unicode

// console.log( a2 );

// var a2 = ["-",";","cat","Apple","Bat","Desk","Donkey"]
// a2.sort();
// var a3= [";"," ","!",-1,0.134,"+1",-2,1,0,2,5,4,7,6,56,101,121,34,74,57,1198]
// a3.sort();
// console.log(a3);
// console.log(a2 );

// var a3=[2,3,4,5,1,6,123,455,65,566,7676,45]
// a3.sort(function(a,b){return b-a}) //Descending Order
// console.log(a3);

// var a4=[2,3,4,5,1,6]
// a4.sort((a,b)=>{return a-b}) //Asscending Order
// console.log(a4);

////--------------------------------------------------------------------


///SLICE METHOD

// var sliceArr = [11,10,23,22,35,33,45,44];
// var newArr = sliceArr.slice()
// var newArr = sliceArr.slice(3)
// var newArr1 = sliceArr.slice(3,6)
// //                     slice(start,end-1)
// //                     slice( 3, 6-1 )
// console.log( newArr );
// console.log( newArr1 );


//        [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1]
// let arr = [10,20,30,40,50,60,70,80,90,10]

// console.log(  arr.slice(-6,-2)  ); 
// console.log( arr );
// //slice(start,end-1)
//        ( 0, 3-1 = 2  )
// let arr2 = arr.slice(3,8);
// let arr2 = arr.slice(3,7);
// console.log(arr, arr2  );

//========Splice Method-add,delete,replace

// let arr = [11,21,31,41,51,61,71,81,91,101]

//splice(start,count) 
// //splice(start,count,replacing elements)
// let newArr = arr.splice(-3,1,30);
// let newArr = arr.splice(6,0,(10,20,30),(121,134,123));

// console.log( arr );
// console.log( newArr );

// arr.splice(5,0,(11,12,13,22,23),101,102)

// console.log( arr  );

// arr.splice(3,3,10,20,30,"123",[1,2,3],{id:1})
// arr.splice(3,0,10,20,30,"123",[1,2,3],{id:1})

// console.log( arr );

//splice(start,count) 
// //splice(start,count,replacing elements)

// let arr2 = arr.splice(2)
// let arr2 = arr.splice(2,5)
// let arr2 = arr.splice(2,5,15,16,'seven',true,undefined)
// let arr2 = arr.splice(2,0,15,16,'seven',true,undefined)
// console.log( arr2 );

// console.log(  arr);



///========Fill method

//index-[-10,-9,-8,-7,-6,-5,-4,-3,-2,-1]
// let arr = [1,2,3,4,5,6,11,8,9,10]

// arr.fill(21, -3,-1  )
//fill(value,start,end-1)
//      (21, -3,(-1-1))
//      (21, -3,-2)

// console.log( arr );


// console.log( arr );

// arr.fill(21,3,7);
// console.log( arr );
// arr.fill(21,3);
// arr.fill(21,3,7);

// console.log(  arr );

//====================================================

//=====Concat method

// let ConArr = [1,2,3,4,5,6,11,8,9,10]
// let concat2 = [{person:2}]
// // let arr1 = ConArr;
// var arr1 = ConArr.concat()
// var arr1 = [].concat( ConArr )

// ConArr.push([33,44,55])
// // let arr1 = arr.concat(12,13,23,45,67,89);
// console.log( ConArr );
// console.log( arr1 );

//=====forEach method

// let arrOfObj = [ 
//     {id:1, employeeName: 'Shailesh' },
//     {id:2, employeeName: 'Anil' },
//     {id:3, employeeName: 'Mukesh' },
//     {id:4, employeeName: 'Chandru' }
//  ]
//  let newVariable = arrOfObj.forEach( function(val){
//      console.log( val.id>1   );
//  } )   

//===Map method

let arrOfObj = [ 
    {id:1, employeeName: 'Shailesh' },
    {id:2, employeeName: 'Anil' },
    {id:3, employeeName: 'Mukesh' },
    {id:4, employeeName: 'Chandru' }
 ]

arrOfObj.forEach( function(val,i,arr){

} )

let newArr = arrOfObj.map( (val,i,arr) => {
    console.log( val ); //It will print a value same like forEach, for, forOf, forIn
    return val //  returns a value and pushed to new array
} )
// let newArr = arrOfObj.map( (val,i,arr) => i )

// console.log( newArr );
 
//=======================================================

//filter method

// let arrOfObj = [ 
//     {id:1, employeeName: 'Shailesh' },
//     {id:2, employeeName: 'Anil' },
//     {id:3, employeeName: 'Mukesh' },
//     {id:4, employeeName: 'Chandru' }
//  ]

// let filteredArr = arrOfObj.filter( (val,index,arr)=>{
//     console.log( val );
//     return val.id>1
// } )
// let filteredArr = arrOfObj.filter( (val,i,arr)=> val.id )
// console.log( filteredArr );
// console.log( arrOfObj );


//====Find method

// let arrOfObj = [ 
//     {id:1, employeeName: 'Shailesh' },
//     {id:2, employeeName: 'Anil' },
//     {id:3, employeeName: 'Mukesh' }, 
//     {id:4, employeeName: 'Chandru' },
//     {id:5, employeeName: 'Kesavan' },
// ]
// // let findSingleVal = arrOfObj.find( (val,i,arr)=> val.id>1 )
// let findSingleVal = arrOfObj.find( (val,i,arr)=> {
//     console.log( val );
//     return val.id>3
// })
// console.log( findSingleVal );


//==========================================================================

//====Reduce Method
// let sum = 0; 
// for (let i = 1; i <= 10; i++) {
//    sum +=i 
// }
 
// let proArr = [1,2,3,4]
// let product = 1;
// for (let i = 0; i<proArr.length; i++) {
//    product *=proArr[i] 
// }
// console.log( sum );
// console.log( product );

// let arr = [10,20,30,40]

// let newVal = arr.reduce((prev,current)=>{
//     return prev*current ; 
// },1)

// console.log( newVal );

// Some method & Every method

// let arr = [10,20,30,40]

// let someArr = arr.some((val,ind,arr)=>{
//     return val>30
// })
// let everyArr = arr.every((val,ind,arr)=>{
//     return val>5
// })

// console.log( someArr , everyArr);


//==Sort method

let a = [2,1,33,11,22,4,3,44]

a.sort((a,b)=> a-b ) // asscending 
console.log( a );

a.sort((a,b)=> b-a ) // descending 
console.log( a );




/////////////////XXXXXXXXXXXXXXXXXXXXXX//////////////////////////


// let arr2 = [10,20,3,56,67]

// let keysInArr = arr2.keys();


// let arr3 = arr.concat(arr2)
// console.log( arr3 );
// let arr3 =  arr.concat(1,2,3,4,55,)
// let arr3 =  [].concat(arr)
// console.log( arr3 );

////----------------------------------------------------------

// //slice(start,end-1)
//        ( 0, 3-1 = 2  )
// var b2= [6,7,8,9,10,11,12]
//  var b1 = b2.slice(2);
// console.log(  ); 
// console.log(b1,b2); 
// console.log(b2.slice());  //It remains same 
// console.log(b2.slice(2)); //

// console.log(b2.slice(1,3)); //It will get the input from starting position of index 1 to
//ending position of index 3(index position)-1

// //SPLICE METHOD-we can add,delete and replace.

// var b2= [6,7,8,9,10,11,12]
//  var b1 = b2.slice(2);
//  console.log(b1,b2); 
// //splice(start,count) 
// //splice(start,count,elements)
// var b3=[10,20,30,40,50,60];
// console.log( b3.splice() )
// var b =  b3.splice(2,2,15,16,"seventeen");
// var b =  b3.splice(2,2,15,16,"seventeen");
// console.log( b3 );
//   b3.splice(2)  //deleting the element
// console.log(b3);
// b3.splice(1,4)    //deleting the element 
// console.log(b3);
//   b3.splice( 1,5,70,80,90,100 )
//   b3.splice( 1,0,70,80,"js",undefined,null )
// b3.splice(b3[b3.length-1],0,15,16,17,18) //replcing the element //First Values takes as index position and second value will delete the 
// console.log(b3)         //number of elements from  mentioned index position and third values used to replace the element
// // b3.splice(2)          //using this we can add the valuse before the index position we mentioned
// // console.log(b3)      //and also we can add it in first,middle & last element.

// b3.splice(2,0,15,16,17) // to add elements

// //FILL METHOD

// // fill(values)
// // fill(value,start,end-1)

// var b4=[10,22,33,44,55]//Using this method, Using single values we can replace  all the elements
//  console.log( b4.fill( 21 )  ); 
// console.log( b4.fill( 21, 3 ) );
//  console.log( b4.fill( 21, 0,2  )  );

// var b4=["10",22,33,44,55]
// console.log( b4.join() );

// let obj = {
//     "my name":"Kesavan",
//     id:1,
//     place:"Chennai"
// }
// console.log( obj[ "my name" ] );



// function newF(acceptCallBack){ // parameter
//     console.log("Im Higher order Function");
// }
// function $Name() {
//     console.log( "Nested call back" );
// }
// function leastF() {
//     console.log("Im call back");
// }
// newF( leastF( $Name( leastF() ) ) ); //argument

// var arr = [1,2,3,4,5];

// var arr1 = [...arr]
// arr.push( 10,20,30 )
// console.log( arr  );
// console.log( arr1 );


// var [ a,b,...c ] = arr;
// var arr2 = [ ...arr, ...arr1  ]
// console.log( arr2 );
// console.log( a,b,c );

// var fName = "js";
// var sName ='ECMA'

// var a =5;
// var b = 1

// var c = a+" X "+b+
// " = "+
// (a*b)
// var str  = `Good 
// afternoon`;

// console.log( c );


// console.log( `myN
// M`   );

// // console.log( a+" X "+b+" = "+(a*b) );



// console.log( `${a} X ${b} = ${a*b}`  ); //======> Template Literal
//Template Literal/String ------->  `string ${a} string ${b}`

// console.log(  fName + " is handed over to "  + sName  );


//SORT METHOD

//  var c1 = [ "apple","banana",'Orange',"Strawberry","Aeroplane"  ]
//  console.log( c1.sort() ); // Element sorted in ASCII order

// var c1= [5,2,4,3,1,6,10,12,34] ;
// console.log(  c1.sort((a, b) => a - b) ); //ascending
// console.log(  c1.sort((a, b) => b - a) ); //descending


// var arr = [10,20,30,40,50]

// console.log( arr.length );

// for(i=0; i<arr.length; i++){
//     console.log( arr[i]  );
// }

// for( val of arr  ){
//     console.log( val );
// }

// function abc(){
//     return "123"
//     // console.log( "123" );
// }
// // console.log(abc())
// let b = abc()

// console.log( b );

//FOR EACH METHOD

// let arr = [10,20,30,40,50];
// let product =1;
// arr.forEach( function(a){
//     product*=a;
//     // console.log( sum ); // sum=0 ===> sum = 0+ 10 ==> sum = 150
// } )
// console.log( product );

// let arr1 = arr.forEach( (a,b,c)=>{
//     return( c[b]*4 );
// }  )   // Return type is not possible in for each

// console.log( arr1 );


//Map Method

// let arr = [1,2,3,4,5,6]

// let arr2 = arr.map(  (val)=>{  // let var
//     return( val*4  );
// }  )
// let arr2 = arr.map(  (val)=>{  // let var
//     console.log( val*4  );
// }  )

// console.log( arr2 );

// for (const i = 0; i < c1.length; ++i) 
// {
//     console.log( i);   
// }

// var a = 10;
// var b = 20;

// a = a++ + ++a + b++ + ++b

// console.log( a );
// console.log( b );

// var c1 = [10,20,30,40,50]
//     let pro = 1;
//     var c2 = c1.forEach( function(val,ind,arr){
//             pro=pro*val
//             // return( arr );
// }  )
// console.log(pro);
//   let c2 =  c1.forEach( function(val,ind){
//             console.log( val*5 );
// }  )
// console.log( c2 );
// let c2 = c1.forEach( function(val,ind,arr){
//     console.log( val );
// }  )

// console.log( c2 );

// let c1 = [1,2,3,4,5,6]
// let c2 = c1.forEach(   (a,b,c)=>{ console.log( a,b,c )}   )
// console.log( c2 );

// for (const a of c1) {
//     console.log( a );
// }

// let sum = 0;
// c1.forEach(   (a)=>{ sum = sum+a  }   )
// console.log( sum);

// let c3 = c1.forEach( (val)=>{ return val}  )
// console.log( c3 );

//Map method

// function functionName(){
//     return "Hellooooo"
// }
// let a = functionName()
// console.log( a );

// var c1 = [1,3,4,5,6,7]

// console.log(  c1.map( function(a,b,c){return( a>1 );} )  ) 

// console.log( c2 );

//     let c2 = c1.map( val=> {return val*2 }  )
//    console.log( c2 );
//     let c3 = c1.map( (val)=>{ return val===0}  )
// console.log( c3 );
// let c2 =  c1.map( (val)=>{ if (val%2==1) {
//     return val
// }   }   )
// console.log( c2 );

//filter

// let val = [ 25000,5000,60000,75000,100000,50000,80000 ]
// let val1= val.filter( (a,i,arr)=>{  return( a>=50000 );   } )

// console.log( val1 );

// // // let val1= val.filter( (a)=>{  return( a/0  );   } )
// // // // let val1= val.filter( (a)=>{  return( a=0  );   } )
// console.log( val1 );
// console.log( Boolean(Infinity) );

//Find

// let val3 = [ 50,0,300,301,302,0  ]
// let val2 = val3.find(  (a)=>{ return a>50  } )
// // // let val1 = val.find(  (a)=>{ return a=1  } )
// console.log(  val2 );

//Reduce method

// let val = [ 100,20,300,301,302,20 ]
            // 100+20 = 120
            //  120+300 = 420
            // 420+301 = 721
            // 721+302 = 1023
            //1023+20 = 1043
            // let sum = val.reduce( (pre,cur)=>{ return pre*cur  },5 )
// let sum = val.reduce(function(first,second){
//     return(first+second); 
// })
// console.log( sum );


//Some & Every method


// for (let index = 0; index < val.length; index++) {
    
    //     if ( val[index]%2!= 0) {
        
        //         console.log(val[index]);
        //     }
        
        // }
//         let val = [ 2,4,6,8,10  ]
// // let val1 = val.every(  (a)=>{ return   }  )
// let val1 = val.every(  (a)=>{ return a%2==0 }  )
// // let val2 = val.every(  (a)=>{ return a>=0 }  )
// // // let val2 = val.every(  (a)=>{ return a%2==0 }  )
// console.log( val1 );

//vanilla Javascript
//Sort Method

// let arr = [1,3,6,4,7,2,13,10,25,20]

// // arr.sort( (first,second)=>{ return first-second }  )  // a<b
// arr.sort( (a,b)=>{ return b-a }  )  // a<b

// console.log( arr );

//Destructuring & spread operator
//Extracting each elements and stored in seperate variable

// let arr = [[1,3,4,5],6,7,8,9,10]
// let [a,b,c,...d] = arr
// console.log( d[1] );

// let arr1 = [...arr]
// arr.pop()
// arr[0][1]=45
// console.log( arr );
// console.log( arr1 );

//Rest Parameter

// function functionName(b,...a){
//     console.log( a  );
// }
// functionName(1,2,3,4,5,6,7,8)

// var c1= [1,2,3,4,5] ;

// var c2 =   c1.forEach( (val,ind,arr)=>{  
//     console.log (val,ind,arr)
// }  )



// var arrOfObj = [{ product: "TV", no: 20 },
// { product: "AC", no: 20 },
// { product: "TV", no: 50 },
// { product: "AC", no: 120 },
// { product: "FM", no: 10 },
// { product: "FM", no: 150 },
// { product: "EAR-BUDS", no: 150 }
// ]

// let newObj = arrOfObj.map((val)=>{
//     let prop = val.product
//     let value = val.no
//     return { product:value }                                                                                                                                                   
// })

// console.log( newObj );

// arrOfObj.forEach( function(val,ind,arr){  
//         console.log (val.product,val.no)
//     }  )

// console.log( c1 );

// c1.forEach((y,x,z)=>{console.log(y,x,z);})

// var c2=[1,2,3,4,5];
// var sum=0;
//  c2.forEach(val=>{ sum = sum+val});
// console.log(sum);
// c2.forEach(val=>console.log(val+3));
// var c3=[1,2,3,4,5];
// c3.push(6);

// var product=1; 
// c3.forEach(val1=>{ product = product*val1});

// console.log(product);
//-------------------------------------------------------------->

//MAP METHOD
// var a = [1,2,3,4,5,6,7]

//  var a1 =  a.map( (val)=>{
//     return(val>1)
// }  )
// console.log( a1 );
// console.log( b );
// var a1 = a.map((v)=>{return parseInt(v/3)});  //this method is used to do some operation on array elements
// console.log(a1);
// var c = a.map((v)=>{return v*2});
// console.log(c);
// var d = a.map((v)=>{return v%2==1});
// console.log(d);


//FILTER METHOD

// var a = [1,2,3,4,5,6,7]
//   var b = a.map((element) => {
//         console.log( element);
//     }); 
// console.log(b);

//  var b = a.filter((v)=>{return v%2!=0});   
// console.log(b);
// // var c = a.filter((v)=>{return v%2==1});
// // console.log(c);
// var d = a.filter((v)=>{return v+5});
// console.log(d);


//FIND METHOD

// var b = [1,2,3,4,5,6,7]

// var c = b.find((v)=>{return v-1});
// console.log(c);  //it will return the first value which safisfies the condition

//   FILTER METHOD
// var a = [1,2,3,4,5,6,7]

// var b = a.filter( (val)=>{
//     return val%2==1
// } )

// console.log( b );

// var studentMarks = [{name: "Kesavan" , marks : 450},
//                     {name: "Shailesh" , marks : 470},
//                     {name: "Ganapathi" , marks : 475},
//                     {name: "Anil Bhat" , marks : 480}
//                    ];
//val = { }
// var filterStudents = studentMarks.filter((val)=>{ return val.marks>460});
//                 console.log(filterStudents);
// var filterStudents = studentMarks.forEach((val)=>{ console.log(val);});

//  var addingExtraMark = studentMarks.map((val)=>{ return( val.marks + 10 );});


// console.log(addingExtraMark);





//REDUCE METHOD

// let number = [ -2,-1,1 ];

// let add = number.reduce( (first,second)=>{
//     return  (first-second);

// }  )
// console.log( add );
// let SOME = number.some( (val)=>{
//     return  (val>0);

// }  )
// let SOME = number.every( (val)=>{
//     return  (val>0);

// }  )
// console.log( SOME );

//SOME METHOD


//SET METHOD

//PAF to remove dupliate elements......


// var arr = [{brand:"Hp",model:1234,price:1000},
// {brand:"Hp",model:1234,price:1000}]
// var arr=[1,2,3,4,5,6,5,4,3,2,4,6];
// function removeDuplicate(arr)
// {
//    let arr1 =  [...new Set(arr)];
//    console.log( arr1 ); //it will delete the repeated elements and set a new array
// }
// removeDuplicate(arr);
// console.log( arr );

// var arr=[1,2,3,4,5,6,5,4,3,2,4,6];

// var arr1 = arr.filter( ( val,ind )=>{
//     return ( arr.indexOf(val)==ind  )
// }  )
// console.log( arr1 );

// TO STRING METHOD

// var arr = [1,2,3,"KEsavan",true,null,undefined]
// var arr1 = "Angular"
// // console.log(arr.toString("-"));
// console.group( arr.join(arr1) );





// var arr = [1,2,3,4,5,6,10] ;

// var arr1 = arr.find( (val,ind,a)=>{
//     console.log(val);
// })

// console.log(arr1);

// setTimeout(function(){console.log("Hello")},5000)
// console.log( "Im waiting" );

//UNDERSTAND VAR VS LET VS CONST ---> BLOCK & FUNCTION SCOPE


// function x() 
// {
//     for (let i = 0; i <=5 ; i++) 
//     {
//         // console.log(i);
//     }
//     console.log(i);
// }
// x();



// console.log("--------");

// console.log("--------------");


//Destructuring

// arr.push(5,6,7 )
// var arr2 = [ ...arr, ...arr1 ]

// var arr = [1,2,3,4,5]

// var arr2 = [...arr];
// arr.push(5,6,7)
// console.log( arr );
// console.log( arr2 );

// var arr3 = [ ...arr, ...arr2 ]
// console.log( arr3 );
// console.log( arr,arr2 );
// var [ a,b,...c ] = arr;
// console.log( a,b,c );

// console.log( arr2  );
// console.log( arr );


// var [ a,b,...c  ] = arr;
// var arr1 = [7,8,9]
// var arr = [1, 2, 3, 4, 5, 6];

// console.log( c );
// var arr1 = [ ...arr ] ;

// arr.push(7,10,14);

// console.log( arr );
// console.log( arr1 );


// Slice method

// let arr = [20,10,40,50,60,70]

// let arr2 = arr.slice();
// let arr2 = arr.slice(2);
// let arr2 = arr.slice(2,5);
//                 (start, end-1)

// console.log( arr, arr2 );

// Splice method


//  arr.splice(2)
//  arr.splice(2,2)
///      (start, count)
//  arr.splice(2,2,(15,20,22),(16),(18),(20))
// arr.splice(2,0,(15,20,22),(16),(18),(20))
// console.log( arr  );

// let arr2 = arr.fill( 21,2 ) ;
// let arr2 = arr.fill( 21,2,4 ) ;

// console.log( arr2 );


// let arr = [20,10,40,50,60,70]

// let arr2 = [101,1010,102,103]

// // let arr1 = arr.concat(arr2 )
// let arr1 = [].concat(arr)

// console.log( arr1 );



// let arr = [ 1,2,3,4,5, { name:[ {id:1, key:"array"},{id:2, key:"object"}  ] }   ]

// let arr1 = JSON.parse (JSON.stringify(arr) )

// console.log( arr, arr1 );


// arr[5].name[0].id = 5;

// console.log( arr[5], arr1[5] );


// let obj =  {
//     postId: 1,
//     id: 1,
//     name: "id labore ex et quam laborum",
//     email: "Eliseo@gardner.biz",
//     body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//   }  

// let obj2 = obj


// obj.id=2;

// console.log( obj,obj2 )


// // console.log(  arr.indexOf ( 11,3 )  );
// console.log(  arr.lastIndexOf ( 56,20 )  );

// let [ a,b,c,d,e,...c1]  = arr
// let arr = [ 10,11,39,40,56,[24,11,40,56] ]

// let arr1 = [...arr];

// // arr.push(1010,123,12231)
// arr.shift();
// arr[arr.length-1][0]=10

// console.log( arr, arr1 );   


// obj.secondValue = [ 10,20,30,40,40 ]
// console.log(obj.firstName);
// // console.log( obj["lastName"] );
// // console.log( obj["first Name"] );


// console.log( a );
// var a=10;

// var functionName = function () {
//     console.log("hi");
// }

// function HOD() {
//     return ("functionName", "Hello")

// }

// console.log(HOD());


// var functionName = function () {
//     console.log("Im call back");
// }
// function HOD() {
//     // return (functionName())
//     console.log("Im hod" );
// }

// // console.log(HOD());
// HOD( functionName()  )


// var x = 1;
// var y = "Hello";
// var z = undefined;       
// // // x || y    // Returns 220 since the first value is truthy      
// // // x || z   // Returns 220 since the first value is truthy   
// // // x && y    // Returns "Hello" since both the values are truthy
// // // y && z   // Returns undefined since the second value is falsy
        
// if( x && y ){ 
//   console.log("it runs" ); // This block runs because x && y returns "Hello" (Truthy)
// }   
        
// if( x || y ){
//   console.log("Code runs");  // This block runs because x || y returns 220(Truthy)
// }

// console.log(  typeof (Number)  );

// var a = 10; 

// var a = 10;
// var b = a;

// a = 20;

// console.log( a,b );

// let arr = [  4,5,6,3,4,5,6 ];
// // // let arr1 = [10,23,4,5,6,7,78,89,90]
// let [ a,b,c,...d  ] = arr;
// arr.unshift( [23,45,67,8,9] );
// let arr2 = [...arr];

// arr[0][0]=100


// console.log(  arr,arr2   );

// let arr3 = arr+arr2

// console.log( arr3 );

// console.log( a,b,c,d );




// console.log( typeof(a) );

// let str = "Javascript"

// for (let index = 0; index < str.length; index++) {
//     console.log( str.charCodeAt(index) );
//     console.log( str[index] );
    
// }

// let boo = Boolean(-23)

// let boo1 = 5 + true

// console.log( boo,boo1 );

// function abc(a,b) {
//     console.log( "Hii" );
//     return(a+b);
// }
// //  abc(4,5);
//  console.log( abc(4,5) );

// let arr = [1,2,3,4,5]
// for (const key in arr) {
//     console.log( arr[key] );
// }

// for (const iterator of arr) {
//     console.log( iterator );
// }