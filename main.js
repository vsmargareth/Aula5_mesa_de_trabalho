/*
-Seleção de componentes no HTML tem sempre ref no final
-Modo escuro = blackMode
*/

//seleção de componentes no HTML
let bodyRef = document.querySelector('body');
let h1Ref = document.querySelector('h1');
let itemRef = document.querySelectorAll('.item')
let pRef = document.querySelectorAll('p');
let h2Ref = document.querySelectorAll('h2')

//Monitoramento de cliques
const checkBoxButtonDarkModeRef = document.querySelector('#checkBoxButtonDarkMode')
checkBoxButtonDarkModeRef.addEventListener('change', blabckMode)

//Mudando todos os itens 
function mudaItens() {
  itemRef.forEach(function (selecionaItens) {
    selecionaItens.classList.toggle("itemDarkMode")
  })
}

//Mudando todos os paragráfos
function mudaParagrafos() {
  pRef.forEach(function (mudaParagrafo) {
    mudaParagrafo.classList.toggle("textDarkMode")
  })
}
//Mudando todos os H's 2
function mudaTodosH2() {
  h2Ref.forEach(function (mudaHs2) {
    mudaHs2.classList.toggle("textDarkMode")
  })
}

//Fução para ativar modo escuro
function blabckMode() {
  bodyRef.classList.toggle('bgDarkMode');
  h1Ref.classList.toggle('titleDarkMode');
  mudaItens();
  mudaParagrafos();
  mudaTodosH2();
}
