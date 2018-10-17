function btnCalculer_onclick()
{ 
 	var PoidsLivre, Kg;

 	PoidsLivre=parseFloat(document.getElementById("txtPoids").value);
 	Kg=(PoidsLivre/2.2);

 	console.log("Votre poids en kilogramme est de "+Kg);
}