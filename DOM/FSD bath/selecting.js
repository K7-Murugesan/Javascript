
// let h1 = document.getElementsByTagName("h1")
// console.log( h1[1].innerText );

// let heading2 = document.getElementById("id")
// console.log( heading2 );

// let heading3 = document.getElementsByClassName("heading3")
// console.log( heading3[0].innerHTML );

// let nameAtr = document.getElementsByName("fName")
// console.log( nameAtr[0].value );

// let queryFunction = document.querySelector("h1")
// let queryFunction = document.querySelectorAll("h1")
// let queryFunctionID = document.querySelectorAll("#id")
// let queryFunctionClass = document.querySelector(".heading3")

// console.log( queryFunctionClass );


////===Traversing Element

/* Parent Child Sibling */

// let childEle  = document.querySelector("html")

// console.log( childEle.parentElement ); // null
// console.log( childEle.parentNode ); // document


// let parentEle = document.querySelector("body")

// console.log( parentEle.childNodes ); //it return text and element node
// console.log( parentEle.childElementCount );
// console.log( parentEle.children );
// console.log( parentEle.firstChild );
// console.log( parentEle.firstElementChild );
// console.log( parentEle.lastChild );
// console.log( parentEle.lastElementChild );
// console.log( parentEle.hasChildNodes() );

// let refElement = document.querySelector("form")

// console.log( refElement.nextSibling );
// console.log( refElement.nextElementSibling );
// console.log( refElement.previousSibling );
// console.log( refElement.previousElementSibling );


///Manipulating Element


function functionName(){

    let heading1 = document.querySelector("h1")
    heading1.innerText = "Content Updated"

    let newEle = document.createElement("div")
    // newEle.innerText = "Manipulating Element"
    // console.log( newEle );
    // newEle.textContent = "<h1>Adding content by text Content property</h1>"
    // newEle.innerHTML = "Machine learning....<h1>Adding content by innerHTMl property</h1>"

    let input = document.querySelector("input")
    
    newEle.innerHTML = input.value;
    
    let parentElement = document.querySelector("body")
    
    // parentElement.appendChild(  newEle )
    // parentElement.prepend( "Added by prepend", newEle )
    // parentElement.append( newEle,"JS" )

    // parentElement.insertBefore(newEle, parentElement.children[2])
    // parentElement.replaceChild(newEle,parentElement.children[2])
    // parentElement.removeChild( parentElement.children[3] )

    parentElement.remove()

    console.log( document.body );
}
