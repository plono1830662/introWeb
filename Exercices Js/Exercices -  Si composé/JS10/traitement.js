function btnCalculer_onclick()
{
    var Age, Catagorie, Message;

    Age=parseInt(document.getElementById("txtAge").value);

    if((Age>=6)&&(Age<=8))
    {
        Catagorie="Poussin";
    }
    else{
        if((Age>=9)&&(Age<=10))
        {
            Catagorie="Pupille";
        }
        else{
            if((Age>=11)&&(Age<=12))
            {
                Catagorie="Minime";
            }
            else{
                Catagorie="Cadet";
            }
        }
    }

    Message=document.getElementById("lblMessage").innerHTML=Catagorie;
}
