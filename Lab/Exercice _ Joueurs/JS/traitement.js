var tabJoueur= new Array(4), tabPoint=new Array(4),ctp,

ctp=0;


function btnAjouter_onclick()
{
    document.getElementById("lblNbreJoueur").innerHTML="Joueur "+(ctp+1);

    tabJoueur[ctp]=document.getElementById("txtNom");
    tabPoint[ctp]=parseInt(document.getElementById("txtPoints").value);

    ctp++;

    if(ctp==3)
    {
        document.getElementById("btnRechercher").disable="false";
        document.getElementById("btnTrouverMoy").disable="false";
        document.getElementById("btnTrouverMeilleur").disable="false";
        document.getElementById("btnTrouverPire").disable="false";
    }
}