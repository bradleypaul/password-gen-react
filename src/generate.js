// Assignment code here
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = lower.toUpperCase();
const numerals = "0123456789";
const specialChars = ` !"#$%&'()*+,-./:;<=>?@[]^_\`{|}~`;

// prompt user and generate password
function generatePassword({
  length, lowercase, uppercase, numbers, specialCharacters
}) {
  if (length >= 8 && length <= 128 && (lowercase || uppercase || numbers || specialCharacters)) {
    let wordbank = '';
    if (lowercase) {
      wordbank = lower;
    }

    if (uppercase) {
      wordbank += upper;
    }

    if (numbers) {
      wordbank += numerals;
    }

    if (specialCharacters) {
      wordbank += specialChars;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      const random = Math.floor(Math.random() * wordbank.length);
      password += wordbank[random];
    }

    return password;
  }
  else {
    return "Invalid criteria. Please check one or more boxes below."
  }
}

function makeObject(name, value) {
  const returnVal = {};
  console.log(name + " " + value)
  returnVal[name] = !value;
  return returnVal;
}

export {
  generatePassword,
  makeObject
};