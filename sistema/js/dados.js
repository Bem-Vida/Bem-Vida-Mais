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

/* ==========================================================================
   Área do Administrador — dados de exemplo e funções auxiliares
   O estado (aprovar ONG, suspender usuário, moderar campanha) fica no
   localStorage; se ele não estiver disponível, usa os dados iniciais.
   ========================================================================== */
function carregarEstado(chave, inicial) {
  try {
    var salvo = localStorage.getItem(chave);
    if (salvo) return JSON.parse(salvo);
  } catch (e) { /* sem localStorage: usa os dados iniciais */ }
  return JSON.parse(JSON.stringify(inicial));
}

function salvarEstado(chave, valor) {
  try { localStorage.setItem(chave, JSON.stringify(valor)); } catch (e) {}
}

/* "Em análise" vira a classe "status-em-analise" (sem acento e sem espaço) */
function classeStatus(texto) {
  return 'status status-' + texto.toLowerCase().normalize('NFD')
    .replace(/[̀-ͯ]/g, '').replace(/\s+/g, '-');
}

/* Evita que texto digitado (ex.: motivo) vire HTML ao ser exibido */
function esc(texto) {
  return String(texto).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

/* ONGs que se cadastraram (tela Validar ONGs) */
const ONGS_ADMIN_INICIAL = [
  { id: 1, nome: 'Casa do Bem', cnpj: '23.456.789/0001-01', email: 'ola@casadobem.org', telefone: '(11) 4000-1111',
    area: 'Assistência social', endereco: 'Rua das Palmeiras, 45, Centro, Ferraz de Vasconcelos — SP',
    descricao: 'Atende famílias da região com alimentos e roupas.', cadastro: '12/09/2026', status: 'Pendente', motivo: '' },
  { id: 2, nome: 'Lar Feliz', cnpj: '45.678.901/0001-23', email: 'lar@larfeliz.org', telefone: '(11) 4000-2222',
    area: 'Acolhimento de idosos', endereco: 'Av. Brasil, 800, Vila Nova, Poá — SP',
    descricao: 'Lar de acolhimento que recebe doações de higiene e roupas de cama.', cadastro: '11/09/2026', status: 'Pendente', motivo: '' },
  { id: 3, nome: 'Associação Mãos Amigas', cnpj: '12.345.678/0001-90', email: 'contato@maosamigas.org', telefone: '(11) 4000-3333',
    area: 'Assistência social', endereco: 'Rua das Flores, 100, Centro, São Paulo — SP',
    descricao: 'Atende famílias do bairro com alimentos, roupas e itens de higiene.', cadastro: '15/06/2026', status: 'Aprovada', motivo: '' },
  { id: 4, nome: 'ONG Vida Solidária', cnpj: '34.567.890/0001-12', email: 'contato@vidasolidaria.org', telefone: '(11) 4000-4444',
    area: 'Educação e vestuário', endereco: 'Rua da Paz, 220, Jardim Alegre, Itaquaquecetuba — SP',
    descricao: 'Campanhas de agasalhos, calçados e material escolar.', cadastro: '03/07/2026', status: 'Aprovada', motivo: '' },
  { id: 5, nome: 'Instituto Esperança', cnpj: '56.789.012/0001-34', email: 'contato@esperanca.org', telefone: '(11) 4000-5555',
    area: 'Saúde e higiene', endereco: 'Rua Nova Esperança, 15, Centro, Suzano — SP',
    descricao: 'Kits de higiene e fraldas para abrigos e famílias.', cadastro: '15/08/2026', status: 'Aprovada', motivo: '' },
  { id: 6, nome: 'Projeto Abrigo', cnpj: '67.890.123/0001-45', email: 'abrigo@projeto.org', telefone: '(11) 4000-6666',
    area: 'Moradia', endereco: 'Rua Sem Número, s/n, Poá — SP',
    descricao: 'Cadastro com documentação incompleta.', cadastro: '20/08/2026', status: 'Recusada', motivo: 'Documentação ilegível.' }
];
const ONG_DOCUMENTOS = ['Estatuto social.pdf', 'Cartão CNPJ.pdf', 'Ata de eleição da diretoria.pdf'];

/* Usuários (tela Gerenciar Usuários) */
const USUARIOS_INICIAL = [
  { id: 1,  nome: 'Maria Silva',   email: 'maria@exemplo.com',  perfil: 'Doador', cadastro: '12/09/2026', status: 'Ativo', motivo: '' },
  { id: 2,  nome: 'Ana Souza',     email: 'ana@email.com',      perfil: 'Doador', cadastro: '10/09/2026', status: 'Ativo', motivo: '' },
  { id: 3,  nome: 'Bruno Costa',   email: 'bruno@email.com',    perfil: 'Doador', cadastro: '05/09/2026', status: 'Ativo', motivo: '' },
  { id: 4,  nome: 'Carlos Lima',   email: 'carlos@email.com',   perfil: 'Doador', cadastro: '01/09/2026', status: 'Suspenso', motivo: 'Várias intenções de doação não cumpridas.' },
  { id: 5,  nome: 'Daniela Rocha', email: 'daniela@email.com',  perfil: 'Doador', cadastro: '25/08/2026', status: 'Ativo', motivo: '' },
  { id: 6,  nome: 'Eduardo Alves', email: 'eduardo@email.com',  perfil: 'Doador', cadastro: '18/08/2026', status: 'Ativo', motivo: '' },
  { id: 7,  nome: 'Associação Mãos Amigas', email: 'contato@maosamigas.org',   perfil: 'ONG', cadastro: '15/06/2026', status: 'Ativo', motivo: '' },
  { id: 8,  nome: 'ONG Vida Solidária',     email: 'contato@vidasolidaria.org', perfil: 'ONG', cadastro: '03/07/2026', status: 'Ativo', motivo: '' },
  { id: 9,  nome: 'Instituto Esperança',    email: 'contato@esperanca.org',     perfil: 'ONG', cadastro: '15/08/2026', status: 'Ativo', motivo: '' }
];

/* Moderação: situação de cada campanha de CAMPANHAS (a chave é o id) */
const MODERACAO_INICIAL = {
  1: { status: 'Ativa', motivo: '' },
  2: { status: 'Ativa', motivo: '' },
  3: { status: 'Ativa', motivo: '' },
  4: { status: 'Ativa', motivo: '' },
  5: { status: 'Ativa', motivo: '' },
  6: { status: 'Em análise', motivo: 'Denúncia: descrição inconsistente com os itens.' },
  7: { status: 'Ativa', motivo: '' },
  8: { status: 'Em análise', motivo: 'Denúncia: fotos não correspondem à campanha.' },
  9: { status: 'Suspensa', motivo: 'Suspensa para revisão das informações.' }
};

/* Campanhas que o público pode ver: as suspensas e removidas somem do site */
function campanhasPublicas() {
  var mod = carregarEstado('bemvida_moderacao', MODERACAO_INICIAL);
  return CAMPANHAS.filter(function (c) {
    var s = mod[c.id] ? mod[c.id].status : 'Ativa';
    return s !== 'Suspensa' && s !== 'Removida';
  });
}
