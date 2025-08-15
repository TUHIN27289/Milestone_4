function totalFine(fare) {
  // You have to write your code here
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  } else {
    const finePrice = fare * 0.2;
    const serviceCharge = 30;
    const totalPrice = fare + finePrice + serviceCharge;
    return totalPrice;
  }
}

function onlyCharacter(str) {
  // You have to write your code here
  if (typeof str !== "string") {
    return "Invalid";
  } else {
    let decryptedMessage = str.split(" ").join("").toUpperCase();
    return decryptedMessage;
  }
}

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

function isSame(arr1, arr2) {
  // You have to write your code here
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  } else {
    if (arr1.length !== arr2.length) {
      return false;
    } else {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    }
  }
}

function resultReport(marks) {
  // You have to write your code here
  if (!Array.isArray(marks)) {
    return "Invalid";
  } else {
    let sum = 0;
    let finalScore = 0;
    let pass = 0;
    let fail = 0;
    for (let mark of marks) {
      sum = sum + mark;
      if (mark < 40) {
        fail++;
      } else {
        pass++;
      }
    }
    if (marks.length === 0) {
      finalScore = 0;
    } else {
      finalScore = Math.round(sum / marks.length);
    }
    return { finalScore: finalScore, pass: pass, fail: fail };
  }
}
