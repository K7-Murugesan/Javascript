

function sample()
{

    // let head = document.querySelector("h1")





    // var head = document.querySelector("h1");

    // var defaultStyles = window.getComputedStyle(document.querySelector("h1"))
    // var defaultStyles = window.getComputedStyle(head)
    // console.log( defaultStyles.fontSize );
    // console.log( defaultStyles.fontWeight);
    // // console.log( head.hasAttributes() );
    // // console.log( head.hasAttribute("align") );
    // head.style.fontSize = "100px"
    // head.style.color = "yellow"
    // head.style.backgroundColor="black"
    // // head.align = "left"
    // head.setAttribute( "align", "right"  )
    // // head.setAttribute( "style", "color:blue; background-color:black"  )
    // head.removeAttribute("align")
    // head.removeAttribute("style")
    // var computedStyle = window.getComputedStyle( head );
    // console.log( computedStyle.textAlign )
    // console.log( head.hasAttributes("style")  );
    // console.log( head.hasAttribute("style")  );
    // console.log( head.getAttribute("style")  );
    // console.log( head.getAttribute("align")  );

    //=========================================================

    //Attribute manipulation

    // let head = document.querySelector("h1");

//    console.log(head.getAttribute("align"));
   
//    console.log(  head.hasAttribute("align")   );

//    console.log(  head.hasAttributes()   );
//    console.log(  head.hasAttributes()   );

    // let button = document.querySelector("button")
    // console.log(  button.hasAttributes() );

    // let head = document.querySelector("h1");

    
    //    head.setAttribute("align","left")
    //    head.setAttribute("style","color:yellow; background-color:black");
    //     head.align = "right"
    //    head.removeAttribute("style")

//================================================================================    
    
    //Manipulating Style or Dynamic Cascading

     let head = document.querySelector("h1");

     head.style.border = "3px solid black"

    head.style.textShadow = "5px 5px 3px black"

    let computedStyle = window.getComputedStyle(head)

    console.log( computedStyle.textDecoration  );


    let button = document.querySelector("button")

    button.addEventListener("blur", 
    function (){
    
        button.style.color = "blue"
    
    })


    // let computedStyle = window.getComputedStyle(document.querySelector("h1"))

    // console.log( computedStyle.fontSize  );
        
} 