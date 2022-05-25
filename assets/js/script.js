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

// let click = document.querySelectorAll("");

let a = 0;
let indice = 0;

function Clicar(numeroPergunta, index, resposta) {
  if (respostaCerta[numeroPergunta] == resposta) {
    pergunta[index].classList.add("resTrue");
    a = a + 1;
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
  document.querySelector(".teste").innerHTML = "Aprovado";
  document.querySelector("#resultado").classList.remove("sem-tela");
  document.querySelector("#home").classList.add("sem-tela");
  document.querySelector("#jogo").classList.add("sem-tela");
  if (a >= 8) {
  } else if (a > 4 && a < 8) {
  } else if (a > 2 && a < 5) {
  } else {
  }
}

document.querySelector(".play").addEventListener("click", (e) => {
  document.querySelector("#jogo").classList.remove("sem-tela");
  document.querySelector("#home").classList.add("sem-tela");
});
