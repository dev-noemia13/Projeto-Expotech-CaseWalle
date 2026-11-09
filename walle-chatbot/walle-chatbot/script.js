/* =========================================================
   1. BASE DE CONHECIMENTO
   Cada item tem:
   - palavras: palavras-chave (sem acento, em minúsculas).
     Podem ser só o começo da palavra: "recicl" acha
     "reciclar", "reciclagem", "reciclável"...
   - resposta: o texto que o WALL-E responde.
   Para adicionar uma pergunta nova, é só copiar um item.
   ========================================================= */
const respostas = [
  {
    palavras: ["oi", "ola", "bom dia", "boa tarde", "boa noite", "e ai", "hey"],
    resposta: `Oi, oi! Bip-bip!
Que bom te ver por aqui.
Eu sou o WALL-E e adoro falar de reciclagem.
O que você quer saber hoje?`,
  },
  {
    palavras: ["quem e voce", "quem e vc", "seu nome", "como voce se chama", "o que voce faz", "voce gosta", "colecao"],
    resposta: `Eu sou o WALL-E, um robozinho reciclador.
Passo o dia organizando o lixo e cuidando da Terra.
Ah, e eu guardo objetos curiosos que encontro: uma tampinha brilhante, um parafuso torto, uma chave sem porta...
Mas o que eu mais gosto é de ajudar você!`,
  },
  {
    palavras: ["cores", "cor ", "lixeiras", "azul", "vermelh", "amarel", "marrom", "laranja", "roxo", "cinza"],
    resposta: `Bip! Cada cor de lixeira tem um trabalho:
🔵 Azul: papel e papelão
🔴 Vermelho: plástico
🟢 Verde: vidro
🟡 Amarelo: metal
🟤 Marrom: orgânico (restos de comida)
⚫ Preto: madeira
🟠 Laranja: resíduos perigosos (pilhas, baterias)
⚪ Branco: lixo hospitalar
🟣 Roxo: material radioativo
🔘 Cinza: lixo que não dá para reciclar

Esse padrão vem da Resolução CONAMA nº 275/2001.
Eu sei de cor! Uau!`,
  },
  {
    palavras: ["separ", "coleta seletiva", "tipos de lixo"],
    resposta: `Separar o lixo é fácil! Eu faço assim:
1. Tenho duas lixeiras: uma para recicláveis (secos) e outra para orgânicos (úmidos).
2. Nos recicláveis vão papel, plástico, vidro e metal.
3. Nos orgânicos vão restos de comida e cascas.
4. Pilhas, eletrônicos e óleo de cozinha vão para pontos de coleta especiais.
5. Embalagens vão vazias e sem restos de comida.

Se a sua cidade tem coleta seletiva, ela leva os recicláveis. Bip-bip!`,
  },
  {
    palavras: ["papel", "jornal", "revista", "caderno", "folha"],
    resposta: `Papel é um dos meus favoritos! Vai na lixeira azul.

✅ Pode reciclar: jornais, revistas, folhas, cadernos, caixas e papelão.
❌ Não pode: papel higiênico, guardanapo usado, papel engordurado (como caixa de pizza suja), papel carbono, fotografias e etiquetas adesivas.

Dica minha: dobre as caixas para ocuparem menos espaço.`,
  },
  {
    palavras: ["plastic", "pet", "sacola", "garrafinha", "canudo"],
    resposta: `Plástico vai na lixeira vermelha!

✅ Pode reciclar: garrafas PET, potes, tampas, sacolas, embalagens de xampu e de produtos de limpeza.
❌ Evite misturar: embalagens sujas de comida, fraldas e cabos de panela.

Antes de descartar, eu esvazio e dou uma enxaguada rápida.
Uma garrafa PET pode virar até tecido de camiseta. Uau!`,
  },
  {
    palavras: ["vidr", "pote de vidro", "espelho", "caco"],
    resposta: `Vidro vai na lixeira verde!

✅ Pode reciclar: garrafas, potes e frascos.
❌ Não pode: espelho, vidro de janela, lâmpada, cerâmica, porcelana e cristal. Eles têm uma composição diferente.

O vidro pode ser reciclado infinitas vezes sem perder qualidade. Uau!
Atenção: embrulhe cacos em jornal para ninguém se machucar. Eu sempre faço isso.`,
  },
  {
    palavras: ["metal", "metais", "lata", "aluminio", "aco", "ferro", "tampinha"],
    resposta: `Metal vai na lixeira amarela! Clink-clink!

✅ Pode reciclar: latas de alumínio e de aço, tampinhas, arames e panelas velhas sem cabo.
❌ Não pode: esponja de aço, clipes, grampos e latas de tinta ou aerossol com restos de produto.

A latinha de alumínio pode ser reciclada muitas e muitas vezes.
Eu amo latinhas. Elas brilham!`,
  },
  {
    palavras: ["organic", "resto de comida", "restos de comida", "casca", "comida", "borra de cafe"],
    resposta: `Lixo orgânico é o que vem da natureza: restos de comida, cascas de frutas, borra de café, folhas...
Ele vai na lixeira marrom.

E sabe o melhor? Ele pode virar adubo com a compostagem!
Quase metade do lixo de casa é orgânico. Bip! Muita coisa para virar terra boa.`,
  },
  {
    palavras: ["compost", "adubo", "minhoca", "humus"],
    resposta: `Compostagem transforma restos de comida em adubo! Eu acho mágico.
Como fazer em casa:
1. Arrume um recipiente com furinhos (a composteira).
2. Coloque camadas: restos de frutas e legumes, depois material seco (folhas secas ou serragem).
3. Repita as camadas e mantenha úmido, mas não encharcado.
4. Mexa de vez em quando para entrar ar.
5. Em alguns meses vira adubo!

❌ Evite carnes, laticínios e gordura numa composteira simples. Eles atraem bichinhos.`,
  },
  {
    palavras: ["eletronic", "e lixo", "celular", "computador", "notebook", "televis", "tv", "carregador", "fone"],
    resposta: `Lixo eletrônico é celular, computador, TV, carregador, fone...
Eles têm metais que fazem mal à natureza, então nunca vão no lixo comum!

O que fazer:
• Leve a um ponto de coleta de eletrônicos ou à loja do fabricante.
• A lei brasileira (Política Nacional de Resíduos Sólidos, Lei 12.305/2010) diz que fabricantes e lojas precisam receber de volta.
• Se ainda funcionar, doe!
• Apague seus dados antes de entregar o aparelho.

Eu adoro peças de eletrônicos... mas guardo só as que encontro já descartadas, prometo. Bip.`,
  },
  {
    palavras: ["pilha", "bateria", "bateria de"],
    resposta: `Pilhas e baterias são perigosas para a natureza!
Elas têm metais pesados que podem contaminar o solo e a água.

❌ Nunca jogue no lixo comum.
✅ Guarde num potinho e leve a um ponto de coleta. Muitos supermercados, farmácias e lojas de eletrônicos têm um.

Eu tenho uma caixinha só para pilhas usadas. Quando enche, eu levo para o ponto de coleta. Bip-bip!`,
  },
  {
    palavras: ["oleo", "gordura", "fritura"],
    resposta: `Óleo de cozinha usado nunca vai na pia! Bip, bip, alerta!
Ele entope os canos e um pouquinho já polui muita água.

Como descartar:
1. Espere o óleo esfriar.
2. Coe e guarde numa garrafa PET bem fechada.
3. Leve a um ponto de coleta (alguns mercados e ONGs recebem).

O óleo reciclado pode virar sabão e até biodiesel. Uau!`,
  },
  {
    palavras: ["nao pode", "nao da para reciclar", "nao e reciclavel", "nao reciclave", "rejeito"],
    resposta: `Algumas coisas não podem ser recicladas. Elas vão no lixo comum:
• Papel higiênico, guardanapos e lenços usados
• Fraldas e absorventes
• Bitucas de cigarro
• Espelhos, cerâmica e porcelana
• Papel engordurado, adesivos e fotografias
• Esponjas de cozinha

E alguns precisam de descarte especial: pilhas, lâmpadas, remédios, eletrônicos e óleo.
Quando eu não sei, eu pergunto. Você pode me perguntar também!`,
  },
  {
    palavras: ["importan", "por que reciclar", "porque reciclar", "pra que reciclar", "para que reciclar", "beneficio", "vantage", "o que e reciclagem", "o que e reciclar"],
    resposta: `Reciclar é transformar o que seria lixo em material novo.
E isso é importante porque:
🌳 Poupa recursos da natureza, como árvores, petróleo e minérios.
⚡ Economiza energia e água na fabricação.
🗑️ Diminui o lixo nos aterros e na natureza.
👷 Gera trabalho e renda para catadores e cooperativas.

Cada embalagem que você separa ajuda a Terra a ficar verdinha de novo.
Isso me deixa muito feliz! Bip!`,
  },
  {
    palavras: ["reduzir", "diminuir", "menos lixo", "dica", "3r", "5r", "reutiliz", "reaproveit", "sustentav"],
    resposta: `Melhor que reciclar é nem gerar lixo! Minhas dicas:
• Leve sua sacola ao mercado.
• Use garrafinha e caneca reutilizáveis.
• Recuse canudos e talheres descartáveis quando puder.
• Compre a granel ou em embalagens maiores.
• Conserte antes de jogar fora.
• Reaproveite potes de vidro para guardar coisas.

Lembra dos 5 Rs? Repensar, Recusar, Reduzir, Reutilizar e Reciclar.
Eu reutilizo tudo que dá. Minha coleção que o diga!`,
  },
  {
    palavras: ["lampad"],
    resposta: `Lâmpadas não vão na lixeira de vidro!
As fluorescentes têm mercúrio, que é tóxico.

✅ Guarde inteira, na própria caixa, e leve a um ponto de coleta (muitas lojas de materiais de construção recebem).
Lâmpadas LED também devem ir para coleta de eletrônicos.

Com cuidado para não quebrar, combinado? Bip!`,
  },
  {
    palavras: ["remedio", "medicament", "farmacia"],
    resposta: `Remédios vencidos ou que sobraram não vão no lixo nem no vaso sanitário!
Eles podem contaminar a água.

✅ Leve a uma farmácia que tenha coletor de medicamentos. Muitas têm!
Pode levar as cartelas e frascos junto.

Cuidar da saúde e da Terra ao mesmo tempo. Uau!`,
  },
  {
    palavras: ["isopor", "eps"],
    resposta: `Isopor é reciclável, sim! Muita gente não sabe.
Ele é um tipo de plástico, então vai na lixeira vermelha.

Mas atenção:
• Ele precisa estar limpo.
• Nem toda cidade recicla isopor. Vale perguntar à coleta seletiva da sua cidade.

Isopor é levinho... às vezes ele foge de mim com o vento. Bip!`,
  },
  {
    palavras: ["longa vida", "caixinha", "caixa de leite", "caixa de suco", "tetra", "cartonada"],
    resposta: `Caixinha de leite ou suco (embalagem longa vida) é reciclável!
Ela tem camadas de papel, plástico e alumínio, e as recicladoras separam tudo.

Como descartar:
1. Esvazie bem.
2. Enxágue rapidinho.
3. Amasse para ocupar menos espaço.
4. Coloque junto com os recicláveis secos.

Eu acho essas caixinhas muito espertas. Três materiais em um!`,
  },
  {
    palavras: ["lavar", "lavo", "limpar", "enxagu", "sujo", "suja"],
    resposta: `Não precisa lavar com sabão e esfregar muito!
Uma enxaguada rápida já basta, com a água que sobrou da louça, por exemplo.

Isso evita mau cheiro e bichinhos, e ajuda quem trabalha na triagem.
O importante é a embalagem estar vazia e sem restos de comida. Bip!`,
  },
  {
    palavras: ["reciclei", "separei", "aprendi", "consegui", "entendi", "comecei a separar", "fiz uma composteira"],
    resposta: `Uau! Bip-bip-biiip! 🎉
Você é incrível!
Cada passo conta, e você acabou de deixar a Terra um pouquinho melhor.
Vou guardar esse momento na minha coleção de coisas especiais!`,
  },
  {
    palavras: ["obrigad", "valeu", "brigad", "tchau", "ate logo", "ate mais", "adeus"],
    resposta: `De nada! Bip!
Foi muito bom conversar com você.
Volte sempre que tiver dúvida. Eu vou estar aqui, organizando o lixo e cuidando da Terra. 🌱`,
  },
];

