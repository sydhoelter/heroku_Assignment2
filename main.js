const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello Squid';

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello Squid, ' + myName;
  }if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello Squid, ${myName}' + storedName;
  }myButton.onclick = function() {
    setUserName();
  }