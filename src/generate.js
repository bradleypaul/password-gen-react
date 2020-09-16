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
  return criteria.reduce((accumulator, key) => accumulator + characterStrings[key], '');
}

function buildPassword(wordbank, length) {
  let retVal = '';
  for(let i = 0; i < length; i++) {
    retVal += wordbank[Math.floor(Math.random() * wordbank.length)];
  }
  return retVal;
}

function generatePassword(criteria) {
  console.log(criteria);
  const filteredCriteria = validateChars(criteria);

  // make sure the filtered criteria has a non-zero length
  if (validateChars(criteria).length) {
    const wordbank = buildWordbank(filteredCriteria, characterStrings);
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