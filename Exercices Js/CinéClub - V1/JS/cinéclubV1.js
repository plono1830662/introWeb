function btnCalculer_onclick()
{
    var  PrixIn, Age, Rabais,PrixFin;

    PrixIn=parseFloat(document.getElementById("txtBasePrix").value);
    Age=parseInt(document.getElementById("txtAge").value);

    if (Age<=16)
    {
        if(document.getElementById("radMidi").checked==true)
        {
            Rabais=0.6;
        }
        else {
            Rabais=0.4;
        }
    }
    else{
        if(document.getElementById("radMidi").checked==true)
        {
            Rabais=0.3;
        }
        else{
            Rabais=0;
        }
    }

    PrixFin=PrixIn-(PrixIn*Rabais);

    console.log("Le prix de votre billet est de "+PrixFin+"$");

}