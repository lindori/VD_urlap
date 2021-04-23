window.addEventListener("load",init);

function ID(nev){
    return document.getElementById(nev);
}
function $(nev) {
    return document.querySelectorAll(nev);
}
function init() {
    ID("kuld").addEventListener("click", validalas);
}
function validalas() {
    var hiba="";
    var urlapAdatok="";
    var nevInput=ID("nev").value;
    var szuro= /[A-Z]+[a-z](2,)/;
    console.log(nevInput);
    
    if(nevInput.length < 3) {
        hiba = "A név legalább 3 karakter legyen!<br>";
    }
   
    else if(nevInput[0] != nevInput[0].toUpperCase())  {
        hiba += "A név nagybetűvel kezdődjön!<br>";
    }
    else {
        urlapAdatok+="Név: "+nevInput+"<br>"
    }
    
    
    $("aside section:nth-child(1) p")[0].innerHTML=hiba;
    console.log(hiba);
    $("aside section:nth-child(2) p")[0].innerHTML=urlapAdatok;
}