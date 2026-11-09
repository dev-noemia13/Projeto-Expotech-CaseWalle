# WALL-E · Chatbot de Reciclagem

Chatbot simples que tira dúvidas sobre reciclagem, feito como trabalho do curso de Análise e Desenvolvimento de Sistemas.

## Objetivo

Ensinar, de forma leve e divertida, como separar o lixo e reciclar corretamente. O bot se chama **WALL-E**, um robozinho curioso, gentil e um pouco tímido, que adora cuidar da Terra e guardar objetos curiosos. O tema foi inspirado em um gabinete de PC personalizado.

O avatar do robô e todas as falas são originais. O projeto não usa imagens, logos ou outros elementos oficiais de nenhuma empresa.

## Tecnologias

- **HTML**: estrutura da página (cabeçalho, área de mensagens, botões e campo de texto).
- **CSS**: visual e layout responsivo (funciona no computador e no celular).
- **JavaScript puro**: lógica do chat (busca por palavras-chave e exibição das mensagens).

Não usa frameworks, bibliotecas, API nem backend.

## Como executar

1. Baixe ou copie a pasta do projeto.
2. Dê dois cliques no arquivo `index.html`.
3. Pronto! O chat abre no navegador.

Não precisa instalar nada. (Com internet, a página carrega as fontes do Google Fonts; sem internet, ela usa as fontes padrão do computador e funciona do mesmo jeito.)

## Estrutura dos arquivos

```
index.html   -> estrutura da página e desenho do avatar (SVG)
style.css    -> cores, layout e animações
script.js    -> respostas do bot e lógica do chat
README.md    -> este arquivo
```

## Como funciona

1. O usuário digita uma pergunta ou toca em uma pergunta rápida.
2. O texto é **normalizado**: os acentos são removidos e tudo fica em minúsculas ("Lâmpada" vira "lampada").
3. O bot compara a pergunta com as **palavras-chave** de cada resposta. Cada palavra encontrada soma pontos (palavras mais longas valem mais, por serem mais específicas).
4. A resposta com mais pontos é mostrada, depois de uma pequena animação de "digitando".
5. Se nenhuma palavra-chave for encontrada, o WALL-E fica confuso, pede para reformular e sugere temas.

## Como adicionar novas perguntas

Abra o `script.js` e procure o array `respostas`, logo no começo. Copie um item e mude as palavras-chave e a resposta:

```js
{
  palavras: ["pneu", "borracha"],
  resposta: `Pneus velhos não vão no lixo comum!
Leve a uma borracharia ou ponto de coleta. Bip!`,
},
```

Dicas:

- Escreva as palavras-chave **sem acento e em minúsculas**.
- Pode usar só o começo da palavra: `"recicl"` encontra "reciclar", "reciclagem" e "reciclável".
- Para palavras curtas que podem aparecer dentro de outras, coloque um espaço no final (ex.: `"cor "`).
- Para quebrar linha na resposta, basta pular linha dentro das crases (`` ` ``).

## Temas que o bot conhece

Cores das lixeiras, separação do lixo, papel, plástico, vidro, metal, lixo orgânico, compostagem, lixo eletrônico, pilhas e baterias, óleo de cozinha, lâmpadas, remédios, isopor, caixinhas longa vida, lavagem de embalagens, o que não pode ser reciclado, importância da reciclagem e dicas para reduzir o lixo. Ele também responde a cumprimentos, agradecimentos e comemora quando você conta que reciclou ou aprendeu algo.
