window.cipher = {
  encode: encode,
  decode: decode

  // consertar o decode minúsculo
};

function encode (number, msgCode) {
  let result = "";
  let letter = "";  

  for (let i = 0; i < msgCode.length; i++) {
     
    if(msgCode.charCodeAt(i) >= 65 && msgCode.charCodeAt(i) <= 90){
      letter = (msgCode.charCodeAt(i) - 65 + number) % 26 + 65;
      result += String.fromCharCode(letter);
   }else if(msgCode.charCodeAt(i) >= 97 && msgCode.charCodeAt(i) <= 122){
      letter = (msgCode.charCodeAt(i) - 97 + number) % 26 + 97;
      result += String.fromCharCode(letter); 
   }else{
      result += msgCode[i];      
    }
  }
  return result;
}

function decode (number, msgCode) {
  let result = "";
  let letter = "";
  
  for (let i = 0; i < msgCode.length; i++) {

    if(msgCode.charCodeAt(i) >= 65 && msgCode.charCodeAt(i) <= 90){
      letter = (msgCode.charCodeAt(i) + 65 - number) % 26 + 65;
      result += String.fromCharCode(letter);
    }else if(msgCode.charCodeAt(i) >= 97 && msgCode.charCodeAt(i) <= 122){
      letter = (msgCode.charCodeAt(i) -122 - number ) % 26 + 122;
      result += String.fromCharCode(letter); 
    }else{
      result += msgCode[i];      
    }
  }
  return result;
}