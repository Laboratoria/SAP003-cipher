let b1= document.getElementById("eText");

b1.addEventListener("click", () => {

  let msg1 = document.getElementById("msgCode").value;

  let number = parseInt(document.getElementById("move").value);

  let eText = window.cipher.encode(number, msg1);

  document.getElementById("write-decode").innerHTML = "";
  document.getElementById("write-code").innerHTML = "Essa é sua mensagem cifrada: " + "</br>" + "</br>" + eText;

});

let b2= document.getElementById("dText");

b2.addEventListener("click", () => {

  let msg2 = document.getElementById("msgCode").value;

  let number = parseInt(document.getElementById("move").value);

  let dText = window.cipher.decode(number, msg2);

  document.getElementById("write-code").innerHTML = "";
  document.getElementById("write-decode").innerHTML = "Essa é sua mensagem decifrada: " + "</br>"  + "</br>" + dText;

});
