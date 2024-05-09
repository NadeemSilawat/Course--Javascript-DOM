const myList = document.getElementById('myList')
const docFrag = document.createDocumentFragment();

let item1 = document.createElement('li')
let item2 = document.createElement('li')

item1.textContent = 'Apples'
item2.textContent = 'Mango'

docFrag.appendChild(item1)
docFrag.appendChild(item2)

// console.log(docFrag)

myList.appendChild(docFrag)

