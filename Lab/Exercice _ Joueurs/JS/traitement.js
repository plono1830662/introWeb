var tabJoueur= new Array(4), tabPoint=new Array(4),Ctp,

Ctp=0;


function btnAjouter_onclick()
{


    tabJoueur[Ctp]=document.getElementById("txtNom").value;
    tabPoint[Ctp]=parseInt(document.getElementById("txtPoints").value);

    Ctp=Ctp+1;
    if(Ctp==4)
    {
        document.getElementById("btnAjouter").disabled=true;
        document.getElementById("btnRechercher").disabled=false;
        document.getElementById("btnTrouverMoy").disabled=false;
        document.getElementById("btnTrouverMeilleur").disabled=false;
        document.getElementById("btnTrouverPire").disabled=false;
        document.getElementById("lblNbreJoueur").innerHTML="Joueur "+(Ctp);
    }
    else {
        document.getElementById("lblNbreJoueur").innerHTML="Joueur "+(Ctp+1);
    }


}
//---------Moyenne---------//
function CalculMoy()
{
    var Moy;
    Moy=0;

    for(i=0;i<tabPoint.length;i++)
    {
        Moy+=tabPoint[i];
    }
    Moy=Moy/tabPoint.length;
    return Moy;

}
function btnTrouverMoy_onclick()
{
    var Moy=CalculMoy();
    document.getElementById("lblReponse").innerHTML="La moyenne est de "+Moy;
}


//----------Meilleur--------//
function TrouverMeil()
{
    var Meil,Nom;
    Meil=0;


    for(i=0;i<tabPoint.length;i++)
    {
        if(tabPoint[i]>Meil)
        {
            Meil=tabPoint[i];
            Nom=tabJoueur[i];
        }
        else{
            Meil=Meil;
            Nom=Nom;
        }
    }
    return Nom;
}
function btnTrouverMeilleur_onclick()
{
    var Nom=TrouverMeil();
    document.getElementById("lblReponse").innerHTML="La meilleur joueur est "+Nom;

}
//--------Pire-------//
function TrouverPire()
{
    var Pire,Nom;
    Pire=9999;


    for(i=0;i<tabPoint.length;i++)
    {
        if(tabPoint[i]<Pire)
        {
            Pire=tabPoint[i];
            Nom=tabJoueur[i];
        }
        else{
            Pire=Pire;
            Nom=Nom;
        }
    }
    return Nom;
}
function btnTrouverPire_onclick()
{
    var Nom=TrouverPire();
    document.getElementById("lblReponse").innerHTML="La pire joueur est "+Nom;

}

//-------Chercher------//
function btnRechercher_onclick()
{
    var NomRech,Nom,i;
    i=0;
    NomRech=document.getElementById("txtNom").value;

    while (Nom!=NomRech)
    {
       if(tabJoueur[i]==NomRech)
       {
           Nom=tabJoueur[i];
           document.getElementById("lblReponse").innerHTML=Nom+" est le joueur "+(i+1);
       }
       else{
           if(i<4)
           {
               i++;
           }
           else{
               document.getElementById("lblReponse").innerHTML="Ce joueur n'est pas dans l'équipe";
               Nom=NomRech;

           }
       }
    }


}