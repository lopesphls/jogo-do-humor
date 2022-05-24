const pergunta1 = {
  pergunta: "Qual o combustível da espaço nave",
  respostas: ["Etanol", "Diesel", "Gasolina"],
  certa: "Diesel",
};

const pergunta2 = {
  pergunta: "Qual o combustível da espaço nave",
  respostas: ["Etanol", "Diesel", "Gasolina"],
  certa: "Diesel",
};

const pergunta3 = {
  pergunta: "Qual o combustível da espaço nave",
  respostas: ["Etanol", "Diesel", "Gasolina"],
  certa: "Diesel",
};

const pergunta4 = {
  pergunta: "Qual o combustível da espaço nave",
  respostas: ["Etanol", "Diesel", "Gasolina"],
  certa: "Diesel",
};
const pergunta5 = {
  pergunta: "Qual o combustível da espaço nave",
  respostas: ["Etanol", "Diesel", "Gasolina"],
  certa: "Diesel",
};
const pergunta6 = {
  pergunta: "Qual o combustível da espaço nave",
  respostas: ["Etanol", "Diesel", "Gasolina"],
  certa: "Diesel",
};
const pergunta7 = {
  pergunta: "Qual o combustível da espaço nave",
  respostas: ["Etanol", "Diesel", "Gasolina"],
  certa: "Diesel",
};
const pergunta8 = {
  pergunta: "Qual o combustível da espaço nave",
  respostas: ["Etanol", "Diesel", "Gasolina"],
  certa: "Diesel",
};
const pergunta9 = {
  pergunta: "Qual o combustível da espaço nave",
  respostas: ["Etanol", "Diesel", "Gasolina"],
  certa: "Diesel",
};
const pergunta10 = {
  pergunta: "Qual o combustível da espaço nave",
  respostas: ["Etanol", "Diesel", "Gasolina"],
  certa: "Diesel",
};

const perguntas = [
  pergunta1,
  pergunta2,
  pergunta3,
  pergunta4,
  pergunta5,
  pergunta6,
  pergunta7,
  pergunta8,
  pergunta9,
  pergunta10,
];

function addPerguntas() {
  let question = document.querySelectorAll(".pergunta");
  let answer = document.querySelectorAll(".textoResposta");
  for (let i = 0; i < perguntas.length; i++) {
    question[i].innerHTML = perguntas[i].pergunta;
    for (let index = 0; index < 3; index++) {
      answer[index].innerHTML = perguntas[i].respostas[index];
    }
  }
}
