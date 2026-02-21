//! What is the DOM? How does it represent the HTML structure?
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
