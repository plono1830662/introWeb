function btnCalculer_onclick()
{
    var Cent1, Cent5, Cent10, Cent25, Tot;

    Cent1=parseFloat(document.getElementById("txtCent1").value);
    Cent5=parseFloat(document.getElementById("txtCent5").value);
    Cent10=parseFloat(document.getElementById("txtCent10").value);
    Cent25=parseFloat(document.getElementById("txtCent25").value);

    Tot=(Cent1*0.01)+(Cent5*0.05)+(Cent10*0.1)+(Cent25*0.25);

    console.log( "Vous avez "+Tot.toFixed(2)+ " $ Canadien Tires")


}