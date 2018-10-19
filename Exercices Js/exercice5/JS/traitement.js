function btnCalculer_onclick()
{
    var Rev, Loy, Nour, Dep, Res;

    Rev=parseFloat(document.getElementById("txtRev").value);
    Loy=parseFloat(document.getElementById("txtLoy").value);
    Nour=parseFloat(document.getElementById("txtNour").value);
    Dep=parseFloat(document.getElementById("txtDep").value);

    Res=(Rev-Loy-Nour-Dep)/4.33;

    console.log( "Il vous restera "+Res.toFixed(2)+ " $ par semaine")

}