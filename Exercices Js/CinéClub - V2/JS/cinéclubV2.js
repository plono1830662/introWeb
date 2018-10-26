function btnCalculer_onclick()
{
    var  PrixIn, Age, Rabais, PrixFin, Temps, Film;


    Film=document.getElementById("lstOptions").value;
    PrixIn=parseFloat(document.getElementById("txtBasePrix").value);
    Age=parseInt(document.getElementById("txtAge").value);
    if(document.getElementById("chkMiSessions").checked==true)
    {


        if (Age<=16)
        {
            if(document.getElementById("radMidi").checked==true)
            {
                Rabais=0.6;
                Temps="midi";
            }
            else {
                Rabais=0.4;
                Temps="soir";
            }
        }
        else{
            if(document.getElementById("radMidi").checked==true)
            {
                Rabais=0.3;
                Temps="midi";
            }
            else{
                Rabais=0;
                Temps="soir"
            }
        }
    }
    else{
        Rabais=0;

        if(document.getElementById("radMidi").checked==true)
        {
            Temps="midi";
        }
        else{
            Temps="soir"
        }

    }


    PrixFin=PrixIn-(PrixIn*Rabais);

    console.log("Un billet du "+Temps+" pour un spectateur de "+Age+" ans coûte " +PrixFin+"$ pour le film "+Film);

}