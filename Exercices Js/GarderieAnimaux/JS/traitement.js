function btnCalculer_onclick()
{ 
 	var Veterinaire,NbreJours,Serv,Prix,Message,CoutTot, CoutTotTaxe;

    Veterinaire=document.getElementById("lstVeterinaire");
    NbreJours=parseInt(document.getElementById("txtNbreJours").value);

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

    CoutTot=(Prix*NbreJours)+Serv;
    CoutTotTaxe=CoutTot+(CoutTot*0.14975);

    console.log("Vétérinaire responsable est"+Veterinaire+". Le prix de la garde de votre "+Message+" est de "+CoutTotTaxe.toFixed(2)+"$ pour "+NbreJours+" jours");


}