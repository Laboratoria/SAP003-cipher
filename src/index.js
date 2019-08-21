//function caesarFigureCode() 
let b1= document.getElementById("eText");

b1.addEventListener("click", function() {

  let msg1 = document.getElementById("msgCode").value;

  let number = parseInt(document.getElementById("move").value);

  let eText = window.cipher.encode(msg1, number);

  document.getElementById("write-code").innerHTML = eText;

});

let b2= document.getElementById("dText");

//function caesarFigureDecode() 
b2.addEventListener("click", function() {

  let msg2 = document.getElementById("msgCode").value;

  let number = parseInt(document.getElementById("move").value);

  let dText = window.cipher.decode(msg2, number);

  document.getElementById("write-decode").innerHTML = dText;
});