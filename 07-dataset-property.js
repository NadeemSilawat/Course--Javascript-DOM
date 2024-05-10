// Add a h2 tag

const h2 = document.createElement('h2')
h2.textContent = 'Dataset Property'
    
document.body.appendChild(h2)

// Add a Div tag 

const div = document.createElement('div')
div.setAttribute('id', 'myDiv') 
div.setAttribute('data-name', 'Bob') 
div.setAttribute('data-started-coding-at', '15') 

div.textContent = 'Simple text';

document.body.appendChild(div)


// Use Dataset Property

console.log(div.dataset)
div.dataset.name = 'Dom'
div.dataset.startedCodingAt= '8'

div.dataset.name = ''


// div.removeAttribute('data-name')