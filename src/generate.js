// Assignment code here
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = lowercase.toUpperCase();
const numerals = "0123456789";
const specialCharacters = ` !"#$%&'()*+,-./:;<=>?@[]^_\`{|}~`;

// prompt user and generate password
function generatePassword({
    length, includeLowercase, includeUppercase, includeNumbers, includeSpecialCharacters
}) {
  if (length >= 8 && length <= 128) {
    if (includeLowercase || includeUppercase || includeNumbers || includeSpecialCharacters) {
      let wordbank = '';
      if (includeLowercase) {
        wordbank += lowercase;
      }

      if (includeUppercase) {
        wordbank += uppercase;
      }

      if (includeNumbers) {
        wordbank += numerals;
      }

      if (includeSpecialCharacters) {
        wordbank += specialCharacters;
      }

      let password = "";
      for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * wordbank.length);
        password += wordbank[random];
      }

      return password;
    }
  }
}

export default generatePassword;