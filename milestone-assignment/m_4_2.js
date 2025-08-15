function onlyCharacter(str) {
  // You have to write your code here
  if (typeof str !== "string") {
    return "Invalid";
  } else {
    let decryptedMessage = str.split(" ").join("").toUpperCase();
    return decryptedMessage;
  }
}


console.log(onlyCharacter('true'))
//console.log(onlyCharacter());
// console.log(
//   onlyCharacter(`AIUB strongly upholds @@@@@@@@@@ ********8the values of being open-minded and inclusive of all cultures, religions, political views, and social ideologies. Students, faculty members, and officials\n\n have full liberty to pursue such personal choices outside the university.

// Please be reminded that AIUB is a non-political institution of higher education.\n\n As per the AIUB Code of Conduct, all members of the university community are expected to abide by its rules and regulations.`)
// );

//console.log(onlyCharacter("AIUB strongly upholds... outside the university.\n\nPlease be reminded... regulations."));
