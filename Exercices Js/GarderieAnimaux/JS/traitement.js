function btnCalculer_onclick()
{ 
 	var Veterinaire,NbreJours,Serv,Prix,Message,CoutTot, CoutTotTaxe, Rabais,Salaire,NbreHeure;

    Veterinaire = document.getElementById("lstVeterinaire").value;
    NbreJours=parseInt(document.getElementById("txtNbreJours").value);
    NbreHeure=parseInt(document.getElementById("txtNbreHeure").value);

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

    CoutTot=(Prix*NbreJours)+Serv+Salaire;
    CoutTotTaxe=(CoutTot-(CoutTot*Rabais))+(CoutTot*0.14975);

    document.getElementById("lblMessage").innerHTML="Vétérinaire responsable est "+Veterinaire+". Le prix de la garde de votre "+Message+" est de "+CoutTotTaxe.toFixed(2)+"$ pour "+NbreJours+" jours.";


}
function btnAfficher1_onclick()
{

    document.getElementById("imgAnimal").src="img/Chien.png";
}
function btnAfficher2_onclick()
{

    document.getElementById("imgAnimal").src="img/Chat.png";
}