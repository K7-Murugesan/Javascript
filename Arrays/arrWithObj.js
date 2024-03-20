    // 
//<------13-07-2022------>If You have any doubt Listen the Audio.......

function findTotalNum(item1) {
    let products1 = {};
    for (let i = 0; i < item1.length; i++) {
        var present = false;
        var prod1 = (item1[i].product);

        for (const key in products1) {
            if (key == prod1) {
                present = true;
            }
        }
        if (present == false) {
            //if key is not present and a new key and a value for that Key is no.

            products1[prod1] = item1[i].no;
        }
        else   //if key is present again add the value of no.
        {
            products1[prod1] = products1[prod1] + item1[i].no;

            //ex: After Creating a new key for products
            //    Initially we have - TV:20 
            //If key is present....
            //products[pro]= 20 + item[2].no
            //TV= 20 + item[2].no
            //TV= 20 + 50
            // TV:70
        }
    }
    console.log(products1);
}
findTotalNum([{ product: "TV", no: 20 },
{ product: "AC", no: 20 },
{ product: "TV", no: 50 },
{ product: "AC", no: 120 },
{ product: "FM", no: 10 },
{ product: "FM", no: 150 },
{ product: "EAR-BUDS", no: 150 }

])


function find(item) {
    let products = {};
    for (let i = 0; i < item.length; i++) {
        var present = false;
        var prod = (item[i].product);
        //  var val= (item[i].no);

        for (const key in products)  //checking key is present or not
        {
            if (key == prod) {
                present = true;
            }
        }
        if (present == false)     //if key is not present and a new key
        {
            products[prod] = 1;
        }
        else   //if key is present increase the value of same key by one unit
        {
            products[prod] = products[prod] + 1;
        }
    }
    // console.log(products);
}
find([{ product: "TV", no: 20 },
{ product: "AC", no: 20 },
{ product: "TV", no: 50 },
{ product: "AC", no: 120 },
{ product: "FM", no: 10 },
])
        // var obj = null;
        // console.log( typeof obj);


let a = [10,12,13,14];
let b = a
a.push(20);

console.log( a,b );

console.log( !(1!=="1") );


/////hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
