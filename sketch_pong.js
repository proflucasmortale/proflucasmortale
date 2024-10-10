// Variáveis para a posição e velocidade da bola
let ballX, ballY;
let ballSpeedX = 5;
let ballSpeedY = 3;

// Variáveis para as raquetes
let playerY;
let computerY;
let paddleWidth = 10;
let paddleHeight = 100;
let ballRadius = 10;
let computerSpeed = 3;

// Variáveis para a pontuação
let playerScore = 0;
let computerScore = 0;

// Função que configura o jogo
function setup() {
  // Cria o campo de jogo
  createCanvas(800, 400);
  // Inicializa as posições das raquetes e da bola
  playerY = (height - paddleHeight) / 2;
  computerY = (height - paddleHeight) / 2;
  ballX = width / 2;
  ballY = height / 2;
}

// Função que desenha o jogo a cada frame
function draw() {
  // Define a cor de fundo
  background(0);

  // Desenha a bola
  fill(255);
  ellipse(ballX, ballY, ballRadius * 2, ballRadius * 2);

  // Desenha as raquetes
  rect(0, playerY, paddleWidth, paddleHeight);
  rect(width - paddleWidth, computerY, paddleWidth, paddleHeight);

  // Desenha a pontuação
  textSize(32);
  textAlign(CENTER, CENTER);
  text(playerScore, width / 4, 50);
  text(computerScore, 3 * width / 4, 50);

  // Atualiza a posição da bola
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Verifica colisão da bola com as paredes superior e inferior
  if (ballY + ballRadius > height || ballY - ballRadius < 0) {
    ballSpeedY *= -1; // Inverte a direção da bola
  }

  // Verifica colisão da bola com a raquete do jogador
  if (ballX - ballRadius < paddleWidth && ballY > playerY && ballY < playerY + paddleHeight) {
    ballSpeedX *= -1; // Inverte a direção da bola
    let deltaY = ballY - (playerY + paddleHeight / 2);
    ballSpeedY = deltaY * 0.35; // Ajusta a velocidade vertical da bola
  }

  // Verifica colisão da bola com a raquete do computador
  if (ballX + ballRadius > width - paddleWidth && ballY > computerY && ballY < computerY + paddleHeight) {
    ballSpeedX *= -1; // Inverte a direção da bola
    let deltaY = ballY - (computerY + paddleHeight / 2);
    ballSpeedY = deltaY * 0.35; // Ajusta a velocidade vertical da bola
  }

  // Verifica se o computador marcou ponto
  if (ballX - ballRadius < 0) {
    computerScore++; // Incrementa a pontuação do computador
    resetBall(); // Reseta a bola
  }

  // Verifica se o jogador marcou ponto
  if (ballX + ballRadius > width) {
    playerScore++; // Incrementa a pontuação do jogador
    resetBall(); // Reseta a bola
  }

  // Movimenta a raquete do jogador com as setas do teclado
  if (keyIsDown(UP_ARROW)) {
    playerY -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerY += 10;
  }

  // Movimenta a raquete do computador com velocidade limitada
  if (ballY > computerY + paddleHeight / 2) {
    computerY += computerSpeed;
  } else if (ballY < computerY + paddleHeight / 2) {
    computerY -= computerSpeed;
  }
}

// Função que reseta a posição da bola
function resetBall() {
  ballX = width / 2;
  ballY = height / 2;
  ballSpeedX *= -1; // Inverte a direção da bola
}
