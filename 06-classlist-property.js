// Class List Property - add(),remove(),replace() and toggle()

const myPara = document.getElementById('myPara')

myPara.classList.add('bold','big-font')
myPara.classList.remove('bold')
myPara.classList.replace('big-font','red-bg')

myPara.classList.toggle('red-bg');
myPara.classList.toggle('red-bg');

console.log(myPara.classList);

console.log(myPara.classList.contains('font'));
console.log(myPara.classList.contains('red-bg'));

// Using Spread operator .....

let arr = ['foo','baz','monk']

myPara.classList.add(...arr);

console.log(myPara.classList)