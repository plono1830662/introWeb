function frmMembre_onclick()
{
    if(valideChampsObligatoires()===true){
        if(valideFormat()===true){



        }
    }

}

function valideChampsObligatoires()
{
    var Valide=true,tabCase=new Array("txtNom","txtPrenom","txtVille","txtTel","txtCodePostal");


    for(i=0;i<tabCase.length;i++){
        if(valideExiste(tabCase[i])!==false){
            Valide=true;
        }
    }


    return Valide;
}
function valideExiste(Case)
{
    var Valide=false;
    if(document.getElementById(Case).value==="")
    {
        Valide=false;
        document.getElementById(Case).style.borderColor="red";
    }
    else{
        Valide=true;
        document.getElementById(Case).style.borderColor="white";
    }
    return Valide;
}
function valideFormat()
{
    var Valide=true,tabCase=new Array("txtNom","txtPrenom","txtVille","txtTel","txtCodePostal","txtCodePerm");


    if (ValideNom(tabCase[0])===false){
        Valide=false;
        document.getElementById(tabCase[0]).style.borderColor="red";
    }
    if (ValideNom(tabCase[1])===false){
        Valide=false;
        document.getElementById(tabCase[1]).style.borderColor="red";
    }
    if (ValideNom(tabCase[2])===false){
        Valide=false;
        document.getElementById(tabCase[2]).style.borderColor="red";
    }
    if (ValideTel(tabCase[3])===false){
        Valide=false;
        document.getElementById(tabCase[3]).style.borderColor="red";
    }
    if (ValidePoste(tabCase[4])===false){
        Valide=false;
        document.getElementById(tabCase[4]).style.borderColor="red";
    }
    if (ValideCodePerm(tabCase[5])===false){
        Valide=false;
        document.getElementById(tabCase[5]).style.borderColor="red";
    }


    return Valide;
}
function ValideNom(Chaine)
{
    return /^[A-z]+\-?[A-z]*$/.test(document.getElementById(Chaine).value);
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