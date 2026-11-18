/* ==========================================================================
   Menu ☰ da área logada (Doador, ONG e Administrador)
   No celular, a barra lateral mostra só o logo e um botão com três barrinhas.
   Ao tocar no botão, o menu abre e fecha. No computador o botão fica
   escondido pelo CSS e a barra lateral continua normal.
   ========================================================================== */
(function () {
  var barra = document.querySelector('.sidebar');
  if (!barra) return;

  var ICONE_MENU = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
  var ICONE_FECHAR = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';

  var botao = document.createElement('button');
  botao.type = 'button';
  botao.className = 'botao-menu';
  botao.setAttribute('aria-label', 'Abrir menu');
  botao.setAttribute('aria-expanded', 'false');
  botao.innerHTML = ICONE_MENU;

  // O botão fica logo depois do logo (segundo item da barra)
  barra.insertBefore(botao, barra.children[1]);

  botao.addEventListener('click', function () {
    var aberto = barra.classList.toggle('aberto');
    botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    botao.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    botao.innerHTML = aberto ? ICONE_FECHAR : ICONE_MENU;
  });
})();
