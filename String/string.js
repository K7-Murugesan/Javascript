//Write a function to count  the word in the string

// function printCount(str) 
// {
//     str = str + " ";
//     // "My name is Javascript "
//     let word=0;
//     for (let i = 0; i < str.length; i++) 
//     {
//         if(str[i] == " ")
//         {
//            word++;
//         }  
//     }
//     //console.log(str!=""? word+1: word);
//     console.log(word);
    
// }
// printCount("My name is JavaScript")

// //WAFT print the words in the string
// function printWord(str1)
// {
//     str1= str1+" ";
//     let word="";
   
//   for (let i = 0; i < str1.length; i++) 
//   {
//     if(str1[i]!=" ")
//     {
//         word=word+str1[i];
        
//     }
//     else
//     {
//         console.log(word);
//         word="";
//     }
//   }
// }
// printWord("My name is Javascript")

// //WAFT check where the position of the substring is present..

// function printSame(a,same) 
// {
//   var count=1;
//   //var res = false;  
//   var res="word is not present" //instead of false give "word is not present"
//   a=a+" ";
//   let w ="";
//   for (let i = 0; i < a.length; i++) 
//   {
//     if (a[i]!=" ")      //not a space concat
//     {
//        w=w+a[i];    
//     }
//     else                //char is space so word has formed
//     {
    //        if (w==same)     //formed word is it same as given word
    //        {
        //           //res=true;  
        //           res=`word is present in ${count} position` //instead of true give "word is present"
//           break;
//         }
//        w=""             //each time reassigning w to empty
//        count++;   // count the number of word//for count a value 
//     }
//   }
//   console.log(res);
// }
// printSame("white board marker pen","marker")
// printSame("white board marker pen","white")
// printSame("white board marker pen","k7")

//==================================================================================================
//WAFT find the given sub string in the string

// function find(str,subStr) 
// {
    //   let res=false;
    
    //   for (let i = 0; i < str.length; i++) 
    //   {
        //     let conc="";
        //     for (let j = i ; j < (i+subStr.length); j++) 
        //     {
            //       conc=conc+str[j];
            //     }
            //     //console.log(conc);
            //     if (conc==subStr) 
            //     {
                //       res=true;
                
//     }
    
//   }
  
//   console.log(res); 
// }
// find("my name is k7","me is");
// find("my name is k7","name");
// find("my name is k7","nme");

//===================================================================

// //WAFT find the position of substring where it is started in the given parameter

// function indposition(str,subStr) 
// {
    //   let res="not found";
  
//   for (let i = 0; i < str.length; i++) 
//   {
    //     let conc="";
    //     for (let j = i ; j < (i+subStr.length); j++) 
    //     {
        //       conc=conc+str[j];
        //     }
        //     if (conc==subStr) 
        //     {
            //       res=`The given substring "${subStr}"is strats from ${i} index position`;
            
            //     }
            
            //   }
            
// console.log(res); 
// }
// indposition("my name is k7","me is");
// indposition("my name is k7","name");
// indposition("my name is k7","nme");


//WAFT find the largest word in the given string

// function max(str) 
// {
//   str=str+" ";
//   var maxword="";
//   var maxlen=0 ;
//   var word="";
//   for (let i = 0; i < str.length; i++) 
//   {
//     if(str[i]!="")
//     {
//         word=word+str[i];
//     }
//     else
//     {
    //         if (word.length>maxlen) 
    //         {
        //            maxlen=word.length;
        //            maxword=word;  
        //         }
        //         word="";
        //     }  
        //   }
        //   console.log(maxword);
        // }
        // max("my name is Javascript")
        
        // STRING INBUILT METHODS
        
        
        // for (let i = 0; i < str.length; i++) {
            //     console.log( str[i] );
            
            // }
    
    // var str1 = str.split("-");
    
    
    // console.log( str.indexOf( "e" )  );
    // console.log( str.lastIndexOf( "e" )  );
    
    
    // console.log( str1  );
    // console.log( str1.pop()   );
    // console.log( str1.entries );
    // var abc = "My name is String String"
    // var str1 = abc.split( " " );
    // console.log( str1 );
    // var str2 = abc.join();
    // console.log( str2 );
    // console.log(  str2.split(",") );
    
// console.log(  str1.join().split() );

// let arr = [1,2,3,4,5]
// console.log( arr.toString("*") );
// console.log( arr.join("*") );

// var str = "My name is String"
// console.log( str.split(" ") );

// console.log(str.substring(4,5));
// console.log(str.substring(3,9));
// console.log( str.substr(4,5) ); 
// // console.log( str.substr(3)  );
// console.log( abc.substring( 5  )  );
// console.log( str.substring( 1,5  )  );
// console.log( abc.substr( 1,5  )  );
// console.log(str.endsWith("g"));
// console.log(str.startsWith("M"));

// console.log( str.includes( "z" )  );
// console.log(str.repeat(3));
// console.log(str.indexOf("r",10));
// console.log(str.lastIndexOf("i",6));


// console.log( str.replace("i", 'ye')  );

// console.log(str.replace("String","JS"));
// console.log(str.replaceAll("i", 'ye'));
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log( str );
// var str1 = " My name is String "
// console.log( str );
// // console.log(str.trim());
// // console.log(str.trimEnd());
// console.log(str.trimStart());
// console.log(str.charCodeAt(2));
// console.log(str.charAt(11));
// console.log(str.concat("...I'm gonna start the race"));
// let rupees = 'Rs.250'

// console.log( rupees.padEnd( 7, '0' ) );
// console.log( rupees.padEnd( 9, '0' ) );
// console.log( rupees.padEnd( 10, '4' ) );
// console.log( rupees.padStart( 9, '4' ) );
// console.log( rupees.padStart( 7, '4' ) );


//  var str = " Kesa va n "

//  console.log(str.trim());
//  console.log(str.trimEnd());
//  console.log(str.trimLeft());

// let str = "Kes*av*an" ;
// let str = "Kes,av,an" ;

// console.log(str.repeat(2));

// console.log(str.split(",").join("*"));
// console.log(str.split(","));


// let str = "My name is Javascript"

// str = str + " Script"


// console.log(str);

//TO DELETE DUPLICATE ELEMENTS===========================>

// const arr = [1,2,3,4,1,2,5,5,6,7,5,10,10];

// const arr2y = [...new Set(arr) ];

// console.log( arr2y );

// const arr2 = arr.filter((val,ind)=>  
//                                 {
//                                     return arr.indexOf(val) == ind ;
//                                 })
// console.log(arr2);
// console.log(arr2y);



// var str = "Me Javascript";

// console.log(str.substring(2,5));

// console.log(str.substr(2,5));



// let d1 = new Date();

// console.log(d1.toString());
// console.log(d1);



