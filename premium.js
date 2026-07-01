let perguntasPremium = [
  {
    texto: "Pergunta premium 1...",
    resposta: true,
    dificuldade: "dificil"
  },
  {
    texto: "Pergunta premium 2...",
    resposta: false,
    dificuldade: "media"
  }
];

function liberarPremium() {
    perguntas = perguntasPremium;

    localStorage.setItem("premium", "liberado");

    indice = 0;
    pontos = 0;

    carregarPergunta();

    document.getElementById("acesso-premium").style.display = "none";
    document.getElementById("conteudo-premium").style.display = "block";

    alert("Acesso liberado!");
}

function validarChave() {
    const chave = document.getElementById("chave").value;

    if (chave === "ESTUD500.1") {
        liberarPremium();
    } else {
        alert("Chave inválida");
    }
}

window.addEventListener("load", () => {
    if (localStorage.getItem("premium") === "liberado") {
        perguntas = perguntasPremium;
        document.getElementById("acesso-premium").style.display = "none";
        document.getElementById("conteudo-premium").style.display = "block";
        carregarPergunta();
    }
});
