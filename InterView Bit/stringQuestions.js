
///Write a function that generates a random alphanumeric string of a given length. 

function randomString(length){

        let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012346789"

        let randomText = '' 

        for (let i = 0; i < length; i++) {
            let randomNum =parseInt( Math.random()*char.length)
            randomText+=char.charAt( randomNum  )
        }
        console.log( randomText  );

}
randomString( 4 )


//WAFT reverse a string

function reverseString(str){
    let newString = '';
    for (let i = (str.length-1); i>=0; i--) {
        newString += str.charAt(i)
    }
    console.log( newString );   
}
reverseString("oops")



let arr = [10,30,50,20,40];

 arr.sort().pop();

console.log( arr[arr.length-1] );
