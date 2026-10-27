/* ==========================================================================
   BemVida+ — Dados de exemplo (protótipo)
   Em um sistema real, estes dados viriam de um banco de dados.
   Aqui ficam em arrays simples para as páginas poderem filtrar e exibir.
   ========================================================================== */

const NOMES_CATEGORIA = {
  alimentos: 'Alimentos',
  roupas: 'Roupas',
  higiene: 'Higiene',
  outros: 'Outros'
};

/* "imagem" é o nome do arquivo dentro de img/campanhas/.
   Se o arquivo não existir, aparece o gradiente da categoria. */
const CAMPANHAS = [
  { id: 1, titulo: 'Cestas para famílias',     categoria: 'alimentos', recebidos: 210, meta: 300, criada: '2026-09-20', imagem: 'cestas-familias.jpg',
    ong: 'Associação Mãos Amigas', status: 'Ativa', doadores: 42,
    descricao: 'Arrecadação de alimentos não perecíveis para montar cestas básicas e entregar a famílias em situação de vulnerabilidade do bairro.',
    itens: ['Arroz', 'Feijão', 'Óleo', 'Leite', 'Macarrão'] },
  { id: 2, titulo: 'Agasalhos para o inverno', categoria: 'roupas',    recebidos: 84,  meta: 120, criada: '2026-09-15', imagem: 'agasalhos-inverno.jpg',
    ong: 'ONG Vida Solidária', status: 'Ativa', doadores: 25,
    descricao: 'Campanha de agasalhos para crianças e adultos que enfrentam o frio sem roupas adequadas.',
    itens: ['Casacos', 'Cachecóis', 'Gorros', 'Luvas'] },
  { id: 3, titulo: 'Kits de cuidado pessoal',  categoria: 'higiene',   recebidos: 135, meta: 250, criada: '2026-09-10', imagem: 'kits-cuidado-pessoal.jpg',
    ong: 'Instituto Esperança', status: 'Ativa', doadores: 20,
    descricao: 'Montagem de kits de higiene pessoal para abrigos e famílias atendidas pela instituição.',
    itens: ['Sabonete', 'Escova de dentes', 'Creme dental', 'Shampoo'] },
  { id: 4, titulo: 'Marmitas solidárias',      categoria: 'alimentos', recebidos: 96,  meta: 150, criada: '2026-09-05', imagem: 'marmitas-solidarias.jpg',
    ong: 'Associação Mãos Amigas', status: 'Ativa', doadores: 18,
    descricao: 'Arrecadação de marmitas embaladas e água potável para distribuição a pessoas em situação de rua nas praças da região.',
    itens: ['Marmitas', 'Água', 'Talheres descartáveis'] },
  { id: 5, titulo: 'Calçados infantis',        categoria: 'roupas',    recebidos: 45,  meta: 90,  criada: '2026-08-28', imagem: 'calcados-infantis.jpg',
    ong: 'ONG Vida Solidária', status: 'Ativa', doadores: 12,
    descricao: 'Arrecadação de calçados infantis em bom estado para crianças de 2 a 12 anos.',
    itens: ['Tênis', 'Sandálias', 'Botas'] },
  { id: 6, titulo: 'Fraldas infantis',         categoria: 'higiene',   recebidos: 60,  meta: 200, criada: '2026-08-20', imagem: 'fraldas-infantis.jpg',
    ong: 'Instituto Esperança', status: 'Ativa', doadores: 9,
    descricao: 'Campanha de fraldas descartáveis para bebês e crianças pequenas de famílias atendidas pela instituição.',
    itens: ['Fraldas P', 'Fraldas M', 'Fraldas G', 'Lenços umedecidos'] },
  { id: 7, titulo: 'Material escolar',         categoria: 'outros',    recebidos: 150, meta: 180, criada: '2026-08-12', imagem: 'material-escolar.jpg',
    ong: 'ONG Vida Solidária', status: 'Ativa', doadores: 31,
    descricao: 'Cadernos, mochilas, lápis e estojos para crianças e jovens iniciarem o ano letivo.',
    itens: ['Cadernos', 'Mochilas', 'Lápis', 'Estojos'] },
  { id: 8, titulo: 'Brinquedos para crianças', categoria: 'outros',    recebidos: 72,  meta: 120, criada: '2026-08-05', imagem: 'brinquedos-criancas.jpg',
    ong: 'Associação Mãos Amigas', status: 'Ativa', doadores: 14,
    descricao: 'Brinquedos novos ou em ótimo estado para as crianças atendidas pela associação.',
    itens: ['Bonecas', 'Carrinhos', 'Pelúcias', 'Jogos'] },
  { id: 9, titulo: 'Móveis e colchões',        categoria: 'outros',    recebidos: 25,  meta: 80,  criada: '2026-07-30', imagem: 'moveis-colchoes.jpg',
    ong: 'Instituto Esperança', status: 'Ativa', doadores: 6,
    descricao: 'Colchões, camas e pequenos móveis em bom estado para famílias que estão se reorganizando.',
    itens: ['Colchões', 'Camas', 'Mesas', 'Cadeiras'] }
];

