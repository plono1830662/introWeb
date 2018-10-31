function btnCalculer_onclick()
{ 
 	var NumSem,Message;

 	NumSem=parseInt(document.getElementById("txtNumSem").value);

 	switch (NumSem)
    {
        case 1:
            Message="Dimanche";
            break;
        case 2:
            Message="Lundi";
            break;
        case 3:
            Message="Mardi";
            break;
        case 4:
            Message="Mercredi";
            break;
        case 5:
            Message="Jeudi";
            break;
        case 6:
            Message="Vendredi";
            break;
        case 7:
            Message="Samedi";
            break;
    }

    document.getElementById("lblMessage").innerHTML=Message;

}