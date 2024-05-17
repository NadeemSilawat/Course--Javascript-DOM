/* create <ul id = 'myList'></ul> */
const ul = document.createElement('ul');
ul.setAttribute('id','myList');

console.log(ul)

/* create this : <li>[text]</li> */

function createItems(text){
    var li = document.createElement('li') ;

    li.textContent = text;
    return li

}

function appendChildren(parent , children){
    children.forEach(child => {
        parent.appendChild(child);  
    });
}

var myList = document.getElementById('myList')

var item = [
    createItems('Dom'),
    createItems('Bom'),
    createItems('Alex')
]

appendChildren(myList,item);

console.log(myList);