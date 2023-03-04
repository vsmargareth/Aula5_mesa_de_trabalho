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

//mesa 06 introducão ao CRUD
let containerRef = document.querySelector('#container');

let felinos = [
  {
    titulo: 'O tigre',
    descricao: `O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae)
    pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador
    carnívoro e
    é a maior espécie de felino do mundo junto com o leão.`,
    url: './imagens/tiger.jpg'
  },
  {
    titulo: 'O leão',
    descricao: `O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero
    gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África
    subsahariana
    (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da
    Índia.`,
    url: './imagens/leon.jpg'
  },
  {
    titulo: 'O leopardo',
    descricao: `O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros
    felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso
    hióide que lhes permite rugir.
    É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra
    (melanista).`,
    url: './imagens/leopardo.jpg'
  },
  {
    titulo: 'A pantera negra',
    descricao: `A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o
    leopardo (Panthera pardus) e a onça-pintada (Panthera onca).
    Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma
    variação negra destes animais.`,
    url: './imagens/pantera-negra.jpg'
  },
  {
    titulo: 'O jaguar',
    descricao: `O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do
    gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também
    é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera
    leo).`,
    url: './imagens/jaguar.jpg'
  },
  {
    titulo: 'O guepardo',
    descricao: `O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único
    representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre
    mais rápido
    do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.`,
    url: './imagens/chita.jpg'
  },
]
for (let felino of felinos) {
  containerRef.innerHTML += `
    <div class="item">
      <img src="${felino.url}">
      <h2>${felino.titulo}</h2>
      <p>${felino.descricao}</p>
    </div>
  `
}

