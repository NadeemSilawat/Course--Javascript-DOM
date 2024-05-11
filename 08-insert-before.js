const myList = document.getElementById('myList');
const pearsItem = document.getElementById('pearsItem');

console.log(myList)
// console.log(pearsItem)

const orangesItem = document.createElement('li');
orangesItem.textContent = 'Orange';

// myList.insertBefore(orangesItem,pearsItem)


// Opposite to appendChild

function addToBeginning(parent , toInsert){
    const firstChild = parent.firstChild;
    parent.insertBefore(toInsert,firstChild)
}

addToBeginning(myList , orangesItem)