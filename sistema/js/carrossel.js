/* ==========================================================================
   Carrossel
   Todo elemento com class="carrossel" vira uma faixa que desliza de lado
   no celular (com setas ‹ ›). No computador, continua sendo a grade normal:
   o CSS esconde as setas e não muda o layout.
   ========================================================================== */
document.querySelectorAll('.carrossel').forEach(function (faixa) {

  // Coloca a faixa dentro de uma caixa, para posicionar as setas por cima dela
  var caixa = document.createElement('div');
  caixa.className = 'carrossel-caixa';
  faixa.parentNode.insertBefore(caixa, faixa);
  caixa.appendChild(faixa);

  function criarSeta(direcao) {
    var botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'carrossel-seta ' + (direcao < 0 ? 'carrossel-seta-esq' : 'carrossel-seta-dir');
    botao.setAttribute('aria-label', direcao < 0 ? 'Ver anterior' : 'Ver próximo');
    botao.textContent = direcao < 0 ? '‹' : '›';

    // Cada clique rola a faixa um pouco menos que a largura visível
    botao.addEventListener('click', function () {
      faixa.scrollBy({ left: direcao * faixa.clientWidth * 0.8, behavior: 'smooth' });
    });

    caixa.appendChild(botao);
    return botao;
  }

  var setaEsquerda = criarSeta(-1);
  var setaDireita = criarSeta(1);

  // Esconde a seta "anterior" no começo e a "próximo" no fim
  function atualizarSetas() {
    var limite = faixa.scrollWidth - faixa.clientWidth - 2;
    setaEsquerda.classList.toggle('escondida', faixa.scrollLeft <= 2);
    setaDireita.classList.toggle('escondida', faixa.scrollLeft >= limite);
  }

  faixa.addEventListener('scroll', atualizarSetas);
  window.addEventListener('resize', atualizarSetas);
  atualizarSetas();
});
