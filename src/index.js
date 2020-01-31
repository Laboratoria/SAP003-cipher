let encodeButton = document.getElementById("encodeButton");
let decodeButton = document.getElementById("decodeButton");

encodeButton.addEventListener("click", () => {
  let msg = document.getElementById("msgCode").value;
  let number = parseInt(document.getElementById("move").value);
  let encodetext = window.cipher.encode(number, msg);
  document.getElementById("write-decode").innerHTML = "";
  document.getElementById("write-code").innerHTML = "Essa é sua mensagem cifrada: " + "</br>" + "</br>" + encodetext;
});

decodeButton.addEventListener("click", () => {
  let msg = document.getElementById("msgCode").value;
  let number = parseInt(document.getElementById("move").value);
  let decodeText = window.cipher.decode(number, msg);
  document.getElementById("write-code").innerHTML = "";
  document.getElementById("write-decode").innerHTML = "Essa é sua mensagem decifrada: " + "</br>"  + "</br>" + decodeText;
});