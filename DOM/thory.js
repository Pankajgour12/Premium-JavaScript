0i//! What is the DOM? How does it represent the HTML structure?
//*: The DOM (Document Object Model) is a tree-like object representation of an HTML document created by the browser. Each HTML element becomes a node in the DOM tree, allowing JavaScript to access and manipulate the structure, content, and styles dynamically

//! Name the types of nodes in the DOM tree.
//* The main DOM node types are Document node, Element node, Text node, Attribute node, and Comment node. Additionally, Document Fragment nodes are used for efficient DOM manipulation.

//!what does the different in an element node and text node
`
✅ 1. Element Node Kya Hota Hai ?
👉 HTML ka TAG = Element Node
Example:

            <div>
            <h1>
            <p>
            <input>


            Ye sab Element Nodes hain.

✅//! 2. Text Node Kya Hota Hai ?

👉 Tag ke andar jo text likha hota hai wo Text Node hota hai.

Example:

<p>Hello World</p>


"Hello World" = Text Node.

`;

// !  what does getElementByClassName return? Ia it an array?

/* let cl = document.getElementsByClassName('color')

console.log(cl); */

//* its return becomes HTML COLLECTION NOT and array 



//! Select all <li> element and print their text using a loop.

 let list = document.querySelectorAll("li");
/*
for(let i=0; i<list.length;i++){
    console.log(list[i].innerText);
}
 */

/* list.forEach((val)=>{
    console.log(val.innerText);
}) */

 
    //! What's the different between innerText,textContent, and innerHTML ?
  let a = `✅ 1. innerText

    👉 Sirf visible text deta hai (jo screen par dikh raha hai).
       CSS display:none ya hidden text ignore karta hai.
       Layout calculate karta hai → thoda slow hota hai.


       ✅ 2. textContent

👉 Pure element ka text deta hai (visible + hidden sab).
        CSS ko ignore karta hai.
        Fast hota hai.
        HTML tags remove karke sirf text deta hai.

✅ 3. innerHTML
👉 HTML structure + text dono deta hai.
    Tags bhi milte hain.
    HTML insert bhi kar sakte ho.

//! When should you use textContent instead of innerText ?
👉 “textContent is preferred when we need fast access to an element’s raw text because it does not consider CSS styling or layout calculations. It includes hidden text and performs better than innerText in large DOM operations. Unlike innerText, it does not trigger reflow, making it more efficient. It is also safer when inserting user input because it prevents HTML execution.”

`

//! Select a paragraph and replace its content with:
{/* <b>Updated </b> by JavaScript */}

let p = document.querySelector("p").innerHTML="<b>Updated </b>  by JavaScript"


// add a title attribute to a div dynamically.



they
this is basic questions in the main