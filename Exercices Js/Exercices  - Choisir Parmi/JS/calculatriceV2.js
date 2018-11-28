
function btnCalculer_onclick()
{

    var Nbre1,Nbre2,Operateur;

    if (valideChampsObligatoires()===true)
    {
        if(valideFormat()===true){
            Saisir();
        }


    }

}
function Calculer(Nbr1,Nbr2,Operateur)
{

    var Resultat=0;

    switch(Operateur)
    {
        case "+":
            Resultat=Nbr1+Nbr2;
            break;
        case "-":
            Resultat=Nbr1-Nbr2;
            break;
        case "*":
            Resultat=Nbr1*Nbr2;
            break;
        case"/":
            Resultat=Nbr1/Nbr2;
            break;
    }
    return Resultat;
}
function Saisir()
{
    var Nbre1,Nbre2,Operateur,Resultat;

    Nbre1=parseInt(document.getElementById("txtNbre1").value);
    Nbre2=parseInt(document.getElementById("txtNbre2").value);
    Operateur=document.getElementById("txtOperateur").value;
    Resultat=Calculer(Nbre1,Nbre2,Operateur);
    document.getElementById("lblMessage").innerHTML=Resultat;

}
function valideChampsObligatoires()
{
    var Valide=true,tabCalcul=new Array("txtNbre1","txtNbre2","txtOperateur");


    for(i=0;i<tabCalcul.length;i++){
        if(valideExiste(tabCalcul[i])!==false){
            Valide=true;
        }
    }


    return Valide;
}

function valideFormat()
{
    var Valide=true,tabCalcul=new Array("txtNbre1","txtNbre2","txtOperateur");


    if (ValideChaine(tabCalcul[0])===false){
        Valide=false;
        document.getElementById(tabCalcul[0]).style.backgroundColor="red";
    }

    if (ValideChaine(tabCalcul[1])===false){
        Valide=false;
        document.getElementById(tabCalcul[1]).style.backgroundColor="red";
    }

    if (ValideOP(tabCalcul[2])===false){
        Valide=false;
        document.getElementById(tabCalcul[2]).style.backgroundColor="red";
    }

    return Valide;
}

function valideExiste(Case)
{
    var Valide=false;
    if(document.getElementById(Case).value==="")
    {
        Valide=false;
        document.getElementById(Case).style.backgroundColor="red";
    }
    else{
        Valide=true;
        document.getElementById(Case).style.backgroundColor="white";
    }
    return Valide;
}

function ValideChaine(Chaine)
{
    return /^[0-9][0-9]*$/.test(document.getElementById(Chaine).value);
}

function ValideOP(Chaine)
{
    return /^\+|\-|\*|\/$/.test(document.getElementById(Chaine).value);
}
