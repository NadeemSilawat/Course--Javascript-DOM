const applesItem = document.querySelector("#myList > li:first-of-type");
const bananasItem = applesItem.nextElementSibling;

console.log(bananasItem);

const nav = document.querySelector("nav")
const belowNav = nav.nextElementSibling;

belowNav.style.marginTop = nav.clientHeight + "px"

// console.log(belowNav);

