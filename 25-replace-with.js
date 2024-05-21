const h2 = document.createElement('h2')        
h2.textContent = 'replaceWith() Method JS-DOM';
document.body.appendChild(h2);


const div = document.createElement('div');
div.setAttribute('id','example')
document.body.appendChild(div);

const p = document.createElement('p');
p.setAttribute('id','pear')
p.textContent = 'Simple Text';
document.body.appendChild(p);


const pTag = document.querySelector('#pear')

// Create a new inute Tag
const newInput = document.createElement('input');
newInput.value = "New input Tag";

// Create a new Button
const btn = document.createElement('button');
btn.textContent = "ME too!"

// pTag.replaceWith(newInput,btn,"This is replaceWith()")  

// Using childNode(0) replaceWith() creating a new

const newStrong = document.createElement('strong');
newStrong.textContent = "This is a new Strong Tag";

pTag.replaceWith(newStrong,'I am just new....');    