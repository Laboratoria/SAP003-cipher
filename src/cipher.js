window.cipher = {
  encode: encode,
  decode: decode
};

function encode (number, msg) {
  let result = "";
  for (let letter of msg) {
    const msgCode = letter.charCodeAt();
    const upperCaseLetter = (msgCode >= 65 && msgCode <= 90);
    const lowerCaseLetter = (msgCode >= 97 && msgCode <= 122);
    const specialCharacters = (msgCode >= 32 && msgCode <= 64);  
    if (upperCaseLetter) {
      result += String.fromCharCode((((msgCode - 65 + number) % 26)+65));
    }
    if (lowerCaseLetter) {
      result += String.fromCharCode((((msgCode - 97 + number) % 26)+ 97));
    }
    if (specialCharacters) {
      result += String.fromCharCode(msgCode)
    }
  }
  return result;
}

function decode (number, msg) {
  let result = "";  
  for (let letter of msg) {
    const msgCode = letter.charCodeAt();
    const upperCaseLetter = (msgCode >= 65 && msgCode <= 90);
    const lowerCaseLetter = (msgCode >= 97 && msgCode <= 122);
    const specialCharacters = (msgCode >= 32 && msgCode <= 64);  
    if (upperCaseLetter) {
      result += String.fromCharCode((((msgCode - 90 - number) % 26) + 90));
    }
    if (lowerCaseLetter) {
      result += String.fromCharCode((((msgCode - 122 - number) % 26) + 122));
    }
    if (specialCharacters) {
      result += String.fromCharCode(msgCode)
    }  
  }
  return result
}