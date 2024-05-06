const myList = document.getElementById('myList');

//New List Item <li>Audi<li/>

let newListItem = document.createElement('li');

newListItem.textContent = 'Audi'
myList.appendChild(newListItem)

// Using Array 

const fruitList = ['Mango','Apple','Orange','Lemon'];

for(let fruit of fruitList){
    let newItems = document.createElement('li')
    newItems.textContent = fruit;

    myList.appendChild(newItems);
}

    
