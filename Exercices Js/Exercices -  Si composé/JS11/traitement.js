function btnCalculer_onclick()
{
    var Nbre1,Nbre2,Message;

    Nbre1=parseInt(document.getElementById("txtNbre1").value);
    Nbre2=parseInt(document.getElementById("txtNbre2").value);

    if(((Nbre1>=0)&&(Nbre2>=0))||((Nbre1<0)&&(Nbre2<0)))
    {
        Message="Positif";
    }
    else{
        Message="Négatif";
    }
    Message=document.getElementById("lblMessage").innerHTML=Message;
}