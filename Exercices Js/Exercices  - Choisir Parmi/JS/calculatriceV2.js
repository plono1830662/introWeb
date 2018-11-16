
function btnCalculer_onclick()
{

    var Nbre1,Nbre2,Operateur;

    if (valideChampsObligatoires()===true)
    {
        Saisir();
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
    var Valide=false,tabCalcul=new Array(3);

    tabCalcul[0]=valideExiste("txtNbre1");
    tabCalcul[1]=valideExiste("txtNbre2");
    tabCalcul[2]=valideExiste("txtOperateur");

    for(i=0;i<tabCalcul.length;i++){
        if(tabCalcul[i]!=Valide){
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
        document.getElementById(Case).style.backgroundColor="red";
    }
    else{
        Valide=true;
        document.getElementById(Case).style.backgroundColor="white";
    }
    return Valide;
}