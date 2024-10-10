let petalAngle = 0; 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);

  // Desenha o centro da flor
  fill("yellow");
  ellipse(0, 0, 50, 50);

  // Desenha as pétalas da flor
  fill("red");
  for (let i = 0; i < TWO_PI; i += PI / 3) {
    push();
    rotate(i);
    let openAngle = sin(petalAngle) * PI / 4; // Define o ângulo de abertura
    arc(30, 0, 40, 80, -openAngle, openAngle, PIE);
    pop();
  }
  // Aumenta o ângulo de abertura das pétalas
  petalAngle += 0.05;
}