// Add h2
const h2 = document.createElement('h2');
h2.textContent = "replaceChild() JS-DOM"
document.body.appendChild(h2);

// Create ul

const ul = document.createElement('ul')
ul.setAttribute('id',"myList")
document.body.appendChild(ul);

// make listItems
const docFrig = document.createDocumentFragment();

const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');
const orengesItem = document.createElement('li'); // not append in docFrig

item2.setAttribute('id', 'pearsItem');

item1.textContent = 'Apple';
item2.textContent = 'Pears';
item3.textContent = 'Bananas';
orengesItem.textContent = 'Oranges'; // not append in docFrig

docFrig.appendChild(item1);
docFrig.appendChild(item2);
docFrig.appendChild(item3);

// Append items to myList
myList.appendChild(docFrig);

// Using replaceChild() Method JS-DOM

const newListItem = document.createElement('li');
const pearsItem = myList.children[2]

// console.log(pearsItem);
newListItem.textContent = "Hamming Code"

myList.replaceChild(newListItem,pearsItem)