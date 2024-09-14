function stockcheck()
{
    let goods=document.getElementById("watch").value
    goods=goods.toLocaleLowerCase();
    alert(goods);
    if(goods=='watch')
    {
        alert("its available in stock")
    }
    else if(goods=='mobile')
    {
        alert("its available in stock");
    }
    else
    {
        alert("wrong entry OR check spelling");
    }
}