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
const res = resultReport([]);
console.log(res);
