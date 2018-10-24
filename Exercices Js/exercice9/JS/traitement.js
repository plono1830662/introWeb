function btnCalculer_onclick()
{ 
    var Etu, Ans65, Norm, NrbBill, Tot, TotFin, Rab;

    Etu=parseInt(document.getElementById("txtEtu").value);
    Ans65=parseInt(document.getElementById("txtAns65").value);
    Norm=parseInt(document.getElementById("txtNorm").value);

    NrbBill=Etu+Ans65+Norm;
    Tot=(Etu*12)+(Ans65*15)+(Norm*20);

    if(NrbBill>=5){
        Rab=0.1;
    }
    else{
        Rab=0.0;
    }

    TotFin=Tot-(Tot*Rab);

    console.log("Le prix total de vos billets est de "+TotFin+" $");

}