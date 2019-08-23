//function caesarFigureCode() 
let b1= document.getElementById("eText");

b1.addEventListener("click", function() {

  let msg1 = document.getElementById("msgCode").value;

  let number = parseInt(document.getElementById("move").value);

  let eText = window.cipher.encode(number, msg1);//

  document.getElementById("write-code").innerHTML = eText;

});


//function caesarFigureDecode() 
let b2= document.getElementById("dText");

b2.addEventListener("click", function() {

  let msg2 = document.getElementById("msgCode").value;

  let number = parseInt(document.getElementById("move").value);

  let dText = window.cipher.decode(number, msg2);//

  document.getElementById("write-decode").innerHTML = dText;

  
//ARRUMARRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
  //document.getElementById("cipher").style.visibility = "visible";
  //document.getElementById("write-code").innerHTML = "Essa é sua mensagem cifrada" + eText ;
});