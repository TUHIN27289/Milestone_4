function bestTeam(player1, player2) {
  // You have to write your code here
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }
  let player1Score = player1.foul + player1.cardY + player1.cardR;
  let player2Score = player2.foul + player2.cardY + player2.cardR;
  if (player1Score > player2Score) {
    return player2.name;
  } else if (player1Score < player2Score) {
    return player1.name;
  } else {
    return "Tie";
  }
}

const nameAVI = { name: "Brazil", foul: 5, cardY: 1, cardR: 0 };

const nameAVI1 = { name: "Argentina", foul: 7, cardY: 0, cardR: 0 };

const res = bestTeam(nameAVI, nameAVI1);
console.log(res);
