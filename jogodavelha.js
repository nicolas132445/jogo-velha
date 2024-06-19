const board = document.getElementById("board");
const casinhas = board.querySelectorAll(".casinha");
let jogadas = 0;

for (let i = 0; i < casinhas.length; i++) {
  casinhas[i].addEventListener('click', casinhaclick);
}

function casinhaclick() {
  if (this.innerHTML == "") {
    if (jogadas % 2 == 0) {
      this.innerHTML = "X";
    } else {
      this.innerHTML = "O";
    }
    jogadas += 1;
  }
  
  if (jogadas >= 5) {
    verificaGanhador();  // Chama verificaGanhador() quando pelo menos 5 jogadas foram feitas
  }
}

function verificaGanhador() {
  // Aqui você deve implementar a lógica para verificar se há um ganhador
  // Exemplo simples: verificar todas as combinações possíveis de vitória
  const linhas = [
    [0, 1, 2],  // Linhas
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],  // Colunas
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],  // Diagonais
    [2, 4, 6]
  ];

  for (let linha of linhas) {
    const [a, b, c] = linha;
    if (casinhas[a].innerHTML !== "" &&
        casinhas[a].innerHTML === casinhas[b].innerHTML &&
        casinhas[a].innerHTML === casinhas[c].innerHTML) {
      alert(`Jogador ${casinhas[a].innerHTML} ganhou!`);
      reiniciarJogo();
      return;
    }
  }

  if (jogadas === 9) {
    alert("Empate!");
    reiniciarJogo();
  }
}

function reiniciarJogo() {
  // Limpa o conteúdo de todas as casinhas e reinicia as variáveis
  for (let i = 0; i < casinhas.length; i++) {
    casinhas[i].innerHTML = "";
  }
  jogadas = 0;
}