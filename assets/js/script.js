const respostaCerta = [
  "Diesel",
  "EMU",
  "1965",
  "Ganímedes",
  "Eisenhower",
  "EUA",
  "2030",
  "Helio-3",
  "5 dias",
  "Sim",
];

let pergunta = document.querySelectorAll(".textoResposta");

let a = 10;
let indice = 0;

function Clicar(numeroPergunta, index, resposta) {
  if (respostaCerta[numeroPergunta] == resposta) {
    pergunta[index].classList.add("resTrue");
  } else {
    pergunta[index].classList.add("resFalse");
    a = a - 1;
  }
  numeroPergunta += 1;

  indice = indice + 1;

  if (indice == 10) {
    resultado(a);
  }
  let checked = document.getElementsByName(`res${numeroPergunta}`);
  for (let i = 0; i < 3; i++) {
    if (!checked[i].checked == true) {
      checked[i].classList.add("sem-click");
      checked[i].disabled = true;
    }
  }
}

function resultado(valor) {
  let texto = "";
  let textoFinal = "";
  console.log(valor);
  if (valor >= 8) {
    texto = "Aprovado";
    textoFinal = "Aeeeeee!!! Partiu Lua";
    document.querySelector("#astronauta1").classList.remove("sem-tela");
  } else if (valor > 4 && valor < 8) {
    texto = "Reprovado";
    textoFinal = "Quase!!! Podemos tentar depois";
    document.querySelector("#astronauta2").classList.remove("sem-tela");
  } else if (valor > 2 && valor < 5) {
    texto = "Reprovado";
    textoFinal = "Eita!!! Precisa estudar mais";
    document.querySelector("#astronauta3").classList.remove("sem-tela");
  } else {
    texto = "Reprovado";
    document.querySelector("#astronauta4").classList.remove("sem-tela");
    textoFinal = "Nosss!!! Que nota ruim, melhor virar DJ";
  }
  document.querySelector(".resultado").innerHTML = texto;
  document.querySelector(".texto-final").innerHTML = textoFinal;
  document.querySelector("#resultado").classList.remove("sem-tela");
  document.querySelector("#home").classList.add("sem-tela");
  document.querySelector("#jogo").classList.add("sem-tela");
}

document.querySelector(".play").addEventListener("click", (e) => {
  document.querySelector("#jogo").classList.remove("sem-tela");
  document.querySelector("#home").classList.add("sem-tela");
});
