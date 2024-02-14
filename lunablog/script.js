'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');


// navToggle function
const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);



// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');


for (let i = 0; i < themeBtn.length; i++) {

  themeBtn[i].addEventListener('click', function () {

    // toggle `light-theme` & `dark-theme` class from `body`
    // when clicked `theme-btn`
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    for (let i = 0; i < themeBtn.length; i++) {

      // When the `theme-btn` is clicked,
      // it toggles classes between `light` & `dark` for all `theme-btn`.
      themeBtn[i].classList.toggle('light');
      themeBtn[i].classList.toggle('dark');

    }

  })

}

// Função para calcular o tempo decorrido em dias
function calcularTempoDecorrido(dataPostagem) {
  const umDiaEmMilissegundos = 24 * 60 * 60 * 1000; // 1 dia em milissegundos
  const dataAtual = new Date();
  const diff = dataAtual.getTime() - dataPostagem.getTime();
  const diasDecorridos = Math.floor(diff / umDiaEmMilissegundos);
  return diasDecorridos;
}

// Função para atualizar o tempo decorrido para todas as publicações
function atualizarTodosOsTemposDecorridos() {
  // Seleciona todos os elementos de data de postagem
  const elementosDataPostagem = document.querySelectorAll("[data-postagem]");
  
  // Itera sobre cada elemento de data de postagem
  elementosDataPostagem.forEach(dataPostagemElement => {
    const dataPostagem = new Date(dataPostagemElement.getAttribute("datetime"));
    const elementoTempoDecorrido = dataPostagemElement.nextElementSibling; // Seleciona o próximo irmão do elemento de data de postagem
    atualizarTempoDecorrido(dataPostagem, elementoTempoDecorrido);
  });
}

// Função para atualizar o tempo decorrido
function atualizarTempoDecorrido(dataPostagem, elementoTempoDecorrido) {
  const diasDecorridos = calcularTempoDecorrido(dataPostagem);
  if (diasDecorridos === 0) {
    elementoTempoDecorrido.textContent ="Publicado hoje";
  } else if (diasDecorridos === 1) {
    elementoTempoDecorrido.textContent ="Publicado há 1 dia";
  } else {
    elementoTempoDecorrido.textContent =`Publicado há ${diasDecorridos} dias`;
  }
}

// Chama a função para atualizar o tempo decorrido para todas as publicações após o carregamento do documento
document.addEventListener("DOMContentLoaded", function() {
  atualizarTodosOsTemposDecorridos();
});
