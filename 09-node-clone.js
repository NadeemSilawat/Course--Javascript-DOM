const myList = document.getElementById('myList')
const listChildren = myList.children;


const bananasItem = listChildren[1];
const bananasCopy = bananasItem.cloneNode(true);

myList.appendChild(bananasCopy)

// console.log(bananasItem)