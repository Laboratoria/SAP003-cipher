window.cipher = {
  encode: encode,
  decode: decode
};

function encode (number, msgCode) {
  let result = "";
  

  for (let i = 0; i < msgCode.length; i++) {
    //let letter = "";
//    if(msgCode.charCodeAt(i) >= 97 && msgCode.charCodeAt(i) <= 122){//
//      let letter = ((msgCode.charCodeAt(i) - 97) + number) % 26 + 97;//
//      result += String.fromCharCode(letter);    //
//    }else{//


      let letter = (msgCode.charCodeAt(i) + number - 65) % 26 + 65;
      //let letter = (msgCode.charCodeAt(i) + number - 60) % 120 + 60;
      result += String.fromCharCode(letter);   
//    }//
  }

  return result;
}

function decode (number, msgCode) {
  let result = "";
  

  
  for (let i = 0; i < msgCode.length; i++) {
    //let letter = "";
//    if(msgCode.charCodeAt(i) >= 97 && msgCode.charCodeAt(i) <= 122){//
//      let letter = ((msgCode.charCodeAt(i) - 97) - number +26) % 26 + 97;//
//      result += String.fromCharCode(letter);//
//    }else{


      let letter = (msgCode.charCodeAt(i) + 65 - number) % 26 + 65;
      //let letter = (msgCode.charCodeAt(i) + 60 - number) % 120 + 60;
      result += String.fromCharCode(letter);   
//    }
  }
  return result;
}
