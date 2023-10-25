let obj = {
    id:1,
    fullName:"James Cameron",
    address:{
        country:"India",
        district:"Krishnagiri",
        town:"Rayakottai"
    }
}

let newArr = ['hi','hello','world']

localStorage.setItem("mySession", JSON.stringify(obj)) //stringify is used to convert normal obj to json

let a = JSON.parse(localStorage.getItem("mySession"))  /* here im retrieving data from 
                                                    session or local then im converting Json to nomral object */
console.log(  a );




