// Respostas para quando o WALL-E não entende (uma é sorteada)
const respostasConfusas = [
  "Bip...? Hmm... meus circuitos ficaram confusos. 😳",
  "Ops! Bip-bop... não entendi essa. Desculpa!",
  "Hmm... *cabeça girando*... essa eu ainda não sei.",
];

const temasSugeridos = `Pode falar de outro jeito?
Eu sei sobre:
• Cores das lixeiras e separação do lixo
• Papel, plástico, vidro e metal
• Lixo orgânico e compostagem
• Lixo eletrônico, pilhas e óleo de cozinha
• O que não pode ser reciclado
• Dicas para reduzir o lixo`;

const mensagemBoasVindas = `Bip-bip! Oi! Eu sou o WALL-E. 🌱
Eu cuido da Terra organizando o lixo... e adoro ensinar o que eu sei.
Pergunte qualquer coisa sobre reciclagem ou toque em uma pergunta rápida aqui embaixo!`;

/* =========================================================
   2. ELEMENTOS DA PÁGINA
   ========================================================= */
const areaMensagens = document.getElementById("mensagens");
const formulario = document.getElementById("formulario");
const campoTexto = document.getElementById("campo-texto");
const botoesSugestao = document.querySelectorAll(".sugestao");

let botEstaDigitando = false;

