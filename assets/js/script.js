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
let checked = document.querySelector('input[type="radio"]:checked');
checked.addEventListener();
console.log(checked.nodeValue);

function Clicar() {
  // for (let i = 0; i < 10; i++) {
}
// }
//   console.log(pergunta[i]);

function addClasse(valor) {
  for (let i = 0; i < respostaCerta.length; i++) {
    if (respostaCerta[i] == checked.nodeValue) {
      checked.classList.add("resTrue");
      console.log(checked);
    } else {
      checked.classList.add("resFalse");
      console.log(checked);
    }
  }
}
