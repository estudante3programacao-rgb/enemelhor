const perguntas = [
  {
    texto: "Durante a realeza, e nos primeiros anos republicanos, as leis eram transmitidas oralmente de uma geração para outra. A ausência de uma legislação escrita permitia aos patrícios manipular a justiça conforme seus interesses. (COULANGES, F. A cidade antiga. São Paulo: Martins Fontes, 2000.) A conjuntura sociopolítica da Roma Antiga, conforme apresentada no texto, foi contestada pelos Plebeus que almejavam participar da vida política.",
    resposta: true,
    dificuldade: "facil"
  },
  {
    texto: "Os povos indígenas têm o direito de manter, controlar, proteger e desenvolver seu patrimônio cultural, seus conhecimentos do passado, suas expressões culturais e as manifestações de suas ciências, tecnologias e culturas, compreendidos os recursos humanos e genéticos, as sementes, os medicamentos, o conhecimento das propriedades da fauna e da flora, as transmissões orais, as literaturas, os desenhos, os esportes, os jogos e as artes visuais e interpretativas. (Declaração das Nações Unidas sobre os Direitos dos Povos Indígenas. 107ª Sessão Plenária, 13 de setembro de 2007.) Os direitos reconhecidos no texto representam a complexidade dos saberes tradicionais.",
    resposta: true,
    dificuldade: "facil"
  },
  {
    texto: "A cidade justa é governada pelos filósofos, administrada pelos cientistas, protegida pelos guerreiros e mantida pelos produtores. Cada classe cumprirá sua função para o bem da pólis, racionalmente dirigida pelos filósofos. Em contrapartida, a cidade injusta é aquela onde o governo está nas mãos dos proprietários. O texto apresenta a estrutura de governo da cidade ideal pensada por Platão, que postula uma indissociabilidade entre ética e exercício do poder.",
    resposta: true,
    dificuldade: "media"
  },
  {
    texto: "Cidade sustentável é o assentamento humano constituído por uma sociedade com consciência de seu papel de agente transformador dos espaços. Uma medida pública que contradiz o modelo de cidade exposto no texto é coleta seletiva de lixo.",
    resposta: false,
    dificuldade: "facil"
  },
  {
    texto: "TEXTO I - Em conjunto: todo e não todo, unido e separado, em consonância e em dissonância. De todos um e de um todos. TEXTO II - Deus é dia-noite, inverno-verão, guerra-paz, saciedade-fome. A característica do pensamento do filósofo Heráclito é a ênfase na imobilidade imanente do universo.",
    resposta: false,
    dificuldade: "facil"
  },
  {
    texto: "Um artista fez um desenho de um sol de 20 cm por 20 cm. A obra final manteve as proporções e foi ampliada para 30 m. A escala representada é 1:150.",
    resposta: true,
    dificuldade:  "media"
  },
  {
    texto: "A partir da segunda metade do século XVIII, o número de escravos recém-chegados cresce no Rio e se estabiliza na Bahia. Nenhum lugar servia tão bem à recepção de escravos quanto o Rio de Janeiro. (FRANÇA, R. O tamanho real da escravidão. O Globo, 5 abr. 2015 (adaptado).) Na matéria, o jornalista informa uma mudança na dinâmica do tráfico atlântico que está relacionada à atividade de extração de metais preciosos.", 
    resposta: true,
    dificuldade:  "media"
  },
  {
    texto: "A Declaração Universal dos Direitos Humanos, adotada e proclamada pela Assembleia Geral da ONU na Resolução 217-A, de 10 de dezembro de 1948, foi um acontecimento histórico de grande relevância. Ao afirmar, pela primeira vez em escala planetária, o papel dos direitos humanos na convivência coletiva, pode ser considerada um evento inaugural de uma nova concepção de vida internacional. (LAFER, C. Declaração Universal dos Direitos Humanos (1948). In: MAGNOLI, D. (Org.). História da paz. São Paulo: Contexto, 2008.) A declaração citada no texto introduziu uma nova concepção nas relações internacionais ao possibilitar a impunidade de atos criminosos.", 
    resposta: false,
    dificuldade:  "media"
  },
  {
    texto: "Saudado por centenas de militantes de movimentos sociais de quarenta países, o papa Francisco encerrou no dia 09/07/2015 o 2º Encontro Mundial dos Movimentos Populares, em Santa Cruz de La Sierra, na Bolívia. Segundo ele, a “globalização da esperança, que nasce dos povos e cresce entre os pobres, deve substituir esta globalização da exclusão e da indiferença”.(Disponível em: http://cartamaior.com.br. Acesso em: 15 jul. 2015 (adaptado).) No texto há uma crítica ao seguinte aspecto do mundo globalizado: disparidade econômica.",
    resposta: true,
    dificuldade:  "media"
  },
  {
    texto: "O bônus demográfico é caracterizado pelo período em que, por causa da redução do número de filhos  por mulher, a estrutura populacional fica favorável  ao crescimento econômico. Isso acontece porque há  proporcionalmente menos crianças na população, e o  percentual de idosos ainda não é alto.(GOIS, A. O Globo, 5 abr. 2015 (adaptado).) A ação estatal que contribui para o aproveitamento do  bônus demográfico é o estímulo à qualificação da mão de obra.", 
    resposta: true,
    dificuldade:  "media"
  },
];

let indice = 0;
let pontos = 0;

const perguntaEl = document.getElementById("pergunta");
const resultadoEl = document.getElementById("resultado");
const pontosEl = document.getElementById("pontos");
const progressoEl = document.getElementById("progresso");
const estrelasEl = document.getElementById("estrelas");
const numeroQuestaoEl = document.getElementById("numeroQuestao");

function carregarPergunta() {
  console.log("Índice:", indice);

  const total = perguntas.length;

  if (indice < total) {
    perguntaEl.textContent = perguntas[indice].texto;
    numeroQuestaoEl.textContent = indice + 1;
    resultadoEl.textContent = "";
    resultadoEl.style.color = "";
  } else {
    perguntaEl.textContent = "🏁 Enemelhor finalizado! Continue a estudar conosco!";
    numeroQuestaoEl.textContent = "🏆 - Você está no nível básico de estudos!";
    resultadoEl.textContent = `Você acertou ${pontos} de ${total} questões.`;
  }

  pontosEl.textContent = pontos;
  estrelasEl.textContent = "⭐".repeat(pontos).padEnd(5, "☆");

  const percentual = ((indice + 1) / total) * 100;
  progressoEl.style.width = Math.min(percentual, 100) + "%";
}

function responder(respostaUsuario) {
  if (indice >= perguntas.length) return;

  const correta = perguntas[indice].resposta;

  if (respostaUsuario === correta) {
    resultadoEl.textContent = "✅ Resposta correta!";
    resultadoEl.style.color = "green";
    pontos++;
  } else {
    resultadoEl.textContent = "❌ Resposta errada!";
    resultadoEl.style.color = "red";
  }

  indice++;

  setTimeout(() => {
    carregarPergunta();
  }, 1000);
}

carregarPergunta();
