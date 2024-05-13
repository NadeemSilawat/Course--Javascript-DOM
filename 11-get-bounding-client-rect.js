const box = document.createElement('div');
box.classList.add('box');
document.body.appendChild(box);

// when compelely show the box than chnage color
window.addEventListener('scroll', function () {
  if (box.getBoundingClientRect().bottom < window.innerHeight) {
    box.classList.add('red-bg');
  } else {
    box.classList.remove('red-bg');
  }
  
  console.log(box.getBoundingClientRect().bottom, window.innerHeight);
});



