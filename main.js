let buttonRef = document.querySelector('button');
window.addEventListener('click', blabckMode)

let bodyRef = document.querySelector('body');
let h1Ref = document.querySelector('h1');
function blabckMode() {
  bodyRef.classList.toggle('bgDarkMode');
  h1Ref.classList.toggle('titleDarkMode');
  console.log("deu certo no js")
}