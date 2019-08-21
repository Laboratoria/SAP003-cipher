window.cipher = {
  encode: encode,
  decode: decode
};

function encode (msgCode, number) {
  let result = "";
  for (let i = 0; i < msgCode.length; i++) {
    let letter = (msgCode.charCodeAt(i) -65 + number) % 26 + 65;
    result += String.fromCharCode(letter);
  }

  return result;
}

function decode (msgCode, number) {

  let result = "";
  for (let i = 0; i < msgCode.length; i++) {
    let letter = (msgCode.charCodeAt(i) +65 - number) % 26 + 65;

    result += String.fromCharCode(letter);    
    
  }

  return result;
}
