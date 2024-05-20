// Add h1 
const h1 = document.createElement('h1')
h1.textContent = 'Event Delegaton JS - DOM';
document.body.appendChild(h1)

// Add p 
const p = document.createElement('p');
p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem pariatur quis officia ipsam, numquam id';
document.body.appendChild(p);

// Added ul Tag
const myList = document.createElement('ul');
myList.setAttribute('id', 'myList');
document.body.appendChild(myList);

// Add Items

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

myList.addEventListener('click',function(e){
    const target = e.target;

if(target.matches('li')){
    target.style.backgroundColor = "red"
}
})

