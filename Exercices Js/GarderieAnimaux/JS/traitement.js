var Salaire, NbreHeure, Veterinaire, NbreJours, Serv, Prix, Message, CoutTot , CoutTotTaxe, Rabais;

Salaire=0;
NbreHeure=0;
Veterinaire="";
CoutTot = 0;
Prix = 0;
Serv = 0;
NbreJours = 0;
CoutTotTaxe = 0;
Rabais = 0;


function VerifierCase()
{
    var Valide=false,tabValide=new Array(3);
    tabValide[0]=valideExiste("txtNbreHeure");
    tabValide[1]=valideExiste("txtNbreJours");
    tabValide[1]=valideExiste("txtNomClient");

    for(i=0;i<tabValide.length;i++){
        if(tabValide[i]!=Valide){
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
function CalculerSalaire()
{
    Veterinaire = document.getElementById("lstVeterinaire").value;
    NbreHeure=parseInt(document.getElementById("txtNbreHeure").value);
    switch(Veterinaire)
    {
        case "Audrey Bouchard":
            Salaire=NbreHeure*25;
            break;
        case "Stéphane Tremblay":
            Salaire=NbreHeure*35;
            break;
        case "Maxime Simard":
            Salaire=NbreHeure*40;
            break;
        case "Mélissa Caron":
            Salaire=NbreHeure*45;
            break;
    }
}

function ChoisirAnimal()
{
    if(document.getElementById("chkServ").checked==true)
    {
        Serv=5;
    }
    else {
        Serv=0;
    }

    if(document.getElementById("radChien").checked==true)
    {
        Prix= 16.0;
        Message="chien";
    }
    else{
        Prix=17.0;
        Message="chat";
    }
}

function CalculerRabais()
{
    NbreJours=parseInt(document.getElementById("txtNbreJours").value);
    if(NbreJours==1&&NbreJours<=5)
    {
        Rabais=0;
    }
    else {
        if(NbreJours>5&&NbreJours<=10)
        {
            Rabais=0.05;
        }
        else{
            if (NbreJours>10&&NbreJours<=30)
            {
                Rabais=0.1;
            }
            else{
                Rabais=0.15;
            }
        }
    }
}

function CalculerTotal()
{
    CoutTot=(Prix*NbreJours)+Serv+Salaire;
    CoutTotTaxe=(CoutTot-(CoutTot*Rabais))+(CoutTot*0.14975);
}

function btnCalculer_onclick()
{

    if(VerifierCase()===true){
        ChoisirAnimal();
        CalculerSalaire();
        CalculerRabais();
        CalculerTotal();
        document.getElementById("lblMessage").innerHTML="Vétérinaire responsable est "+Veterinaire+". Le prix de la garde de votre "+Message+" est de "+CoutTotTaxe.toFixed(2)+"$ pour "+NbreJours+" jours.";
    }





}
function btnAfficher1_onclick()
{

    document.getElementById("imgAnimal").src="img/Chien.png";
}
function btnAfficher2_onclick()
{

    document.getElementById("imgAnimal").src="img/Chat.png";
}