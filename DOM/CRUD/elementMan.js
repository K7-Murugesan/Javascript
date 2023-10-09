
//function sample() 
//{
//innerText / textContent - property used to display the text 
//var head = document.querySelector("h1");
//var x = head.innerText;
//console.log(x);

//value - property used to display the text inside input tag where user can give some input
//var input = document.querySelector("input");
//var x = input.value;
//console.log(x);
//}
function sample() {

    // const head = document.querySelector("h1");
    // const input = document.querySelector("input")
    // head.textContent = input.value
    
    // const newElement = document.createElement("div") ;
    // const input = document.querySelector("input")
    // newElement.innerHTML = input.value

    // const parentElement  = document.getElementById("parent");
    // // parentElement.prepend("newElement")  //var a = 20
    // // parentElement.append("newElement")    // var a = 30
    // parentElement.appendChild(newElement)    // var a = 30
    // input.value=''

    //    newElement.innerHTML="<p>asdhgadjagjd</p>"
    //    newElement.innerText="asdhgadjagjd"
    //    newElement.textContent="<p>asdhgadjagjd</p>"
    
    // console.log(input.value )
    
    // newElement.innerText = inputValue
    // console.log( newElement );


    // let newElement = document.createElement("div") ;
    // const input = document.querySelector("input")
    // newElement.innerHTML = input.value

    let parentElement = document.getElementById("parent")
    parentElement.remove()

    // parentElement.insertBefore(newElement, parentElement.childNodes[2])
    // parentElement.replaceChild(newElement, parentElement.children[2])
    // parentElement.removeChild( parentElement.children[0])
    

    // let newElement = document.createElement("p")
    // let newElement =   document.createElement("span").innerText = "Javascript"
    // newElement.innerText = "Javascript,java<span>Document</span>"
    // newElement.innerHTML = "Javascript,java<span>Document</span>"
    // newElement.textContent = "<span>Document</span>"
    // console.log( newElement );
    
    //    newElement.innerHTML = "<p>Yuvaraj Hemanth HAri</p><br><h1>Tags</h1>"
    //    console.log( newElement );
    //    newElement.innerText = "<p>Yuvaraj Hemanth HAri</p>";
    //    console.log( newElement );
    //    newElement.textContent = "<p>Yuvaraj Hemanth HAri</p>";
    
    //    console.log( newElement  );

    // var input = document.querySelector("input").value
    // // var inputValue = input.value

    // let newElement = document.createElement( "div" )
    // newElement.innerText = input.value ;
  
    // let list = document.querySelector("ol")

    // list.remove()

    // let location = parentElement.children[1];

    // parentElement.insertBefore( newElement, location   )
    // parentElement.replaceChild( newElement, location   )
    // parentElement.removeChild(  location   )
    
    // // parentElement.append(  newElement  );
    // // parentElement.appendChild(  "newElement"  );
    // parentElement.prepend(  newElement  );





    // console.log(  document.body  );




    // console.log( newElement );
    // console.log( inputValue  );
    // head.innerHTML = input.value 
    // console.log( head );
    // head.innerText = input.value;
    // document.body.append(head);
    // document.body.prepend(head);

    //createElement("Tag Name")
    //append(Child name) -----> it will add at bottom 
    //prepend(Child name) -----> it will add at top



    // var newElem = document.createElement( "li" )
    // var input = document.querySelector("input");
    // var inputValue = input.value;

    // newElem.textContent = inputValue;

    // console.log( newElem );

    // var parentElem = document.querySelector("ol");

    // parentElem.appendChild( newElem );
    // parentElem.append( newElem );
    // parentElem.prepend( newElem );
    
    // var input = document.querySelector("input");
    // var parentElement = document.querySelector("ol")
    // var list = document.createElement("li");

    // list.textContent = input.value ; 
    // parentElement.append(list);
    // parentElement.appendChild(list);
    // parentElement.prepend(list);
    // document.querySelector("ol").append(list);


    // Insert before existing child:
    // const newNode = document.createElement("li");
    // newNode.innerText = "Water";
    // const list = document.getElementById("myList");
    // list.insertBefore(newNode, list.children[1]);

    //Using InsertBefore and removeChild

    // const parentElement = document.getElementById("parent");

    // let input = document.querySelector("input");
    //  let inputValue = input.value;

    // // // Using insertBefore()
    // const newElement = document.createElement("div");
    // newElement.textContent = inputValue;
    // const referenceElement = parentElement.children[1]; // Third child
    // parentElement.insertBefore(newElement, parentElement.children[1]);
                  //insertBefore( what, where )
    
    // Using removeChild()
    // const childToRemove = parentElement.childNodes[1]; // Second child
    // parentElement.removeChild(childToRemove);

//    var list =  document.getElementById("parent");
//    list.remove();
    
    //-----Using replaceChild element--------//
    // Creating a new element
    // const newElement = document.createElement("div");
    // newElement.textContent = "New Element";
    // // // Getting the element to replace
    // const oldElement = parentElement.childNodes[1]; // Second child
    // // // Replacing the old element with the new element
    // parentElement.replaceChild(newElement, oldElement);

    //Using Remove
    // var head = document.querySelector("h1")
    // head.remove();


    // var list = document.createElement("li");

    // list.textContent = input.value

    // siblingElement.replaceChild( list, siblingElement[0] )
    // siblingElement.insertBefore( what, where )

    // var list1 = document.createElement("li");
    // list1.textContent=input.value ; 
    // document.querySelector("ol").prepend(list1);

    // var list2 = document.createElement("li");

    //list2.textContent = input.value;
    //document.querySelector("ol").appendChild(list2);






}