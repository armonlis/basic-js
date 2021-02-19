class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct
  }
               
  encrypt(message, key) {
      if (typeof(message) != 'string' || typeof(key) != 'string') throw Error('This is not message or/and key!');
      key = key.repeat(Math.ceil(message.length / key.length));
      key = key.toUpperCase().split('').map(el => el = el.charCodeAt(0) - 65);
      message = message.toUpperCase().split('')
      message.map((el, i) => el.charCodeAt(0) === 32 ? key.splice(i, 0, ' ') : el); 
      message = message.map((el, i) => !(el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90) ? el = el : el.charCodeAt(0) + key[i] <= 90 ? el = String.fromCharCode(el.charCodeAt(0) + key[i]) : el = String.fromCharCode(el.charCodeAt(0) + key[i] - 26));
  return this.direct ? message.join('') : message.reverse().join('');                                    
  }    
  
  decrypt(encryptedMessage, key) {
      if (typeof(encryptedMessage) != 'string' || typeof(key) != 'string') throw Error('This is not message or/and key!');
      key = key.repeat(Math.ceil(encryptedMessage.length / key.length));
      key = key.toUpperCase().split('').map(el => el = el.charCodeAt(0) - 65);
      encryptedMessage = encryptedMessage.toUpperCase().split('')
      encryptedMessage.map((el, i) => el.charCodeAt(0) === 32 ? key.splice(i, 0, ' ') : el); 
      encryptedMessage = encryptedMessage.map((el, i) => !(el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90) ? el = el : el.charCodeAt(0) - key[i] >= 65 ? el = String.fromCharCode(el.charCodeAt(0) - key[i]) : el = String.fromCharCode(el.charCodeAt(0) - key[i] + 26));
  return this.direct ? encryptedMessage.join('') : encryptedMessage.reverse().join('');                                    
  }    
}

module.exports = VigenereCipheringMachine;
