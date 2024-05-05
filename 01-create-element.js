let newElement = document.createElement('input');
let newElement1 = document.createElement('div');

newElement.value = "NadeemSilawat"


console.log(newElement)

let ul = document.createElement('ul')
let li = document.createElement('li')

li.innerHTML += 'HELLO';
ul.appendChild(li)

document.body.appendChild(newElement)
document.body.appendChild(li)

