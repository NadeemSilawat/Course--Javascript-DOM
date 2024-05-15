//h2 
const h2 = document.createElement('h2');
h2.setAttribute('id','title');
h2.textContent = "Element.OuterHTML - JS DOM";

document.body.appendChild(h2)

// OuterHTML

const elm = document.getElementById('title');

console.log(elm.outerHTML);

// change outerHTML

elm.outerHTML = '<div class = bold>I;ve been chnages Element.OuterHTML - JS DOM</div>'

