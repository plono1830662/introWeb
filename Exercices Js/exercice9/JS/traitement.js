function btnCalculer_onclick()
{ 
    var Etu, Ans65, Norm, NrbBill, Tot, TotFin, Rab;

    Etu=parseFloat(document.getElementById("txtEtu").value);
    Ans65=parseFloat(document.getElementById("txtAns65").value);
    Norm=parseFloat(document.getElementById("txtNorm").value);

    NrbBill=Etu+Ans65+Norm;
    Tot=(Etu*12.0)+(Ans65*15.0)+(Norm*20.0);

    if(NrbBill>=5){
        Rab=0.1;
    }
    else{
        Rab=0.0;
    }

    TotFin=Tot-(Tot*Rab);

    console.log("Le prix total de vos billets est de "+TotFin+" $");

}