var  PrixIn, Age, Rabais, PrixFin, Temps, Film;


Film=document.getElementById("lstOptions").value;

function trouverAge()
{
    Age=parseInt(document.getElementById("txtAge").value);

    if(document.getElementById("chkMiSession").checked==true)
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
}

function calculerPrix()
{
    PrixIn=parseFloat(document.getElementById("txtBasePrix").value);
    trouverAge();
    PrixFin=PrixIn-(PrixIn*Rabais);
}

function btnCalculer_onclick()
{
    calculerPrix();
    console.log("Un billet du "+Temps+" pour un spectateur de "+Age+" ans coûte " +PrixFin+"$ pour le film "+Film);

}
function lstImage1_onchange()
{
    alert("ok");
    document.getElementById("imgFilm").src="JS/auposte.jpg";
}
function lstImage2_onchange()
{
    alert("ok");
    document.getElementById("imgFilm").src="JS/colette.jpg";
}
function lstImage3_onchange()
{
    alert("ok");
    document.getElementById("imgFilm").src="JS/halloween.jpg";
}
function lstImage4_onchange()
{
    alert("ok");
    document.getElementById("imgFilm").src="JS/religieuse.jpg";
}