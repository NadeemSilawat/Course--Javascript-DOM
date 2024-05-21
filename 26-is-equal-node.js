// append div tag

const myDiv1  = document.createElement('div');
myDiv1.classList.add('test');
myDiv1.setAttribute('id','myNode')
document.body.appendChild(myDiv1)

const myDiv2  = document.createElement('div');
myDiv2.classList.add('test');
myDiv2.setAttribute('id','myNode')
document.body.appendChild(myDiv2)


const div1 = document.querySelectorAll('div')[0];
const div2 = document.querySelectorAll('div')[1]

// const isEqual = div1.isEqualNode(div2);


console.log(isEqual)
// inside of myDiv2 Looklike
{
    /*<div>
        // one extra enter (auto created text node)
    </div>*/
}

// Check Node is equl or not
const isEqual = myDiv1.isEqualNode(myDiv2);

// Print Ouptup
console.log(isEqual); // false

console.log(myDiv1.childNodes); // NodeList []
console.log(myDiv2.childNodes); // NodeList [text]

console.log(myDiv1.childNodes[0]); // undefined
console.log(myDiv2.childNodes[0]);
