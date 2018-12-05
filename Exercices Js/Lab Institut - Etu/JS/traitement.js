function frmMembre_onsubmit()
{
    var Valide= false;


    if(valideChampsObligatoires()===true){
        document.getElementById("lblMessageErreur").innerHTML="";
        if(valideFormat()===true){
            if(confirm("Continuer")===true){
                document.getElementById("lblMessageErreur").innerHTML="Une place de membre vous couteras "+ calculerPrix()+" $";
                Valide=true;
            }
        }
        else{
            document.getElementById("lblMessageErreur").innerHTML="Toutes les cases doivent être remplies correctement";
        }
    }
    else{
        document.getElementById("lblMessageErreur").innerHTML="Tous les champs ayant une étoile sont obligatoire";
    }
    return Valide;

}
function calculerPrix()
{
    var prix=0;
    if(document.getElementById("type").value==="adulte"){
        prix=80;
    }
    else{
        if(document.getElementById("type").value==="étudiant"){
            prix=60;
        }
        else{
            prix=90;
        }
    }
    return prix;
}
function valideChampsObligatoires()
{
    var Valide=true,tabCase=new Array("txtNom","txtPrenom","txtVille","txtTel");


    for(i=0;i<tabCase.length;i++){
        if(valideExiste(tabCase[i])!==false){
            Valide=true;
        }
        else{
            Valide=false;
        }
    }


    return Valide;
}
function valideExiste(Case)
{
    var Valide=true;
    if(document.getElementById(Case).value==="")
    {
        Valide=false;
        document.getElementById(Case).style.borderColor="red";
    }
    else{
        Valide=true;
        document.getElementById(Case).style.borderColor="";
    }
    return Valide;
}
function valideFormat()
{
    var Valide=true,tabCase=new Array("txtNom","txtPrenom","txtAdresse","txtVille","txtTel","txtCodePostal","txtCodePerm");


    if (ValideNom(tabCase[0])===false){
        Valide=false;
        document.getElementById(tabCase[0]).style.borderColor="red";
    }
    if (ValideNom(tabCase[1])===false){
        Valide=false;
        document.getElementById(tabCase[1]).style.borderColor="red";
    }
    if (ValideNom(tabCase[3])===false){
        Valide=false;
        document.getElementById(tabCase[3]).style.borderColor="red";
    }
    if (ValideTel(tabCase[4])===false){
        Valide=false;
        document.getElementById(tabCase[4]).style.borderColor="red";
    }
    if (document.getElementById(tabCase[5]).value!==""){
        if(ValidePoste(tabCase[5])===false){
            Valide=false;
            document.getElementById(tabCase[5]).style.borderColor="red";
        }
        else{
            document.getElementById(tabCase[5]).style.borderColor="";
        }

    }
    if (document.getElementById(tabCase[6]).value!==""){
        if(ValideCodePerm(tabCase[6])===false){
            Valide=false;
            document.getElementById(tabCase[6]).style.borderColor="red";
        }
        else{
            document.getElementById(tabCase[6]).style.borderColor="";
        }
    }




    return Valide;
}
function ValideNom(Chaine)
{
    return /^[A-é]+\-?[A-z]*$/.test(document.getElementById(Chaine).value);
}
function ValideTel(Chaine)
{
    return /\([0-9]{3}\) [0-9]{3}-[0-9]{4}/.test(document.getElementById(Chaine).value);
}
function ValidePoste(Chaine)
{
    return /([0-9][A-z][0-9] [A-z][0-9][A-z])|([A-z][0-9][A-z] [0-9][A-z][0-9])/.test(document.getElementById(Chaine).value);
}
function ValideCodePerm(Chaine)
{
    return /^[A-z]{4}[0-9]{8}$/.test(document.getElementById(Chaine).value);
}


