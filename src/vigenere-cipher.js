const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 const alph = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

class VigenereCipheringMachine {
  constructor(stright = true) {
    this.stright = stright;
  }

  encrypt(message, key) {

    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    
    message = message.toUpperCase();
    key = key.toUpperCase();


    let cryptogram = message.split("").map((item) => {
      return alph.indexOf(item) !== -1 ? alph.indexOf(item) : item;
    });
    //console.log(`cryptogram ${cryptogram}`);

    let keys = key.split("");
    let keyValues = [];
    let tempKey = [...key];
    for (let i = 0; i < cryptogram.length; i++) {
      if (typeof cryptogram[i] !== "number") {
        keyValues.push(cryptogram[i]);
      } else {
        let currKey;
        if (tempKey.length != 0) {
          currKey = tempKey.shift();
          keyValues.push(currKey);
        } else {
          tempKey = [...key];
          currKey = tempKey.shift();
          keyValues.push(currKey);
        }
      }
    }
    //console.log(keyStream);
    keyValues = keyValues.map((item) => {
      return typeof item === "number" ? alph.indexOf(item) : item;
    });
    //console.log(`keyValues ${keyValues}`);

    let keyStream = keyValues.map((item) => {
      return alph.includes(item) ? alph.indexOf(item) : item;
    });
    //console.log(`keyStream ${keyStream}`);

    let encrypted = [];
    for (let i = 0; i < cryptogram.length; i++) {
      if (typeof cryptogram[i] === "number") {
        encrypted.push((cryptogram[i] + keyStream[i]) % 26);
      } else {
        encrypted.push(cryptogram[i]);
      }
    }

    //console.log(`encrypted ${encrypted}`);

    let encryptedAplhabetical = encrypted.map((item) => {
      return typeof item !== "number" ? item : alph[item];
    });
    //console.log(encryptedAplhabetical);

    return this.stright
      ? encryptedAplhabetical.join("")
      : encryptedAplhabetical.reverse().join("");
  }

  decrypt(message, key) {

    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase().split("");
    key = key.toUpperCase();

    let decryptedNum = message.map((item) => {
      return alph.includes(item) ? alph.indexOf(item) : item;
    });
    console.log(`decryptedNum ${decryptedNum}`);

    let keyValues = [];
    let tempKey = [...key];
    for (let i = 0; i < decryptedNum.length; i++) {
      if (typeof decryptedNum[i] !== "number") {
        keyValues.push(decryptedNum[i]);
      } else {
        let currKey;
        if (tempKey.length != 0) {
          currKey = tempKey.shift();
          keyValues.push(currKey);
        } else {
          tempKey = [...key];
          currKey = tempKey.shift();
          keyValues.push(currKey);
        }
      }
    }
    keyValues = keyValues.map((item) => {
      return typeof item === "number" ? alph.indexOf(item) : item;
    });
    console.log(`keyValues ${keyValues}`);

    let keyStream = keyValues.map((item) => {
      return alph.includes(item) ? alph.indexOf(item) : item;
    });
    console.log(`keyStream ${keyStream}`);

    let keys = [];
    for (let i = 0; i < decryptedNum.length; i++) {
      if (typeof decryptedNum[i] === "number") {
        decryptedNum[i] - keyStream[i] < 0
          ? keys.push(decryptedNum[i] - keyStream[i] + 26)
          : keys.push(decryptedNum[i] - keyStream[i]);
      } else {
        keys.push(decryptedNum[i]);
      }
    }
    console.log(`keys ${keys}`);

    let decrypted = [];
    keys.map((item) => {
      return typeof item !== "number" ? decrypted.push(item) : decrypted.push(alph[item]);
    });
    console.log(`decrypted ${decrypted}`);

    return this.stright
      ? decrypted.join("")
      : decrypted.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
