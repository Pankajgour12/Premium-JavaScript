/*

1. DOM ✅
2. Selection ✅
3. Manupating the html ✅

*/

// let a = document.getElementsByTagName('div')
// console.log(a);

// console.log(document.getElementById('heading'))

// console.log(document.getElementsByClassName('hi'))


// let a = document.querySelector('.hi')
// console.log(a)

// let b = document.querySelectorAll('div')
// console.log(b)

// let falna = document.querySelector('#falna');
// console.log(falna)

// console.log(falna.childNodes)
// console.log(falna.lastChild)


// HOW TO MANIPULATE HTML

/*

tag ❌
text ✅
element ✅
html ✅
insert
attribute
*/

// let h1 = document.querySelector('h1');
// h1.nodeName = 'P'
// console.log(h1.tagName)


// h1.innerText = '        banki jo bacha  \n         tha kale chor le gye'
// console.log(h1.innerText)
// console.log(h1.textContent)

// h1.innerHTML = 'banki jo bacha tha'
// console.log(h1.innerHTML)
// console.log(h1.firstChild)

// console.log(h1.tagName)
// console.log(h1.nodeName)
// console.log(h1.innerText)
// console.log(h1.textContent)
// console.log(h1.innerHTML)


// inserting elements

// let div = document.querySelector('div');

// let elem = document.createElement('p');
// elem.innerText = "New Paragraph";

// div.append(elem)
// div.prepend(elem);
// div.after(elem);
// div.before(elem);
// div.insertAdjacentElement('beforeend', elem);

// let p = div.children[3];
// p.remove();


// let alpha = document.querySelector('#alpha');
// alpha.style.backgroundColor = 'blue';

// let parentNode = alpha.parentNode
// parentNode.append(elem);

// let newElem = document.createElement('div');
// newElem.innerText = "hello";


// parentNode.replaceChild(newElem, alpha)
// parentNode.removeChild(newElem)



// parentNode.insertBefore(newElem)

// let lastPara = div.children[2];

// div.insertBefore(elem, lastPara)

// attributes

// let div = document.querySelector('.box');

// console.log(div.attributes)
// console.log(div.getAttribute('title'))

// let classValue = div.getAttribute('class');
// console.log(classValue)

// div.setAttribute('class', `${classValue} random`)
// console.log(div.attributes.class.value)


// // question 1
// let p = document.createElement('p');
// p.innerText = "mai tumse pyar karta hun"
// // p.style.backgroundColor = 'black';
// // p.style.color = 'green'
// p.setAttribute('style','background-color: black; color:green')

// let body= document.querySelector('body');
// body.append(p);


// // question 2
// let button = document.createElement('button');
// button.innerText = "click me";

// p.prepend(button);


// let div = document.querySelector('.box')
// div.setAttribute('class', `${div.getAttribute('class')} box2`)
// console.log(div.getAttribute('class'))

// function changeTagName(oldNode, newTagName){
//     if(oldNode instanceof Element){

//         let p = document.createElement(newTagName);
//         p.innerHTML = oldNode.innerHTML;

//         for(let attr of oldNode.attributes){
//             p.setAttribute(attr.name, attr.value)
//         }

//         oldNode.replaceWith(p);
//     }else{
//         console.error("invalid node")
//     }
// }


// let div = document.querySelector('.box')

// changeTagName(div, 'p')


// let div = document.querySelector('div');


// div.setAttribute('style', 'background-color:red')
// div.setAttribute('class', 'redBg')


// div.style.backgroundColor = 'blue'
// div.style.fontSize = '60px'

// div.style.cssText = 'background-color:red; font-size:60px'

// console.log(div.className)
// div.className = 'redBg'
// div.className = 'blueBg'
// console.log(div.className)

// div.classList.add('redBg')
// div.classList.add('blueBg');

// div.classList.remove('blueBg')

// let isAvailable = div.classList.contains('blueBg')
// console.log(isAvailable)


// div.classList.toggle('blueBg')
// div.classList.toggle('blueBg')

// console.log(div.className)


// let button = document.querySelector('button')
// let body = document.querySelector('body');

// button.addEventListener('click', () => {
//     body.classList.toggle('dark')
// })