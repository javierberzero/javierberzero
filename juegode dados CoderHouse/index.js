let player = prompt("Ingrese nombre del jugador 1").toLowerCase();
let enemy = prompt("Ingrese nombre del jugador 2").toLowerCase();
while (player === enemy) {
  enemy = prompt("Elija nombre distinto a " + player);
}

let hitPointsP = 100;
let hitPointsE = 100;
let minHitPointsE = 0;
let minHitPointsP = 0;

function whoAttacks() {
  const dado = Math.floor(Math.random() * 20) + 1;
  const danio = Math.floor(Math.random() * 10) + 1;

  console.log(dado + " valor dado 20");

  if (dado >= 11) {
    hitPointsE -= danio;

    if (hitPointsE <= minHitPointsE) {
      console.log("Player wins");
    }
    console.log(danio + " daño");
    console.log("Ataca " + player);
    console.log(hitPointsE + " Hitpoints left");
  } else if (dado <= 10) {
    hitPointsP -= danio;

    if (hitPointsP <= minHitPointsP) {
      console.log("enemy wins");
    }
    console.log(danio + " daño");

    console.log("Ataca " + enemy);
    console.log(hitPointsP + " hitPoints left");
  }
}
