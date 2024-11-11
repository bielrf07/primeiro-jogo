let score = 0;
const square = document.getElementById('square');
const scoreDisplay = document.getElementById('score');

// Função para mover o quadrado para uma posição aleatória
function moveSquare() {
    const maxWidth = window.innerWidth - 60; // Largura máxima da tela - tamanho do quadrado
    const maxHeight = window.innerHeight - 60; // Altura máxima da tela - tamanho do quadrado

    // Gera uma posição aleatória para o quadrado
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    // Posiciona o quadrado na nova posição
    square.style.left = `${randomX}px`;
    square.style.top = `${randomY}px`;
}

// Função para atualizar a pontuação
function increaseScore() {
    score++;
    scoreDisplay.textContent = score;  // Atualiza o contador de pontos
}

// Evento de clique no quadrado
square.addEventListener('click', () => {
    increaseScore();
    moveSquare();
});

// Inicializa o jogo
moveSquare();  // Coloca o quadrado em uma posição inicial