/* =========================================================
   3. NORMALIZAR TEXTO
   Tira acentos, deixa tudo minúsculo e troca pontuação
   por espaço. Assim "Lâmpada?" vira " lampada ".
   ========================================================= */
function normalizarTexto(texto) {
  const semAcento = texto
    .normalize("NFD")                 // separa a letra do acento: "â" -> "a" + "^"
    .replace(/[̀-ͯ]/g, ""); // apaga os acentos
  const limpo = semAcento.toLowerCase().replace(/[^a-z0-9]+/g, " ");
  return " " + limpo.trim() + " ";    // espaços nas pontas ajudam na busca
}

/* =========================================================
   4. ENCONTRAR A MELHOR RESPOSTA
   Para cada item, soma pontos pelas palavras-chave que
   aparecem na pergunta. Palavras mais longas valem mais,
   porque são mais específicas. Ganha quem tiver mais pontos.
   ========================================================= */
function encontrarResposta(pergunta) {
  const texto = normalizarTexto(pergunta);
  let melhorItem = null;
  let melhorPontuacao = 0;

  for (const item of respostas) {
    let pontos = 0;

    for (const palavra of item.palavras) {
      // " " + palavra = a palavra-chave precisa estar no começo de uma palavra
      if (texto.includes(" " + palavra)) {
        pontos += palavra.length;
      }
    }

    if (pontos > melhorPontuacao) {
      melhorPontuacao = pontos;
      melhorItem = item;
    }
  }

  if (melhorItem) {
    return melhorItem.resposta;
  }

  // Não encontrou nada: resposta confusa + sugestões
  const sorteio = Math.floor(Math.random() * respostasConfusas.length);
  return respostasConfusas[sorteio] + "\n" + temasSugeridos;
}