/* Funções usadas por várias páginas */
function percentual(c) {
  return Math.round((c.recebidos / c.meta) * 100);
}

function acharCampanha(id) {
  return CAMPANHAS.find(function (c) { return c.id === Number(id); });
}

/* Monta o HTML da capa (imagem + gradiente de reserva) */
function htmlCapa(c, caminho) {
  return '<div class="capa capa-' + c.categoria + '">' +
    '<img src="' + caminho + 'img/campanhas/' + c.imagem + '" alt="" onerror="this.remove()">' +
    '<span>' + NOMES_CATEGORIA[c.categoria].toUpperCase() + '</span></div>';
}

/* Monta o card de campanha (usado na Home e na listagem) */
function htmlCard(c) {
  var pct = percentual(c);
  return '<div class="card card-campanha">' +
    htmlCapa(c, '') +
    '<span class="eyebrow">' + NOMES_CATEGORIA[c.categoria].toUpperCase() + '</span>' +
    '<h3>' + c.titulo + '</h3>' +
    '<div class="barra-progresso"><span style="width:' + pct + '%;"></span></div>' +
    '<div class="progresso-texto"><span>' + c.recebidos + ' de ' + c.meta + ' itens recebidos</span><span>' + pct + '%</span></div>' +
    '<div class="acoes">' +
      '<a href="registrar-intencao.html?id=' + c.id + '" class="botao botao-escuro">Doar</a>' +
      '<a href="campanha-detalhes.html?id=' + c.id + '" class="botao botao-secundario">Ver mais</a>' +
    '</div></div>';
}

/* Aviso flutuante curto (confirmações de ação) */
function mostrarAviso(texto) {
  var el = document.createElement('div');
  el.className = 'aviso-flutuante';
  el.textContent = texto;
  document.body.appendChild(el);
  setTimeout(function () { el.remove(); }, 2500);
}

/* ==========================================================================
   Área da ONG — campanhas da ONG logada (exemplo)
   Fica salva no localStorage do navegador para que "Nova Campanha",
   "Editar", "Pausar" etc. apareçam também ao trocar de página.
   Se o localStorage não estiver disponível, usa os dados iniciais.
   ========================================================================== */
const ONG_CAMPANHAS_INICIAIS = [
  { id: 1, titulo: 'Cestas para famílias',    categoria: 'alimentos', status: 'Ativa',     recebidos: 210, meta: 300, doadores: 42, inicio: '2026-09-01', fim: '2026-12-15', descricao: 'Alimentos não perecíveis para montar cestas básicas.', itens: ['Alimentos'] },
  { id: 2, titulo: 'Agasalhos para o inverno', categoria: 'roupas',    status: 'Ativa',     recebidos: 84,  meta: 120, doadores: 25, inicio: '2026-08-15', fim: '2026-11-30', descricao: 'Agasalhos para crianças e adultos.', itens: ['Roupas'] },
  { id: 3, titulo: 'Kits de cuidado pessoal',  categoria: 'higiene',   status: 'Pausada',   recebidos: 135, meta: 250, doadores: 20, inicio: '2026-08-01', fim: '2026-12-01', descricao: 'Kits de higiene pessoal para abrigos.', itens: ['Produtos de higiene'] },
  { id: 4, titulo: 'Volta às aulas 2026',     categoria: 'outros',    status: 'Encerrada', recebidos: 180, meta: 180, doadores: 31, inicio: '2026-01-10', fim: '2026-03-15', descricao: 'Cadernos, lápis e mochilas para o ano letivo.', itens: ['Outros'] },
  { id: 5, titulo: 'Brinquedos de Natal',      categoria: 'outros',    status: 'Cancelada', recebidos: 200, meta: 400, doadores: 4,  inicio: '2025-11-01', fim: '2025-12-20', descricao: 'Brinquedos novos para o Natal das crianças.', itens: ['Outros'] }
];

function carregarCampanhasOng() {
  try {
    var salvo = localStorage.getItem('bemvida_ong_campanhas_v2');
    if (salvo) return JSON.parse(salvo);
  } catch (e) { /* sem localStorage: segue com os dados iniciais */ }
  return JSON.parse(JSON.stringify(ONG_CAMPANHAS_INICIAIS));
}

function salvarCampanhasOng(lista) {
  try { localStorage.setItem('bemvida_ong_campanhas_v2', JSON.stringify(lista)); } catch (e) {}
}
