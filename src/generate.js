const characterStrings = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: "0123456789",
  specialCharacters: ` !"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`
};

function validateChars(criteria) {
  return Object.keys(criteria)
    .filter(key => criteria[key] && key !== 'length' && key !== 'password');
}

function buildWordbank(criteria, characterStrings) {
  // use filtered criteria to map against the character strings
  return criteria.map(key => characterStrings[key]).join('');
}

function buildPassword(wordbank, length) {
  return new Array(length).fill(0).map(_ => {
    return wordbank[Math.floor(Math.random() * wordbank.length)];
  }).join('');
}

function generatePassword(criteria) {
  const filteredCriteria = validateChars(criteria);

  // make sure the filtered criteria has a non-zero length
  if (validateChars(criteria).length) {
    const wordbank = buildWordbank(filteredCriteria, characterStrings)
    return buildPassword(wordbank, criteria.length);
  }
  else {
    return "Invalid criteria. Please check one or more boxes below."
  }
}

function makeObject(name, value) {
  const returnVal = {};
  returnVal[name] = value;
  return returnVal;
}

export {
  generatePassword,
  makeObject
};