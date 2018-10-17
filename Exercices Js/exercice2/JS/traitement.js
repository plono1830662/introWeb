function btnCalculer_onclick()
{
    var MoyKmMois, TotKm;

    MoyKmMois=parseFloat(document.getElementById("txtKm").value);
    TotKm=(MoyKmMois*60);

    console.log("Vous allez parcourire "+TotKm+" Km en 5 ans");

}