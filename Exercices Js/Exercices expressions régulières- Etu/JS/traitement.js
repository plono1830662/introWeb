function btnValider_onclick()  //mettre la fonction dans un IF tester une fonction à la fois
{

   if (validerTel("txtValidation")===true) {
       document.getElementById("txtValidation").style.backgroundColor="white";
   }
   else{
       document.getElementById("txtValidation").style.backgroundColor="red";
   }
}

function validerNAS( Chaine )  // numéro d'assurance social 418 789 123
{
   var Valide=/^[0-9]{3} [0-9]{3} [0-9]{3}$/.test(document.getElementById(Chaine).value);
   return Valide;

}

function validerTel( Chaine )  // au format (418) 876-8373  un numéro ça change
{
    var Valide=/^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/.test(document.getElementById(Chaine).value);
    return Valide;
}

function validerCar( Chaine ) // des chaînes de caractères alphabétiques majuscule et minuscule et accepte le trait d'union pas obligatoire
{

}

function validerNo( Chaine )   // un chiffre peut etre 0 5 25 200 etc..
{

}

function verifierEntreDixTrente( Chaine ) //un chiffre entre 10 et 30
{

}

function verifierEntreUnVingt( Chaine ) //un chiffre entre 1 et 20
{

}