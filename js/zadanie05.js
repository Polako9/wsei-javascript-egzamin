console.log(document.querySelector("button"));

let buttons = document.querySelectorAll("button");
console.log(buttons);
const container = document.querySelector('#container');

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () { 
        container.innerText = buttons[i].dataset.text });
}
