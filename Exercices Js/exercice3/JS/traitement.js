function btnCalculer_onclick()
{
    var ArgentCAN, TauxChangeEuro,Euro;

    ArgentCAN=parseFloat(document.getElementById("argCan").value);
    TauxChangeEuro=parseFloat(document.getElementById("changeEuro").value);

    Euro=ArgentCAN*TauxChangeEuro;

    console.log("Vous avez "+Euro+" Euro");

}