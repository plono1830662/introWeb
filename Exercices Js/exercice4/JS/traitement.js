function btnCalculer_onclick()
{ 
    var Dest, Dis, ConsA, PrixL, Cout;

    Dest=(document.getElementById("txtdest").value);
    Dis=parseFloat(document.getElementById("txtdis").value);
    ConsA=parseFloat(document.getElementById("txtconsA").value);
    PrixL=parseFloat(document.getElementById("txtprixL").value);

    Cout=Dis*(ConsA/100)*PrixL;

    console.log("Pour se rendre à "+Dest+" ça vous coutera "+Cout+" $")

}