/* =========================================================
   5. MOSTRAR MENSAGENS NA TELA
   ========================================================= */
function criarAvatarMini() {
  const avatar = document.createElement("div");
  avatar.className = "avatar avatar-mini";
  avatar.innerHTML = '<svg viewBox="0 -2 64 66" aria-hidden="true"><use href="#robo-avatar"></use></svg>';
  return avatar;
}

// autor: "bot" ou "usuario"
function adicionarMensagem(texto, autor) {
  const mensagem = document.createElement("div");
  mensagem.className = "mensagem mensagem-" + autor;

  const balao = document.createElement("div");
  balao.className = "balao";
  balao.textContent = texto; // textContent evita que o usuário injete HTML

  if (autor === "bot") {
    mensagem.appendChild(criarAvatarMini());
  }
  mensagem.appendChild(balao);

  areaMensagens.appendChild(mensagem);
  rolarParaBaixo();
}

// Mostra os três pontinhos "digitando..." e devolve o elemento
function mostrarDigitando() {
  const mensagem = document.createElement("div");
  mensagem.className = "mensagem mensagem-bot digitando";
  mensagem.appendChild(criarAvatarMini());

  const balao = document.createElement("div");
  balao.className = "balao";
  balao.setAttribute("aria-label", "WALL-E está digitando");
  balao.innerHTML = "<span></span><span></span><span></span>";
  mensagem.appendChild(balao);

  areaMensagens.appendChild(mensagem);
  rolarParaBaixo();
  return mensagem;
}

function rolarParaBaixo() {
  areaMensagens.scrollTop = areaMensagens.scrollHeight;
}

/* =========================================================
   6. FLUXO DA CONVERSA
   Usuário envia -> aparece a mensagem dele -> WALL-E
   "digita" um pouquinho -> aparece a resposta.
   ========================================================= */
function enviarPergunta(pergunta) {
  pergunta = pergunta.trim();
  if (pergunta === "" || botEstaDigitando) return;

  adicionarMensagem(pergunta, "usuario");
  campoTexto.value = "";
  botEstaDigitando = true;

  const resposta = encontrarResposta(pergunta);
  const indicador = mostrarDigitando();

  // Tempo de "digitação": entre 0,6 e 1,4 segundo, conforme o tamanho
  const tempo = Math.min(600 + resposta.length * 2, 1400);

  setTimeout(function () {
    indicador.remove();
    adicionarMensagem(resposta, "bot");
    botEstaDigitando = false;
  }, tempo);
}

/* =========================================================
   7. EVENTOS (cliques e envio)
   ========================================================= */
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // impede a página de recarregar
  enviarPergunta(campoTexto.value);
  campoTexto.focus();
});

botoesSugestao.forEach(function (botao) {
  botao.addEventListener("click", function () {
    enviarPergunta(botao.textContent);
  });
});

// Mensagem de boas-vindas ao abrir a página
adicionarMensagem(mensagemBoasVindas, "bot");
